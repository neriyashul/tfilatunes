import { FileSystemDB } from "./file-system-db";

export default function getDB() {
    const db_type = "file system"

    switch (db_type) {
        case "file system":
            return new FileSystemDB();
        default:
            throw new TypeError(`${db_type} is not a valid database`);
    }
}
