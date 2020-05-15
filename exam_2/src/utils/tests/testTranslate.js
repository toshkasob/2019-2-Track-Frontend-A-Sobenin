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
var __importDefault =
	(this && this.__importDefault) ||
	function(mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
(function(factory) {
	if (typeof module === 'object' && typeof module.exports === 'object') {
		var v = factory(require, exports);
		if (v !== undefined) module.exports = v;
	} else if (typeof define === 'function' && define.amd) {
		define(['require', 'exports', '../YAtranslate/index'], factory);
	}
})(function(require, exports) {
	'use strict';
	Object.defineProperty(exports, '__esModule', { value: true });
	var index_1 = __importDefault(require('../YAtranslate/index'));
	function testYAtranslate() {
		return __awaiter(this, void 0, void 0, function() {
			var en2ruFrase,
				de2ruFraseWrong,
				de2ruFrase,
				ru2ruFrase,
				un2ruFrase,
				en2ruWord,
				de2ruWordWrong,
				de2ruWord,
				ru2ruWord,
				un2ruWord,
				fraseEN2RU,
				fraseEN2RUretry,
				fraseDE2RU,
				fraseDE2RUwrong,
				fraseRU2RU,
				fraseUN2RU,
				wordEN2RU,
				wordDE2RU,
				wordDE2RUwrong,
				wordRU2RU,
				wordUN2RU,
				wordUN2RUretry;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						en2ruFrase = {
							lang: 'en-ru',
							text: 'Do you know how translate it?',
						};
						de2ruFraseWrong = {
							lang: 'de-ru',
							text: 'Do you know how translate it?',
						};
						de2ruFrase = {
							lang: 'de-ru',
							text: 'Ich bin ubersetzer',
						};
						ru2ruFrase = {
							lang: 'ru-ru',
							text: 'Do you know how translate it?',
						};
						un2ruFrase = {
							lang: 'ru',
							text: 'Do you know how translate it?',
						};
						en2ruWord = {
							lang: 'en-ru',
							text: 'translator',
						};
						de2ruWordWrong = {
							lang: 'de-ru',
							text: 'translator',
						};
						de2ruWord = {
							lang: 'de-ru',
							text: 'Ubersetzer',
						};
						ru2ruWord = {
							lang: 'ru-ru',
							text: 'translator',
						};
						un2ruWord = {
							lang: 'ru',
							text: 'translator',
						};
						return [4 /*yield*/, index_1.default.translate(en2ruFrase)];
					case 1:
						fraseEN2RU = _a.sent();
						console.log('fraseEN2RU: ', fraseEN2RU);
						return [4 /*yield*/, index_1.default.translate(en2ruFrase)];
					case 2:
						fraseEN2RUretry = _a.sent();
						console.log('fraseEN2RUretry: ', fraseEN2RUretry);
						return [4 /*yield*/, index_1.default.translate(de2ruFrase)];
					case 3:
						fraseDE2RU = _a.sent();
						console.log('fraseDE2RU: ', fraseDE2RU);
						return [4 /*yield*/, index_1.default.translate(de2ruFraseWrong)];
					case 4:
						fraseDE2RUwrong = _a.sent();
						console.log('fraseDE2RUwrong: ', fraseDE2RUwrong);
						return [4 /*yield*/, index_1.default.translate(ru2ruFrase)];
					case 5:
						fraseRU2RU = _a.sent();
						console.log('fraseRU2RU: ', fraseRU2RU);
						return [4 /*yield*/, index_1.default.translate(un2ruFrase)];
					case 6:
						fraseUN2RU = _a.sent();
						console.log('fraseUN2RU: ', fraseUN2RU);
						return [4 /*yield*/, index_1.default.translate(en2ruWord)];
					case 7:
						wordEN2RU = _a.sent();
						console.log('wordEN2RU: ', wordEN2RU);
						return [4 /*yield*/, index_1.default.translate(de2ruWord)];
					case 8:
						wordDE2RU = _a.sent();
						console.log('wordDE2RU: ', wordDE2RU);
						return [4 /*yield*/, index_1.default.translate(de2ruWordWrong)];
					case 9:
						wordDE2RUwrong = _a.sent();
						console.log('wordDE2RUwrong: ', wordDE2RUwrong);
						return [4 /*yield*/, index_1.default.translate(ru2ruWord)];
					case 10:
						wordRU2RU = _a.sent();
						console.log('wordRU2RU: ', wordRU2RU);
						return [4 /*yield*/, index_1.default.translate(un2ruWord)];
					case 11:
						wordUN2RU = _a.sent();
						console.log('wordUN2RU: ', wordUN2RU);
						return [4 /*yield*/, index_1.default.translate(un2ruWord)];
					case 12:
						wordUN2RUretry = _a.sent();
						console.log('wordUN2RUretry: ', wordUN2RUretry);
						return [2 /*return*/];
				}
			});
		});
	}
	testYAtranslate();
});
