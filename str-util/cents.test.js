/*
* @Author: Nate Bosscher (c) 2015
* @Date:   2017-01-11 08:05:58
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-04-12 21:38:53
*/

'use strict';

import df from "./dollarformat.js";

describe("dollarformat", function(){
	it("should take positive integer", function(){
		var i = 1;
		expect(df.string(i)).toBe("1.00");
	});
	it("should take negative integer", function(){
		var i = -1;
		expect(df.string(i)).toBe("-1.00");
	});
	it("should take one decimal float", function(){
		var i = 1.2;
		expect(df.string(i)).toBe("1.20");
	});
	it("should take two decimal float", function(){
		var i = 1.23;
		expect(df.string(i)).toBe("1.23");
	});
	it("should take three decimal float", function(){
		var i = 1.234;
		expect(df.string(i)).toBe("1.23");
	});
	it("should fix the loss of precision", function(){
		var i = 2.32 * 100;
		expect(df.string(i)).toBe("232.00");
	});
})

describe("dollarstring-to-cents", function(){
	it("should take 1.00", function(){
		var i = "1.00";
		expect(df.dollarStringToCents(i)).toBe(100);
	});
	it("should take dollars and cents", function(){
		var i = "1.01";
		expect(df.dollarStringToCents(i)).toBe(101);
	});
	it("should take cents", function(){
		var i = "0.01";
		expect(df.dollarStringToCents(i)).toBe(1);
	});
	it("should take cents no leading zero", function(){
		var i = ".01";
		expect(df.dollarStringToCents(i)).toBe(1);
	});
	it("should take dollars, decimal, no trailing zeros", function(){
		var i = "1.";
		expect(df.dollarStringToCents(i)).toBe(100);
	});
	it("should take dollars, no-decimal, no trailing zeros", function(){
		var i = "1";
		expect(df.dollarStringToCents(i)).toBe(100);
	});
	it("should take dollars, extra cents spaces", function(){
		var i = "1.102";
		expect(df.dollarStringToCents(i)).toBe(110);
	});
	it("should take dollars, would overflow if cents * 100", function(){
		var i = "0.14";
		expect(df.dollarStringToCents(i)).toBe(14);
	});
})