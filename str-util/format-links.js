/*
* @Author: Nathan Bosscher
* @Date:   2017-10-19 19:09:32
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-10-19 19:19:58
*/

// converts google.com => <a href="http://google.com">google.com</a>
// also works with email address => mailto:email@email.com
// 
// options.target = string (default = "_blank")
export default function(text, options) {

	if(!options) options = {};
	if(options.target === undefined) options.target = "_blank";

	return text.replace(/((http[s]{0,1}:\/\/){0,1}(www\.){0,1}|[^ \t\n]+@)[A-z0-9\-]+\.[a-z]{2,10}([\-A-z0-9_?\/%\.=]+){0,1}/g, (value) => {
		var url = value;
		if(url.indexOf("@") != -1) {
			url = "mailto:" + url;
		} else {
			if(url.indexOf("http") != 0) {
				url = "http://" + value;
			}
		}

		var aProps = [];
		aProps.push("href='" + url + "'");

		if(options.target) {
			aProps.push("target='" + options.target + "'");
		}

		return '<a ' + aProps.join(" ") + '>' + value + '</a>';
	});
};