/*
* @Author: Nathan Bosscher
* @Date:   2017-04-14 22:30:36
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-04-14 22:35:31
*/

'use strict';

import Cacheable from "./cacheable.js";

test("basic cache works", function(){
	var a = new Cacheable("a", 1000);

	expect(a.hasExpired()).toBe(false);
	expect(a.get()).toBe("a");
});

test("cache.set() works", function(){
	var a = new Cacheable("a", 1000);

	expect(a.get()).toBe("a");

	a.set("b", 1000)
	expect(a.get()).toBe("b");
});

test("cache timeout works", function(){
	var a = new Cacheable("a", 100);

	expect(a.hasExpired()).toBe(false);
	expect(a.get()).toBe("a");

	setTimeout(function(){

		expect(a.hasExpired()).toBe(true);
		expect(a.get()).toBe(undefined);

	}, 101);
});

test("cache invalidate works", function(){
	var a = new Cacheable("a", 100);

	expect(a.hasExpired()).toBe(false);
	expect(a.get()).toBe("a");

	a.invalidate();

	expect(a.hasExpired()).toBe(true);
	expect(a.get()).toBe(undefined);

});