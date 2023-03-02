const FileSystemDB = require("../db/file-system-db");

describe("when create FileSystemDB", () => {
    test("test should not be null", () => {
        const db = new FileSystemDB();
        expect(db).not.toBe(null);
    });
});

describe("when call getTefila", () => {
    test("test empty Id, should return undefined", () => {
        const db = new FileSystemDB();
        expect(db.getTefila()).toBe(undefined);
        expect(db.getTefila("")).toBe(undefined);
    });

    test("test not exists Id, should return undefined", () => {
        const db = new FileSystemDB();
        expect(db.getTefila("blabla")).toBe(undefined);
    });

    test("test exists Id, should return the tefila with the id", () => {
        const db = new FileSystemDB();
        const tefila = db.getTefila("kabbalat-shabbat");
        expect(tefila).not.toBe(undefined);
        expect(tefila.key).toBe("kabbalat-shabbat");
    });
});

describe("when call getSection", () => {
    test("test empty Id, should return undefined", () => {
        const db = new FileSystemDB();
        expect(db.getSection()).toBe(undefined);
        expect(db.getSection("")).toBe(undefined);
    });

    test("test not exists Id, should return undefined", () => {
        const db = new FileSystemDB();
        expect(db.getSection("blabla")).toBe(undefined);
        expect(db.getSection(-1)).toBe(undefined);
    });

    test("test exists Id, should return the tefila with the id", () => {
        const db = new FileSystemDB();
        const id = 10;
        const tefila = db.getSection(id);
        expect(tefila).not.toBe(undefined);
        expect(tefila.key).toBe("kabbalat-shabbat");
        const section = tefila.sections[0];
        expect(section.name).toBe("לכו נרננה");
        const subsection = section.subsections.filter((e) => e.id == id)[0];
        expect(subsection).not.toBe(undefined);
    });
});

describe("when call getTunes", () => {
    test("test empty Id, should return undefined", () => {
        const db = new FileSystemDB();
        expect(db.getTunes()).toBe(undefined);
        expect(db.getTunes("")).toBe(undefined);
    });

    test("test not exists Id, should return undefined", () => {
        const db = new FileSystemDB();
        expect(db.getTunes("blabla")).toBe(undefined);
        expect(db.getTunes(-1)).toBe(undefined);
    });

    test("test exists Id, should return the tefila with the id", () => {
        const db = new FileSystemDB();
        const subsectionId = 140;
        const tunes = db.getTunes(subsectionId);
        expect(tunes).not.toBe(undefined);
        expect(tunes[0].name).toBe("דוד מלך ישראל");
        const subsection = tunes[0].subsections[0];
        expect(subsection.id).toBe(subsectionId);
    });
});

describe("when call getTune", () => {
    test("test empty Id, should return undefined", () => {
        const db = new FileSystemDB();
        expect(db.getTune()).toBe(undefined);
        expect(db.getTune("")).toBe(undefined);
    });

    test("test not exists Id, should return undefined", () => {
        const db = new FileSystemDB();
        expect(db.getTune("blabla")).toBe(undefined);
        expect(db.getTune(-1)).toBe(undefined);
    });

    test("test exists Id, should return the tefila with the id", () => {
        const db = new FileSystemDB();
        const id = 1;
        const tune = db.getTune(id);
        expect(tune).not.toBe(undefined);
        expect(tune.name).toBe("דוד מלך ישראל");
        expect(tune.id).toBe(id);
    });
});
