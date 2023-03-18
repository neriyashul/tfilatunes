import { useMemo } from "react";
import getDB from "../db/db-factory";

const db = getDB("file_system");

export function useTfila(key) {
    const tfila = useMemo(() => db.getTefila(key), [key]);
    return tfila;
}

export function useSection(id) {
    const section = useMemo(() => db.getSection(id), [id]);
    return section;
}
