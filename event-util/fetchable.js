/*
* @Author: Nate Bosscher (c) 2015
* @Date:   2017-04-17 20:40:23
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-05-23 08:10:01
*/

'use strict';

import {Cacheable} from "../cache-util/index.js";

class Fetchable {
	constructor(){
		this.cache = new Cacheable();
		this.fetching = false;
		this.hasMore = true;
	}

	invalidate(){
		this.cache.invalidate();
		this.hasMore = true;
		this.fetching = false;
	}

	get(){
		return this.cache.get();
	}

	set(value, expiryMs){
		this.cache.set(value, expiryMs);
	}
}

export default Fetchable