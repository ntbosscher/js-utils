/*
* @Author: Nate Bosscher (c) 2015
* @Date:   2016-12-03 17:02:56
* @Last Modified by:   Nate Bosscher
* @Last Modified time: 2017-04-05 19:03:47
*/

'use strict';

import moment from "moment";

var short_months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var full_months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var leftPadDateWithZero = function(n){
	n = n.toString();
	if(n.length != 2)
		n = "0" + n;
	return n;
}

/**
 * formats time from an timestamp.proto format
 * and format string
 * 
 * @param  {Date} date
 * @param  {string} format   uses moment
 * @return {string}
 */
export default function(date, format){
	return moment(date).format(format);
};