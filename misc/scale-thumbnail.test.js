/*
* @Author: Nathan Bosscher
* @Date:   2017-09-27 07:46:12
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-09-28 07:43:40
*/

import ScaleThumbnail from "./scale-thumbnail.js";

test("scale thumbnail w/h=.5", () => {

	var result = ScaleThumbnail({
		w: 100,
		h: 200,
		maxH: 100,
		maxW: 100,
	});

	expect(result).toEqual({w: 50, h: 100});
});

test("scale thumbnail w/h=2", () => {

	var result = ScaleThumbnail({
		w: 200,
		h: 100,
		maxH: 100,
		maxW: 100,
	});

	expect(result).toEqual({w: 100, h: 50});
});

test("scale thumbnail w/h=1", () => {

	var result = ScaleThumbnail({
		w: 50,
		h: 50,
		maxH: 100,
		maxW: 100,
	});

	expect(result).toEqual({w: 100, h: 100});
});