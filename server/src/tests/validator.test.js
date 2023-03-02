const validator = require("../utils/validator");

describe("when call isInt", () => {
    test("if text is undefined should return false", () => {
        const isValid = validator.isInt();
        expect(isValid).toBe(false);
    });

    test("if text is empty should return false", () => {
        const isValid = validator.isInt("");
        expect(isValid).toBe(false);
    });

    test("if text is start with letter should return false", () => {
        let isValid = validator.isInt("as");
        expect(isValid).toBe(false);

        isValid = validator.isInt("j123");
        expect(isValid).toBe(false);
    });

    test("if text contains letters should return false", () => {
        let isValid = validator.isInt("123a123");
        expect(isValid).toBe(false);

        isValid = validator.isInt("111123k");
        expect(isValid).toBe(false);
    });

    test("if text is float should return false", () => {
        let isValid = validator.isInt("123.567");
        expect(isValid).toBe(false);

        isValid = validator.isInt("123.0");
        expect(isValid).toBe(false);

        isValid = validator.isInt("0.0");
        expect(isValid).toBe(false);
    });

    test("if arg is float should return false", () => {
        let isValid = validator.isInt(123.2);
        expect(isValid).toBe(false);

        isValid = validator.isInt(0.1);
        expect(isValid).toBe(false);
    });

    test("if text is int should return true", () => {
        let isValid = validator.isInt("123");
        expect(isValid).toBe(true);

        isValid = validator.isInt("0");
        expect(isValid).toBe(true);
    });

    test("if arg is int should return true", () => {
        let isValid = validator.isInt(123);
        expect(isValid).toBe(true);

        isValid = validator.isInt(0);
        expect(isValid).toBe(true);
    });
});
