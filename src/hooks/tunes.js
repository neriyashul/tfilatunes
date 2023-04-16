import getDB from "../db/db-factory";
import { useQuery } from "react-query";

const db_type = import.meta.env.VITE_DB_TYPE;
const db = getDB(db_type);

export function useTunes(subsectionId) {
    const { isLoading, data, error } = useQuery(
        `tunes-${subsectionId}`,
        () => Promise.resolve(db.getTunes(subsectionId)),
        { enabled: Boolean(subsectionId) }
    );
    return { isLoading, tunes: data, error };
}

export function useTune(id, subsectionId) {
    const { isLoading, data, error } = useQuery(
        `tune-${id}-sub-${subsectionId}`,
        () => Promise.resolve(db.getTune(id, subsectionId)),
        { enabled: Boolean(id) && Boolean(subsectionId) }
    );
    return { isLoading, tune: data, error };
}
