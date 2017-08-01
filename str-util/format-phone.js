/*
* @Author: Nate Bosscher (c) 2015
* @Date:   2016-12-03 17:38:56
* @Last Modified by:   Nate Bosscher
* @Last Modified time: 2017-04-03 20:14:33
*/

'use strict';

export default function(phone) {

	phone = phone.replace(/[-\ ]/g, "");

	switch(phone.length){
		case 11: // # ###-###-####
			return phone.substring(0, 1) + " " + phone.substring(phone.length - (3 + 3 + 4), phone.length - (3+4)) + "-" + phone.substr(phone.length - (3+4), 3) + "-" + phone.substring(phone.length - 4);
		case 10: // ###-###-####
		case 9:
		case 8:
			return phone.substring(0, phone.length - 7) + "-" + phone.substr(phone.length - 7, 3) + "-" + phone.substring(phone.length - 4);
		case 7: // ###-####
		case 6:
		case 5:
			return phone.substring(0, phone.length - 4) + "-" + phone.substring(phone.length - 4);
		default: return phone;
	}
};