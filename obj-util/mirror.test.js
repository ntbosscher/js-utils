/*
* @Author: Nathan Bosscher
* @Date:   2017-05-22 17:29:38
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-05-22 17:36:30
*/

'use strict';

import mirror from "./mirror.js";

test("mirror() works", function(){

	var sample = {
		"a": null,
		"b": null,
	}

	var mirr = mirror(sample);

	expect(mirr).toEqual({
		"a": "a",
		"b": "b",
	});

});

test("mirror() nested works", function(){

	var sample = {
		"a": { "c": null, "d": null},
		"b": null,
	}

	var mirr = mirror(sample);

	expect(mirr).toEqual({
		"a": {
			"c": "a.c",
			"d": "a.d",
		},
		"b": "b",
	});

});