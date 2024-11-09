const { before, beforeEach, default: test } = require("node:test");
const buttonClick = require("../button");
const { describe } = require("yargs");
const { expect } = require("@jest/globals");
const { file } = require("@babel/types");

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.reasFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByName("h1").length).toBe(1);
    });
});