/*
* @Author: Nate Bosscher (c) 2015
* @Date:   2017-01-11 08:19:46
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-05-23 07:56:35
*/

'use strict';

import fp from "./format-phone.js";

describe("FormatPhone", function(){

	it("should handle zero length", function(){
		expect(fp("")).toBe("");
	});

	it("should handle 0-4 length", function(){
		expect(fp("1")).toBe("1");
		expect(fp("12")).toBe("12");
		expect(fp("123")).toBe("123");
		expect(fp("1234")).toBe("1234");
	});

	it("should handle 5-7 length", function(){
		expect(fp("12345")).toBe("1-2345");
		expect(fp("123456")).toBe("12-3456");
		expect(fp("1234567")).toBe("123-4567");
	});

	it("should handle 8-11 length", function(){
		expect(fp("12345678")).toBe("1-234-5678");
		expect(fp("123456789")).toBe("12-345-6789");
		expect(fp("1234567890")).toBe("123-456-7890");
	});

	it("should handle 12 length", function(){
		expect(fp("12345678905")).toBe("1 234-567-8905");
	});

	it("should handle pre-formatted number", function(){
		expect(fp("1")).toBe("1");
		expect(fp("12")).toBe("12");
		expect(fp("123")).toBe("123");
		expect(fp("1234")).toBe("1234");
		expect(fp("1-2345")).toBe("1-2345");
		expect(fp("12-3456")).toBe("12-3456");
		expect(fp("123-4567")).toBe("123-4567");
		expect(fp("1-234-5678")).toBe("1-234-5678");
		expect(fp("12-345-6789")).toBe("12-345-6789");
		expect(fp("123-456-7890")).toBe("123-456-7890");
		expect(fp("1 234-567-8905")).toBe("1 234-567-8905");
	})
})