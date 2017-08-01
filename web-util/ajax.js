/*
* @Author: Nate Bosscher (c) 2015
* @Date:   2016-11-28 18:51:30
 * @Last modified by:   natebosscher1
 * @Last modified time: 2017-06-22T19:58:24-04:00
*/

'use strict';

import {Canceler} from "../event-util/index.js";


var headers = {};
function setCustomHeaders(_headers) {
	headers = _headers;
}

var ajax = function(ajax_opts){

	var me = ajax_opts.method ? ajax_opts.method : "GET";
	var url = ajax_opts.url ? ajax_opts.url : undefined;
	var d = ajax_opts.data ? ajax_opts.data : undefined;
	var p = false;
	var c = ajax_opts.canceler ? ajax_opts.canceler : new Canceler();

	if(c.isCanceled()){
		console.log("cancelled");
		return;
	}

	var isJSON = false;

	if(d){
		if(d.serializeBinary){
			d = d.serializeBinary();
			p = true;
		} else if(d.constructor != String){
			d = JSON.stringify(d);
			isJSON = true;
		}
	}

	var fd = ajax_opts.formData ? ajax_opts.formData : undefined;
	var dt = d ? d : fd;
	var onProgress = ajax_opts.onProgress ? ajax_opts.onProgress : undefined;
	var onUploadProgress = ajax_opts.onUploadProgress ? ajax_opts.onUploadProgress : undefined;

	if(!url) {
		throw new Error("missing url");
	}

	if(d && fd){
		throw new Error("can't set data and form data");
	}

	return new Promise(function(resolve, reject){

		var x = new XMLHttpRequest();

		x.upload.addEventListener("progress", function(event){

			if (event.lengthComputable) {
	            var percentComplete = event.loaded / event.total * 100;

	            if(onUploadProgress){
	                onUploadProgress(percentComplete);
	            }

	        } else {
	            // Unable to compute progress information since the total size is unknown
	        }
		});

		x.addEventListener("progress", function(event) {

			if (event.lengthComputable) {
	            var percentComplete = event.loaded / event.total * 100;

	            if(onProgress){
	                onProgress(percentComplete);
	            }

	        } else {
	            // Unable to compute progress information since the total size is unknown
	        }
	    }, false);

		x.addEventListener("load", function(event) {
			c.notCancelable();

            if(onProgress)
                onProgress(99);

            if(event.target.status > 300){
            	console.log("webapi/Interface: " + me + " " + url + " returned status code " + event.target.status);
            }

            if(event.target.status >= 400){
            	reject(event);
            	return;
            }

            resolve(event.target);
        }, false);

        x.addEventListener("error", function(event){

            reject(event);

        }, false);

        // ensure cookies are included in request (for react-native)
        x.withCredentials = true;

		x.open(me, url);

		// set custom headers
		if(headers && Object.keys(headers).length > 0){
			for(var i in headers)
				x.setRequestHeader(i, headers[i]);
		}

		if(p){
    	x.setRequestHeader("Content-Type", "application/octet-stream");
    } else if(isJSON){
			x.setRequestHeader("Content-Type", "application/json");
		}

		x.send(dt);

		c.onCancel(function(){
			x.abort();
		});
	});
};

export default ajax;
export {
	setCustomHeaders
}
