/*
* @Author: Nate Bosscher (c) 2015
* @Date:   2017-01-26 08:15:59
* @Last Modified by:   Nate Bosscher
* @Last Modified time: 2017-04-25 08:24:23
*/

'use strict';

// this module converts objects into 
// a unique string id.
// 
// NewScope allows old objects to be
// garbage collected once the reference
// is out of scope.


function NewIdCodeScope(){
	var objs = [];

	return function(obj){
		var i = objs.indexOf(obj);
		if(i != -1)
			return i.toString(16);

		objs.push(obj);

		return (objs.length - 1).toString(16);
	};	
}

export default NewIdCodeScope;

export {NewIdCodeScope};
