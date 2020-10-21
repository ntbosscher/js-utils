// converts google.com => <a href="http://google.com">google.com</a>
// also works with email address => mailto:email@email.com
// 
// options.target = string (default = "_blank")
export default function(text) {

	text = transformMarkdownLinks(text);
	text = transformHttpLinks(text);
	text = transformEmailLinks(text);

	return text;
};

function transformHttpLinks(text) {
	const replacer = value => value.replace(/((http[s]{0,1}:\/\/){0,1}[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/g, (value) => {
		return formatLink(value, value);
	});

	return replaceTopLevelTextNodes(text, replacer);
}

function transformEmailLinks(text) {
	const replacer = value => value.replace(/\A[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\z/g, (value) => {
		return formatLink(value, value);
	});

	return replaceTopLevelTextNodes(text, replacer);
}

function replaceTopLevelTextNodes(text, replacer) {
	const srcDiv = document.createElement("div");
	srcDiv.innerHTML = text;

	const dstDiv = document.createElement("div");

	for(let c of srcDiv.childNodes) {
		if(c.nodeName !== "#text") {
			dstDiv.append(c.cloneNode(true));
			continue;
		}

		const div2 = document.createElement("div");
		div2.innerHTML = replacer(c.nodeValue);

		for(let v of div2.childNodes) {
			dstDiv.append(v.cloneNode(true));
		}
	}

	return dstDiv.innerHTML;
}

function fixUrl(url) {
	if(url.indexOf("@") !== -1) {
		return "mailto:" + url;
	}

	if(!url.startsWith("http")) {
		return "http://" + url;
	}

	return url;
}

function formatLink(url, text) {
	url = fixUrl(url);
	const a = document.createElement("a");
	a.href = url;
	a.target = "_blank";
	a.innerHTML = text;

	return a.outerHTML;
}

function transformMarkdownLinks(text) {
	return text.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, (value, text, url) => {
		return formatLink(url, text);
	})
}
