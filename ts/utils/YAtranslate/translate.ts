import { API, API_KEY } from './constants';
import * as T from './types';
import * as MEM from './memoization';

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

	const cacheResponse: T.TTranslateResponse = await MEM.checkCache(qParams);
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

	fetch(apiURL, { method: 'POST' })
		.then((response: any) => response.json())
		.then((data: T.ITranlateResponse) => {
			result = data;
			MEM.saveCache(qParams, result);
			return result;
		})
		.catch((err: T.IErrorResponse) => {
			error = err;
			if (501 === error.code) {
				MEM.saveCache(qParams, error);
			}
			return error;
		});

	return 200 === result.code ? result : error;
}
