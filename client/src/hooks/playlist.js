import DBGateway from "../db/db-gateway";
import { useQuery } from "react-query";
import { useState } from "react";

export default function usePlaylist(key) {
    const [db] = useState(() => new DBGateway());
    const {isLoading, data, error} = useQuery("tunes", db.getTunes);
    return { isLoading, tunes: data?.tunes, error };
}
