/*
* @Author: Nate Bosscher (c) 2015
* @Date:   2017-01-16 20:50:41
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-05-23 07:37:01
*/

'use strict';

function values(obj){
	var out = [];

	for(var i in obj)
		out.push(obj[i]);
	
	return out;
}

export default values;