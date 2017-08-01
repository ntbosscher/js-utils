/*
* @Author: Nate Bosscher (c) 2015
* @Date:   2016-12-19 21:10:14
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-04-14 16:52:13
*/

'use strict';

class Canceler {

	constructor(){
		this._onCancel = function(){ /* nothing */ };
		this._isCanceled = false;
		this._cancelable = true;
	}

	cancel(){
		if(!this._cancelable){
			console.log("not cancelable");
			return;
		}
		
		this._isCanceled = true;
		this._onCancel();
	}

	onCancel(fx){
		this._onCancel = fx;
	}

	isCanceled(){
		return this._isCanceled;
	}

	notCancelable(){
		this._cancelable = false;
	}
}

export default Canceler;