var __awaiter =
	(this && this.__awaiter) ||
	function(thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function(resolve) {
						resolve(value);
				  });
		}
		return new (P || (P = Promise))(function(resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
var __generator =
	(this && this.__generator) ||
	function(thisArg, body) {
		var _ = {
				label: 0,
				sent: function() {
					if (t[0] & 1) throw t[1];
					return t[1];
				},
				trys: [],
				ops: [],
			},
			f,
			y,
			t,
			g;
		return (
			(g = { next: verb(0), throw: verb(1), return: verb(2) }),
			typeof Symbol === 'function' &&
				(g[Symbol.iterator] = function() {
					return this;
				}),
			g
		);
		function verb(n) {
			return function(v) {
				return step([n, v]);
			};
		}
		function step(op) {
			if (f) throw new TypeError('Generator is already executing.');
			while (_)
				try {
					if (
						((f = 1),
						y &&
							(t =
								op[0] & 2
									? y['return']
									: op[0]
									? y['throw'] || ((t = y['return']) && t.call(y), 0)
									: y.next) &&
							!(t = t.call(y, op[1])).done)
					)
						return t;
					if (((y = 0), t)) op = [op[0] & 2, t.value];
					switch (op[0]) {
						case 0:
						case 1:
							t = op;
							break;
						case 4:
							_.label++;
							return { value: op[1], done: false };
						case 5:
							_.label++;
							y = op[1];
							op = [0];
							continue;
						case 7:
							op = _.ops.pop();
							_.trys.pop();
							continue;
						default:
							if (
								!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
								(op[0] === 6 || op[0] === 2)
							) {
								_ = 0;
								continue;
							}
							if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
								_.label = op[1];
								break;
							}
							if (op[0] === 6 && _.label < t[1]) {
								_.label = t[1];
								t = op;
								break;
							}
							if (t && _.label < t[2]) {
								_.label = t[2];
								_.ops.push(op);
								break;
							}
							if (t[2]) _.ops.pop();
							_.trys.pop();
							continue;
					}
					op = body.call(thisArg, _);
				} catch (e) {
					op = [6, e];
					y = 0;
				} finally {
					f = t = 0;
				}
			if (op[0] & 5) throw op[1];
			return { value: op[0] ? op[1] : void 0, done: true };
		}
	};
var __importStar =
	(this && this.__importStar) ||
	function(mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null)
			for (var k in mod)
				if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
		result['default'] = mod;
		return result;
	};
(function(factory) {
	if (typeof module === 'object' && typeof module.exports === 'object') {
		var v = factory(require, exports);
		if (v !== undefined) module.exports = v;
	} else if (typeof define === 'function' && define.amd) {
		define(['require', 'exports', './constants', './memoization'], factory);
	}
})(function(require, exports) {
	'use strict';
	Object.defineProperty(exports, '__esModule', { value: true });
	var constants_1 = require('./constants');
	var MEM = __importStar(require('./memoization'));
	var fetch = require('node-fetch');
	function translate(qParams) {
		return __awaiter(this, void 0, void 0, function() {
			var error, cacheResponse, result, apiURL, resultF;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						error = {
							code: 422,
							message: 'The text cannot be translated',
						};
						if (qParams.text === ' '.repeat(qParams.text.length)) {
							return [2 /*return*/, error];
						}
						return [4 /*yield*/, MEM.checkCache(qParams)];
					case 1:
						cacheResponse = _a.sent();
						// console.log('cache:',cacheResponse)
						if (200 === cacheResponse.code || 501 === cacheResponse.code) {
							return [2 /*return*/, cacheResponse];
						}
						result = {
							code: 503,
							lang: qParams.lang,
							text: '',
						};
						apiURL =
							constants_1.API +
							'/translate?key=' +
							constants_1.API_KEY +
							'&text=' +
							qParams.text +
							'&lang=' +
							qParams.lang;
						if (qParams.format) {
							apiURL = apiURL + '&format=' + qParams.format;
						}
						apiURL = encodeURI(apiURL);
						return [
							4 /*yield*/,
							fetch(apiURL, { method: 'POST' })
								.then(function(response) {
									return response.json();
								})
								.then(function(data) {
									result = data;
									MEM.saveCache(qParams, data);
									return data;
								})
								.catch(function(err) {
									error = err;
									if (501 === error.code) {
										MEM.saveCache(qParams, err);
									}
									return error;
								}),
						];
					case 2:
						resultF = _a.sent();
						// if (200 === resultF.code || 501 === resultF.code) {
						// 	await MEM.saveCache(qParams, resultF);
						// }
						return [2 /*return*/, 200 === resultF.code ? resultF : error];
				}
			});
		});
	}
	exports.translate = translate;
});
