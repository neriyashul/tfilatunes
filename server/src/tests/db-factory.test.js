const createDB = require('../db/db-factory');

jest.mock('../db/file-system-db');


describe("when db-factory createDB", () => {
    test('test FileSystemDB created if file system is passed as argument', () => {
        const db = createDB('file system');
        expect(db).not.toBe(undefined);
    })
})
