import { useMemo } from "react";
import getDB from "../db/db-factory";

const db = getDB("file_system");

export function useTefila(key) {
    const tefila = useMemo(() => db.getTefila(key), [key]);
    return tefila;
}

export function useSection(id) {
    const section = useMemo(() => db.getSection(id), [id]);
    return section;
}
