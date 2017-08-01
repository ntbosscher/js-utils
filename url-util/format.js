/*
* @Author: Nathan Bosscher
* @Date:   2017-05-25 07:39:44
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-05-25 07:51:54
*/

'use strict';

class Url {

	constructor(url) {
		this.url = url;
	}

	getParameters() {
		var index = this.url.indexOf("?");
		if(index == -1)
			return {};

		var query = this.url.substring(index + 1);
		var elements = query.split("&");

		var output = {};
		
		elements.forEach(function(element) {
			var subElements = element.split("=");
			var key = decodeURIComponent(subElements[0]);
			var value = decodeURIComponent(subElements[1]);

			output[key] = value;
		});

		return output;
	}
}

function parse(url) {
	return new Url(url);	
}

function format(url, obj) {

	var elements = [];

	for(var i in obj){
		var element = encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
		elements.push(element);
	}

	var query = elements.join("&");
	if(query == "")
		return url;

	return url + "?" + query;
}

export {
	parse,
	format,
}