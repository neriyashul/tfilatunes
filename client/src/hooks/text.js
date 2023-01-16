import DBGateway from "../db/db-gateway";
import { useQuery } from "react-query";
import { useState } from "react";

export default function useText() {
    const [db] = useState(() => new DBGateway());
    const {isLoading, data, error} = useQuery("text", db.getText);
    const text = data?.text.join(", ");
    return { isLoading, text: text, error };
}