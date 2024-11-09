const {addition, subtraction, multiplication, divide, multiply} = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
        test("should return 131 for 100 + 31", () => {
            expect(addition(100, 31)).toBe(131);
        });
    });
    describe("Subtract function", () => {
        test("should return 50 for 75 - 25", () => {
            expect(subtraction(75, 25)).toBe(50);
        });
    });
    describe("Multiply function", () => {
        test("should return 100 for 20 * 5", () => {
            expect(multiply(20, 5)).toBe(100);
        });
    });
    describe("Divide function", () => {
        test("should return 5 for 20 / 4", () => {
            expect(divide(20, 4)).toBe(5);
        });
    });
});
 