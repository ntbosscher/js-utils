/*
* @Author: Nate Bosscher (c) 2015
* @Date:   2017-01-10 08:23:49
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-05-23 07:54:47
*/

'use strict';

// todo: convert to Cents wording

class dollarFormat {

	static dollarString(am){
		return "$ " + dollarFormat.string(am);
	}

	static string(am){
		am = parseFloat(am);
		if(isNaN(am))
			am = 0;

		var f = (Math.round(am * 100) / 100).toString();
		
		var i = f.indexOf(".");
		if(i == -1){
			return f + ".00";
		}else if(f.length - i == 1){
			return f + "00";
		}else if(f.length - i == 2){
			return f + "0";
		}else{
			return f;
		}
	}

	static dollarStringToCents(str){

		var i = str.indexOf(".");
		if(i == -1){
			var v = parseInt(str, 10);
			if(isNaN(v)){
				return 0;
			}else{
				return v * 100;
			}
		}

		var dol = parseInt(str.substring(0, i), 10);
		if(isNaN(dol)){
			dol = 0;
		}

		var cst = str.substr(i+1, 2);
		var cen = parseInt(cst, 10);
		if(isNaN(cen)){
			cen = 0;
		}

		return dol * 100 + cen;
	}
}


export default dollarFormat;