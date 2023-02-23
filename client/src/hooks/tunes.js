import DBGateway from "../db/db-gateway";
import { useQuery } from "react-query";
import { useRef, useState } from "react";

export default function useTunes(key) {
    if (!key) return {}
    const db = useRef(new DBGateway());
    const {isLoading, data, error} = useQuery(`tunes/${key}`, () => db.current.getTunes(key));
    // const {isLoading, data, error} = useQuery(`tunes/${key}`, () => db.current.getTunes(key));
    return { isLoading, tunes: data?.tunes, error };
}
