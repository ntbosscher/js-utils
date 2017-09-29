/*
* @Author: Nathan Bosscher
* @Date:   2017-09-27 07:45:44
* @Last Modified by:   Nathan Bosscher
* @Last Modified time: 2017-09-28 19:02:03
*/

// returns {w:#,h:#} to scale the provided dimensions into
// the limites provided.
//
// p = {w:#,h:#,maxH:#,maxW:#}
function ScaleThumbnail(p) {

	var output = {};
	var whRatio = p.w / p.h;
	var maxRatio = p.maxW / p.maxH;

	if(whRatio > maxRatio) {
		// width limiting
		output.w = p.maxW;
		output.h = p.maxW * p.h / p.w;
	} else {
		// height limiting
		output.h = p.maxH;
		output.w = p.maxH * p.w / p.h;
	}

	return output;
}

export default ScaleThumbnail;