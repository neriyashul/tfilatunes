const FileSystemDB = require('./file-system-db');


function createDB(db_type) {
    switch(db_type) {
        case 'file system':
            return new FileSystemDB();
        default:
            throw new TypeError(`${db_type} is not a valid database`)
    } 
}

module.exports = createDB;