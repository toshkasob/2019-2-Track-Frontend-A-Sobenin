export interface InputBoxProps {
	value: string;
	handleChange(event: any): void;
	handleSubmit(event: any): void;
}

export interface ILanguageProps {
	isInputLang: boolean;
	lang: string;
}
export interface OutputBoxProps {
	value: string;
}

export interface ILangProps {
	lang: string;
	langFull: string;
	showLangs: boolean;
	isInputLang: boolean;
}
