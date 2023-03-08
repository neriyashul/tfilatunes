import { useMemo } from "react";
import useDatabase from "./database";

export function useTefila(key) {
    const db = useDatabase();
    const tefila = useMemo(() => db.getTefila(key), [db, key]);
    return tefila;
}

export function useSection(id) {
    const db = useDatabase();
    const section = useMemo(() => db.getSection(id), [db, id]);
    return section;
}
