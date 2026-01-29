import getDB from "../db/db-factory";
import { useQuery } from "react-query";

// const db_type = import.meta.env.VITE_DB_TYPE;
// const db = getDB(db_type);
const db = getDB("file_system");

export function useTunes(subsectionId) {
    const { isLoading, data, error } = useQuery(
        `tunes-${subsectionId}`,
        () => Promise.resolve(db.getTunes(subsectionId)),
        { enabled: Boolean(subsectionId) }
    );
    const tunes =
        data?.map((tune) => {
            const subsection = tune.subsections?.[0];
            const subsectionViews = subsection?.performances?.[0]?.yt_views;
            const performanceViews = tune.performance?.yt_views;

            // Prefer the main tune performance views ("first tune") over subsection performances.
            const yt_views = performanceViews ?? subsectionViews ?? 0;

            return {
                ...tune,
                yt_views,
            };
        }) ?? data;

    return { isLoading, tunes, error };
}

export function useTune(id, subsectionId) {
    const { isLoading, data, error } = useQuery(
        `tune-${id}-sub-${subsectionId}`,
        () => Promise.resolve(db.getTune(id, subsectionId)),
        { enabled: Boolean(id) && Boolean(subsectionId) }
    );
    return { isLoading, tune: data, error };
}
