// Importing the finction that we're testing from the calc.js file.
const { describe } = require("yargs");
const addition = require("../calc");
const { default: test } = require("node:test");
const { expect } = require("@jest/globals");

describe("calculator", () => {
    describe("addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20,22).toBe(42));
        });
    });
})