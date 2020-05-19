export interface InputBoxProps {
	value: string;
	handleChange(event: any): void;
	handleSubmit(event: any): void;
}

export interface ILanguageProps {
	readonly isInputLang: boolean;
	lang: string;
	handleLetLang(letLang: string): void;
}
export interface OutputBoxProps {
	value: string;
}

export interface ILangProps {
	lang: string;
	langFull: string;
	showLangs: boolean;
	readonly isInputLang: boolean;
	handleChoseLang(event: any): void;
}
