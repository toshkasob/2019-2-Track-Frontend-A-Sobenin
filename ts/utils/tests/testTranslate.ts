import { ITranslateQParams } from '../YAtranslate/types';
import TranslateUtils from '../YAtranslate/index';

async function testYAtranslate() {
	const en2ruFrase: ITranslateQParams = {
		lang: 'en-ru',
		text: 'Do you know how translate it?',
	};
	const de2ruFrase: ITranslateQParams = {
		lang: 'en-ru',
		text: 'Do you know how translate it?',
	};
	const ru2ruFrase: ITranslateQParams = {
		lang: 'en-ru',
		text: 'Do you know how translate it?',
	};
	const un2ruFrase: ITranslateQParams = {
		lang: 'ru',
		text: 'Do you know how translate it?',
	};
	const en2ruWord: ITranslateQParams = {
		lang: 'en-ru',
		text: 'translator',
	};
	const de2ruWord: ITranslateQParams = {
		lang: 'en-ru',
		text: 'translator',
	};
	const ru2ruWord: ITranslateQParams = {
		lang: 'en-ru',
		text: 'translator',
	};
	const un2ruWord: ITranslateQParams = {
		lang: 'ru',
		text: 'translator',
	};

	const fraseEN2RU = await TranslateUtils.translate(en2ruFrase);
	console.log(fraseEN2RU);

	const fraseEN2RUretry = await TranslateUtils.translate(en2ruFrase);
	console.log(fraseEN2RUretry);

	const fraseDE2RU = await TranslateUtils.translate(de2ruFrase);
	console.log(fraseDE2RU);

	const fraseRU2RU = await TranslateUtils.translate(ru2ruFrase);
	console.log(fraseRU2RU);

	const fraseUN2RU = await TranslateUtils.translate(un2ruFrase);
	console.log(fraseUN2RU);

	const wordEN2RU = await TranslateUtils.translate(en2ruWord);
	console.log(wordEN2RU);

	const wordDE2RU = await TranslateUtils.translate(de2ruWord);
	console.log(wordDE2RU);

	const wordRU2RU = await TranslateUtils.translate(ru2ruWord);
	console.log(wordRU2RU);

	const wordUN2RU = await TranslateUtils.translate(un2ruWord);
	console.log(wordUN2RU);

	const wordUN2RUretry = await TranslateUtils.translate(un2ruWord);
	console.log(wordUN2RUretry);
}

testYAtranslate();
