export interface ITranslateQParams {
	text: string;
	lang: string;
	format?: string;
}

export interface ITranlateResponse {
	code: number;
	lang: string;
	text: string;
}

export interface IErrorResponse {
	code: number;
	message: string;
}

export interface ICacheResponse {
	[index: string]: TTranslateResponse;
}

export type TTranslateResponse = ITranlateResponse | IErrorResponse;
