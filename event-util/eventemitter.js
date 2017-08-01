/*
* @Author: Nate Bosscher (c) 2015
* @Date:   2017-04-03 19:47:54
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-05-24 20:15:34
*/

'use strict';

class EventEmitter {
	constructor(){
		this._emitIterator = [];
		this._listeners = [];
		this._isEmitting = false;
	}

	listen(callback){

		this._listeners.push(callback);

		return {
			remove: function(){
				
				var i = this._listeners.indexOf(callback);
				if(i == -1)
					return;

				this._listeners.splice(i, 1);

				if(this._emitIterator.length != 0){
					var i = this._emitIterator.indexOf(callback);
					if(i != -1)
						this._emitIterator.splice(i, 1);

				}

			}.bind(this)
		}
	}

	emit(obj){

		if(this._isEmitting){
			console.error("can't call .emit() while emitting");
		}

		this._isEmitting = true;

		// clone _listeners
		this._emitIterator = this._listeners.slice();

		// use array.shift to empty the array so that listeners
		// can be removed during emit cycle
		while(this._emitIterator.length > 0){
			var listener = this._emitIterator.shift();
			listener(obj);
		}

		this._isEmitting = false;
	}

	listenerCount() {
		return this._listeners.length;
	}
}

export default EventEmitter;
