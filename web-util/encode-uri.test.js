/*
* @Author: Nate Bosscher (c) 2015
* @Date:   2017-01-14 12:52:51
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-05-23 08:02:40
*/

'use strict';

import encodeUri from "./encode-uri.js";

describe("webutil", function(){

	it("uriEncode should handle basic object", function(){
		var o = {
			a: "123",
		};
		var v = "a=123";

		expect(encodeUri(o)).toBe(v);
	});

	it("uriEncode should handle null object", function(){
		var o = {};
		var v = "";

		expect(encodeUri(o)).toBe(v);
	});

	it("uriEncode should handle multiparam object", function(){
		var o = {
			a: "123",
			b: "456",
		};
		var v = "a=123&b=456";

		expect(encodeUri(o)).toBe(v);
	});

	it("uriEncode should handle uriEncodeComponent object", function(){
		var o = {
			a: "123",
			b: "1 3",
		};
		var v = "a=123&b=1%203";

		expect(encodeUri(o)).toBe(v);
	});
	it("uriEncode should handle uriEncodeComponent object", function(){
		var o = {
			a: undefined,
			b: "13",
		};
		var v = "b=13";

		expect(encodeUri(o)).toBe(v);
	});
})