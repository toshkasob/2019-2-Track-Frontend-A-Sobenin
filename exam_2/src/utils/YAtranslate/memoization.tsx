import * as T from './types';

let translatedCache: T.ICacheResponse = {};

export async function saveCache(
	qParams: T.ITranslateQParams,
	response: T.TTranslateResponse,
): Promise<void> {
	const index = `lang: ${qParams.lang}, text: ${qParams.text}`;
	translatedCache[index] = response;
}

export async function checkCache(
	qParams: T.ITranslateQParams,
): Promise<T.TTranslateResponse> {
	const index = `lang: ${qParams.lang}, text: ${qParams.text}`;
	const response: T.TTranslateResponse = translatedCache[index];

	if (response) {
		return response;
	} else {
		const error: T.TTranslateResponse = {
			code: 204,
			message: 'no such cache, go to API',
		};
		return error;
	}
}
