/*
* @Author: Nate Bosscher (c) 2015
* @Date:   2017-01-25 21:05:42
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-05-23 07:38:53
*/

'use strict';

function isObject(o) {
  return null != o && 
    typeof o === 'object' && 
    Object.prototype.toString.call(o) === '[object Object]';
}

function ParseClassName(className){
	var parts = className.split(" ");
	var obj = {};

	for(var i = 0; i < parts.length; i++)
		obj[parts[i]] = true;

	return obj;
}

// takes { name: true, name2: true, name3: false } 
// and generates "name name2"
function ClassName(val){
	if(!isObject(val))
		return null;

	var lst = [];
	for(var i in val){
		if(val[i]){
			lst.push(i);
		}
	}

	return lst.join(" ");
}

export default ClassName;

export { ParseClassName, ClassName };