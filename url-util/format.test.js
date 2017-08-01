/*
* @Author: Nathan Bosscher
* @Date:   2017-05-25 07:43:34
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-05-25 07:52:12
*/

'use strict';

import {parse, format} from "./format.js";

test("parse()", function(){

	var result = parse("http://google.ca/?a=z&q=asdf%20ghi").getParameters();

	expect(result).toEqual({"a":"z","q":"asdf ghi"});

});

test("parse() duplicate keys", function(){

	var result = parse("http://google.ca/?a=z&a=c").getParameters();

	expect(result).toEqual({"a":"c"});

});

test("format()", function(){

	var str = format("http://google.ca", {"a":"a b", "k": "q"});
	expect(str).toEqual("http://google.ca?a=a%20b&k=q");
});

test("format() empty query", function(){

	var str = format("http://google.ca", {});
	expect(str).toEqual("http://google.ca");
});