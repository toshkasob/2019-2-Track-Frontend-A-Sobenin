import { API, API_KEY } from './constants';
import * as T from './types';
import { saveCache, checkCache } from './memoization';

const fetch = require('node-fetch');

export async function translate(
	qParams: T.ITranslateQParams,
): Promise<T.TTranslateResponse> {
	let error: T.IErrorResponse = {
		code: 422,
		message: 'The text cannot be translated',
	};

	if (qParams.text === ' '.repeat(qParams.text.length)) {
		return error;
	}

	const cacheResponse: T.TTranslateResponse = await checkCache(qParams);
	if (200 === cacheResponse.code || 501 === cacheResponse.code) {
		return cacheResponse;
	}

	let result: T.ITranlateResponse = {
		code: 503,
		lang: qParams.lang,
		text: '',
	};

	let apiURL: string = `${API}/translate?key=${API_KEY}&text=${qParams.text}&lang=${qParams.lang}`;

	if (qParams.format) {
		apiURL = `${apiURL}&format=${qParams.format}`;
	}

	apiURL = encodeURI(apiURL);

	const resultF = await fetch(apiURL, { method: 'POST' })
		.then((response: any) => response.json())
		.then((data: T.ITranlateResponse) => {
			result = data;
			saveCache(qParams, data);
			return data;
		})
		.catch((err: T.IErrorResponse) => {
			error = err;
			if (501 === error.code) {
				saveCache(qParams, err);
			}
			return error;
		});

	return 200 === resultF.code ? resultF : error;
}
