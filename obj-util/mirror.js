/*
* @Author: Nathan Bosscher
* @Date:   2017-05-22 17:25:40
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-05-22 17:36:44
*/

'use strict';

/**
Converts 
{ 
	"Category" : {
		"PropertyA": null,
		"PropertyB": null,
	},
	"Random": null,
}
to 
{ 
	"Category" : {
		"PropertyA": "Category.PropertyA",
		"PropertyB": "Category.PropertyB",
	},
	"Random": "Random",
}
*/
function mirror(obj, prefix) {

	if(!prefix)
		prefix = [];

	for(var i in obj){
		prefix.push(i);
		
		if(!obj[i]){
			obj[i] = prefix.join(".");
		} else {
			obj[i] = mirror(obj[i], prefix);
		}

		prefix.pop();
	}

	return obj;
}

export default mirror