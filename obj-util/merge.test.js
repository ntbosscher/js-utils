/*
* @Author: Nathan Bosscher
* @Date:   2017-06-06 20:57:50
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-06-06 21:00:51
*/

'use strict';

import merge from "./merge.js";

describe("test merging functionality", function() {

	it("merge 1 level", function(){

		var a = {a: "1"};
		var b = {b: "2"};

		var merged = merge(a, b);

		expect(merged).toEqual({
			a: "1",
			b: "2",
		});

	});

	it("merge multi-level", function(){

		var a = {a: {a: "1"}};
		var b = {a: {b: "2"}};

		var merged = merge(a, b);

		expect(merged).toEqual({
			a:{
				a: "1",
				b: "2",
			}
		});

	});

});