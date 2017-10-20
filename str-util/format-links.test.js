/*
* @Author: Nathan Bosscher
* @Date:   2017-10-19 19:13:57
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-10-19 19:19:37
*/

import formatLinks from "./format-links.js";

describe("test formatLinks", () => {

	it("should format urls", () => {

		var str = "Hello world, this is google.com";
		var expected = "Hello world, this is <a href='http://google.com' target='_blank'>google.com</a>";

		var result = formatLinks(str);

		expect(result).toEqual(expected);
	});

	it("should allow for overriding of target", () => {

		var str = "Hello world, this is google.com";
		var expected = "Hello world, this is <a href='http://google.com'>google.com</a>";

		var result = formatLinks(str, {target: null});

		expect(result).toEqual(expected);
	});

	it("should format emails", () => {

		var str = "bob@google.com was here";
		var expected = "<a href='mailto:bob@google.com' target='_blank'>bob@google.com</a> was here";

		var result = formatLinks(str);

		expect(result).toEqual(expected);
	});
})