/*
* @Author: Nathan Bosscher
* @Date:   2017-06-06 20:54:31
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-06-06 21:00:00
*/

'use strict';

function isPlainObject(o){
	return typeof o == 'object' && o.constructor == Object;
}

function merge(objA, objB) {

	for(var i in objB) {
		if(objA[i] == undefined){
			objA[i] = objB[i];
		} else {

			if(isPlainObject(objA[i]) && isPlainObject(objB[i])){
				objA[i] = merge(objA[i], objB[i]);
			}
		}
	}

	return objA;
}

export default merge;