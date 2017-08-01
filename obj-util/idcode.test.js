/*
* @Author: Nate Bosscher (c) 2015
* @Date:   2017-01-26 08:19:15
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-04-12 21:41:57
*/

'use strict';

import {NewIdCodeScope} from "./idcode";

describe("idcode test", function(){

	it("idcode basically works", function(){
		var idcode = NewIdCodeScope();

		var a = {};
		var b = {};
		
		var ia = idcode(a);
		var ib = idcode(b);

		expect(ia).toBeDefined();
		expect(ib).toBeDefined();
		expect(ia).not.toEqual(ib);
	});

	it("idcode returns the same code for the same object", function(){
		var idcode = NewIdCodeScope();
		
		var a = {};
		var b = {};
		
		var ia = idcode(a);
		var ib = idcode(b);
		var ic = idcode(a);

		expect(ic).toEqual(ia);
		expect(ia).not.toEqual(ib);
	});
})