/*
* @Author: Nate Bosscher (c) 2015
* @Date:   2017-02-28 21:40:52
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-05-23 08:10:59
*/

'use strict';

import deepCompare from "./deep-compare.js";

describe("check deep compare", function(){

	it("should work on simple values", function(){

		expect(deepCompare(1, 1)).toBe(true);
		expect(deepCompare("1", "1")).toBe(true);
		expect(deepCompare(true, true)).toBe(true);

		expect(deepCompare(1, 2)).toBe(false);
		expect(deepCompare("1", "2")).toBe(false);
		expect(deepCompare(true, false)).toBe(false);
	});

	it("should work on objects", function(){

		var a = {"foo":"bar"};
		var b = {"foo":"bar"};
		expect(deepCompare(a, b)).toBe(true);

		var a = {"foo":"bar"};
		var b = {"hello":"world"};
		expect(deepCompare(a, b)).toBe(false);

		var a = {"foo":"bar"};
		var b = {"foo":"bar","hello":"world"};
		expect(deepCompare(a, b)).toBe(false);

		var a = {"foo":"bar","hello":"world"};
		var b = {"foo":"bar"};
		expect(deepCompare(a, b)).toBe(false);
	});

	it("should work on arrays", function(){

		var a = ["foo", "bar"];
		var b = ["foo", "bar"];
		expect(deepCompare(a, b)).toBe(true);

		var a = ["foo", "bar"];
		var b = ["hello", "world"];
		expect(deepCompare(a, b)).toBe(false);

		var a = ["foo", "bar"];
		var b = ["bar", "foo"];
		expect(deepCompare(a, b)).toBe(false);

		var a = ["foo", "bar"];
		var b = ["foo", "bar", "hello", "world"];
		expect(deepCompare(a, b)).toBe(false);

		var a = ["foo", "bar", "hello", "world"];
		var b = ["foo", "bar"];
		expect(deepCompare(a, b)).toBe(false);
	});
})