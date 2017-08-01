/*
* @Author: Nate Bosscher (c) 2015
* @Date:   2017-04-03 19:51:20
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-05-23 08:14:18
*/

'use strict';

import EventEmitter from "./eventemitter.js";

test("emit works", function(){

	var e = new EventEmitter();

	var called = 0;

	e.listen(function(obj){
		called += obj;
	});

	e.emit(132);

	expect(called).toBe(132);

})