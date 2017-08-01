/*
* @Author: Nathan Bosscher
* @Date:   2017-05-30 19:27:26
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-05-30 19:32:49
*/

'use strict';

// customer = {firstName:"", lastName: ""}
// return 
// 		"firstName lastName"
// 		"firstName"
// 		"lastName"
//      ""
function formatCustomerName(customer) {

	if(!customer)
		return "";

	var name = [];
	if(customer.firstName)
		name.push(customer.firstName);
	if(customer.lastName)
		name.push(customer.lastName);

	if(name.length == 1)
		return name[0];
	if(name.length > 1)
		return name.join(" ");

	return "";
}

export default formatCustomerName;