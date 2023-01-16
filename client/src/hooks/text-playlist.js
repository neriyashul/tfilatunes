import DBGateway from "../db/db-gateway";
import { useQuery } from "react-query";
import { useState } from "react";

export default function useTextPlaylist(id) {
    const [db] = useState(() => new DBGateway());
    const { isLoading, data, error } = useQuery("metadata", db.getMetadata);
    return {
        isLoading,
        name: data?.name,
        next: data?.next,
        prev: data?.prev,
        sections: data?.sections,
        error,
    };
}
