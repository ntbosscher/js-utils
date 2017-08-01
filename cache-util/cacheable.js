/*
* @Author: Nathan Bosscher
* @Date:   2017-04-14 22:24:28
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-04-14 22:48:48
*/

'use strict';

// acts as a timed-cache
class Cacheable {

	constructor(obj, lifeTimeMs){
	
		this.obj = obj || null;
		
		if(!lifeTimeMs)
			this.expires = -1;
		else
			this.expires = new Date().getTime() + lifeTimeMs;
	}

	get(){
		if(this.hasExpired())
			return undefined;

		return this.obj;
	}

	invalidate(){
		this.expires = -1;
		this.obj = null;
	}

	set(obj, lifeTimeMs){
		this.obj = obj;
		this.expires = new Date().getTime() + lifeTimeMs;
	}

	hasExpired() {
		return (new Date().getTime() > this.expires);
	}
}

export default Cacheable