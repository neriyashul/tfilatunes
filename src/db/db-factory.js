import DBGateway from "./db-gateway";
import { FileSystemDB } from "./file-system-db";

export default function getDB(db_type) {
    switch (db_type) {
        case "file_system":
            return new FileSystemDB();
        case "server":
            return new DBGateway();
        default:
            throw new TypeError(`${db_type} is not a valid database`);
    }
}
