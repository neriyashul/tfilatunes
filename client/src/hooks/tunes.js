import { useMemo } from "react";
import useDatabase from "./database";

export function useTunes(key) {
    if (!key) return {};
    const db = useDatabase();
    const tunes = useMemo(() => db.getTunes(key), [db, key]);
    return { isLoading: false, tunes, error: null };
}

export function useTune(id, subsectionId) {
    if (!id) return {};
    const db = useDatabase();
    let tune = useMemo(() => db.getTune(id, subsectionId), [db, id]);

    return { isLoading: false, tune, error: null };
}
