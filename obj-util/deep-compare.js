/*
* @Author: Nate Bosscher (c) 2015
* @Date:   2017-02-28 21:34:39
* @Last Modified by:   Nate Bosscher
* @Last Modified time: 2017-04-03 20:14:33
*/

'use strict';

// deep compare does an == equality match
// by traversing into arrays and objects. 
// 
// do not use this on circular referenced 
// objects or deeply nested objects
function deepCompare(a, b){

	if(a == null || a == undefined){
		if(a == b)
			return true;
		else
			return false;
	}

	if(b == null || b == undefined){
		return false;
	}

	if(a.constructor != b.constructor)
		return false;

	switch(a.constructor){
		case Array:
			return traverseArray(a, b);
		case Object:
			return traverseObject(a, b);
		default:
			return a == b;
	}
};

function traverseArray(a, b){
	if(a.length != b.length)
		return false;

	for(var i = 0; i < a.length; i++){
		if(!deepCompare(a[i], b[i]))
			return false;
	}

	return true;
}

function traverseObject(a, b) {
	if(Object.keys(a).length != Object.keys(b).length)
		return false;
	
	for(var i in a){
		if(!deepCompare(a[i], b[i]))
			return false;
	}

	return true;
}

export default deepCompare;