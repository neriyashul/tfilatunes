import DBGateway from "../db/db-gateway";
import { useQuery } from "react-query";
import { useRef, useState } from "react";

export function useTunes(key) {
    if (!key) return {}
    const db = useRef(new DBGateway());
    const {isLoading, data, error} = useQuery(`tunes/${key}`, () => db.current.getTunes(key));
    // const {isLoading, data, error} = useQuery(`tunes/${key}`, () => db.current.getTunes(key));
    return { isLoading, tunes: data?.tunes, error };
}

export function useTune(id) {
    if (!id) return {}
    const db = useRef(new DBGateway());
    const tune = db.current.getTune(id);
    // const {isLoading, data, error} = useQuery(`tune/${id}`, () => db.current.getTunes(id));
    return { isLoading: false, tune, error: null };
}