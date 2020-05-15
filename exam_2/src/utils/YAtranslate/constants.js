(function(factory) {
	if (typeof module === 'object' && typeof module.exports === 'object') {
		var v = factory(require, exports);
		if (v !== undefined) module.exports = v;
	} else if (typeof define === 'function' && define.amd) {
		define(['require', 'exports'], factory);
	}
})(function(require, exports) {
	'use strict';
	Object.defineProperty(exports, '__esModule', { value: true });
	exports.API_KEY =
		'trnsl.1.1.20200508T170656Z.5f5128eb87ce6d66.02d6e8c20ff84ef6084bfc34260f6e8d3e08744a';
	exports.API = 'https://translate.yandex.net/api/v1.5/tr.json';
});
