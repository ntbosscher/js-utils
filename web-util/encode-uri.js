/*
* @Author: Nate Bosscher (c) 2015
* @Date:   2017-01-14 12:50:22
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-05-23 08:02:03
*/

'use strict';

function encodeUri(obj){
	var ls = [];
	for(var i in obj){
		if(obj[i] != undefined)
			ls.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i].toString()));
	}

	return ls.join("&");
}

export default encodeUri;