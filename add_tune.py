#!/usr/bin/env python3
"""
Simple terminal UI to add a tune into the local JSON databases.

It updates:
- src/db/data/tunes.json   (used by the front‑end file‑system DB)
- functions/db/data/tunes.json (if it exists, for functions)

The script lets you:
1. Pick a subsection (by ID) from src/db/data/tfilot.json
2. Enter tune metadata
3. Append a new tune object with the next available numeric id
"""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any, Dict, List, Optional

ROOT = Path(__file__).resolve().parent

SRC_TUNES_PATH = ROOT / "src" / "db" / "data" / "tunes.json"
FUNC_TUNES_PATH = ROOT / "functions" / "db" / "data" / "tunes.json"
TFILOT_PATH = ROOT / "src" / "db" / "data" / "tfilot.json"


def load_json(path: Path) -> Any:
    with path.open("r", encoding="utf-8") as f:
        return json.load(f)


def save_json(path: Path, data: Any) -> None:
    # Keep a simple backup alongside the file the first time we touch it
    backup = path.with_suffix(path.suffix + ".bak")
    if not backup.exists():
        try:
            backup.write_text(path.read_text(encoding="utf-8"), encoding="utf-8")
        except FileNotFoundError:
            pass

    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
        f.write("\n")


def pick_subsection_by_id(tfilot: List[Dict[str, Any]], subsection_id: int) -> Optional[Dict[str, Any]]:
    for tfila in tfilot:
        for section in tfila.get("sections", []):
            for sub in section.get("subsections", []):
                if sub.get("id") == subsection_id:
                    return {
                        "id": subsection_id,
                        "name": sub.get("name"),
                        "tfila_key": tfila.get("key"),
                        "tfila_name": tfila.get("name"),
                    }
    return None


def choose_from_list(title: str, items: List[Dict[str, Any]], label_key: str) -> Optional[Dict[str, Any]]:
    """
    Show a numbered list of items and let the user pick by number.
    Each item must have label_key (e.g. 'name') and we also support an optional 'extra' key to display.
    """
    if not items:
        print(f"\nלא נמצאו אופציות עבור: {title}")
        return None

    while True:
        print(f"\n{title}")
        for idx, item in enumerate(items, start=1):
            label = str(item.get(label_key, ""))
            extra = item.get("extra")
            if extra:
                print(f"{idx}. {label} ({extra})")
            else:
                print(f"{idx}. {label}")

        choice = input("בחר מספר (או השאר ריק לביטול): ").strip()
        if not choice:
            return None
        try:
            num = int(choice)
        except ValueError:
            print("ערך לא חוקי, נסה שוב.")
            continue

        if 1 <= num <= len(items):
            return items[num - 1]

        print("מספר מחוץ לטווח, נסה שוב.")


def interactive_pick_subsection(tfilot: List[Dict[str, Any]]) -> Optional[Dict[str, Any]]:
    """
    Step‑by‑step selection:
    1. Pick תפילה (by name)
    2. Pick section (by name)
    3. Pick subsection (by name)
    Returns a dict like pick_subsection_by_id.
    """
    # 1. Pick תפילה
    tfila_items: List[Dict[str, Any]] = []
    for tfila in tfilot:
        tfila_items.append(
            {
                "name": tfila.get("name"),
                "key": tfila.get("key"),
                "raw": tfila,
            }
        )

    chosen_tfila = choose_from_list("בחר תפילה:", tfila_items, "name")
    if not chosen_tfila:
        return None
    tfila_raw = chosen_tfila["raw"]

    # 2. Pick section
    section_items: List[Dict[str, Any]] = []
    for section in tfila_raw.get("sections", []):
        section_items.append(
            {
                "name": section.get("name"),
                "raw": section,
            }
        )

    chosen_section = choose_from_list("בחר קטע (סעיף) בתוך התפילה:", section_items, "name")
    if not chosen_section:
        return None
    section_raw = chosen_section["raw"]

    # 3. Pick subsection
    subs = section_raw.get("subsections") or []
    subsection_items: List[Dict[str, Any]] = []
    for sub in subs:
        subsection_items.append(
            {
                "name": sub.get("name"),
                "id": sub.get("id"),
                "raw": sub,
            }
        )

    chosen_sub = choose_from_list("בחר תת‑קטע (subsection):", subsection_items, "name")
    if not chosen_sub:
        return None

    sub_raw = chosen_sub["raw"]
    return {
        "id": sub_raw.get("id"),
        "name": sub_raw.get("name"),
        "tfila_key": tfila_raw.get("key"),
        "tfila_name": tfila_raw.get("name"),
    }


def prompt_int(prompt: str, allow_empty: bool = True) -> Optional[int]:
    while True:
        value = input(prompt).strip()
        if not value and allow_empty:
            return None
        try:
            return int(value)
        except ValueError:
            print("ערך לא חוקי, נסה שוב (מספר שלם).")


def prompt_non_empty(prompt: str) -> str:
    while True:
        value = input(prompt).strip()
        if value:
            return value
        print("שדה זה הוא חובה, נסה שוב.")


def extract_youtube_id(url_or_id: str) -> str:
    """
    Accept either a raw 11‑char videoId or a common YouTube URL and
    try to pull out the videoId.
    """
    text = url_or_id.strip()
    if len(text) == 11 and "/" not in text and "&" not in text and "?" not in text:
        return text

    # Very small parser that covers the common cases
    if "youtu.be/" in text:
        return text.split("youtu.be/")[1][:11]
    if "watch?v=" in text:
        return text.split("watch?v=")[1][:11]
    if "/embed/" in text:
        return text.split("/embed/")[1][:11]

    # Fallback – just return what we got
    return text


def next_tune_id(tunes: List[Dict[str, Any]]) -> int:
    max_id = 0
    for t in tunes:
        try:
            tid = int(t.get("id", 0))
        except (TypeError, ValueError):
            continue
        if tid > max_id:
            max_id = tid
    return max_id + 1 if max_id >= 0 else 1


def main() -> None:
    if not TFILOT_PATH.exists():
        print(f"לא נמצא קובץ תפילות: {TFILOT_PATH}")
        return

    tfilot = load_json(TFILOT_PATH)

    print("הוספת מנגינה חדשה לקטע תפילה\n")

    # Instead of asking for subsectionId, guide the user by names
    sub_info = interactive_pick_subsection(tfilot)
    if not sub_info:
        print("\nלא נבחר קטע. יוצא מהתהליך.")
        return

    print(
        f"\nנבחר קטע:\n"
        f"- תפילה: {sub_info['tfila_name']} (key: {sub_info['tfila_key']})\n"
        f"- קטע: {sub_info['name']} (id: {sub_info['id']})\n"
    )

    name = prompt_non_empty("שם המנגינה: ")
    performer = prompt_non_empty("מבצע: ")
    composer = input("מלחין (אופציונלי): ").strip() or None

    youtube_input = prompt_non_empty("קישור ליוטיוב או videoId: ")
    video_id = extract_youtube_id(youtube_input)

    start_at = prompt_int("זמן התחלה בשניות (אופציונלי, ריק אם אין): ")
    rate = prompt_int("דירוג התאמה למילים 1‑5 (אופציונלי): ")

    label = f"{name} - {performer}" if performer and performer not in name else name

    # Load tunes.json from src
    if SRC_TUNES_PATH.exists():
        tunes = load_json(SRC_TUNES_PATH)
    else:
        tunes = []

    new_id = next_tune_id(tunes)

    new_tune: Dict[str, Any] = {
        "id": new_id,
        "name": name,
        "composer": composer or "",
        "performance": {
            "videoId": video_id,
        },
        "subsections": [
            {
                "id": sub_info["id"],
                "name": sub_info["name"],
            }
        ],
    }

    if label:
        new_tune["performance"]["label"] = label
    if start_at is not None:
        new_tune["performance"]["startAt"] = start_at
    if rate is not None:
        new_tune["subsections"][0]["rate"] = rate

    tunes.append(new_tune)
    save_json(SRC_TUNES_PATH, tunes)

    # Try to keep the functions copy in sync, if it exists
    if FUNC_TUNES_PATH.exists():
        func_tunes = load_json(FUNC_TUNES_PATH)
        func_tunes.append(new_tune)
        save_json(FUNC_TUNES_PATH, func_tunes)

    print("\nהמנגינה נוספה בהצלחה!")
    print(f"- קובץ עודכן: {SRC_TUNES_PATH}")
    if FUNC_TUNES_PATH.exists():
        print(f"- קובץ עודכן: {FUNC_TUNES_PATH}")
    print(f"- מזהה המנגינה החדש: {new_id}")


if __name__ == "__main__":
    main()

