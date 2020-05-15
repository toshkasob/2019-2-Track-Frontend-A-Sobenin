import React, { useState, useEffect } from 'react';
import styles from '../styles/TranslatorForm.module.css';
import * as TranslateUtils from '../utils/YAtranslate';
import * as TyaT from '../utils/YAtranslate/types';
import * as T from '../types/types';
import InputBox from './InputBox';
import OutsputBox from './OutputBox';
import Language from './Language';
// ToDo автовычисление высоты боксов
function TranslatorForm() {
	const [inputBoxValue, setInputBoxValue] = useState('');
	const [outputBoxValue, setOutputBoxValue] = useState('');
	const [inputLang, setInputLang] = useState('');
	const [outputLang, setOutputLang] = useState('ru');

	function handleChange(event: any) {
		setInputBoxValue(event.target.value);
	}
	function handleInputLang(inpLang: string) {
		setInputLang(inpLang);
		console.log('inpLang :', inpLang, 'setInputLang(', inputLang, ')'); // ToDo comment it
	}
	function handleOutputLang(outLang: string) {
		setOutputLang(outLang);
		console.log('outLang :', outLang, 'setOutputLang(', outputLang, ')'); // ToDo comment it
	}
	async function handleSubmit(event: any) {
		event.preventDefault();
		// setInputBoxValue(inputLang); // ToDo comment it
		// setOutputBoxValue(outputLang); // ToDo comment it
		let fromto: string = `${inputLang}-${outputLang}`;
		if ('AD' === inputLang || '' === inputLang) {
			fromto = `${outputLang}`;
		}
		console.log('lang: ', fromto); // ToDo comment it
		const inp2out: TyaT.ITranslateQParams = {
			lang: `${fromto}`,
			text: inputBoxValue,
		};
		const result: TyaT.TTranslateResponse = await TranslateUtils.default.translate(
			inp2out,
		);
		if (200 == result.code) {
			setOutputBoxValue((result as TyaT.ITranlateResponse).text);
		} else {
			setOutputBoxValue((result as TyaT.IErrorResponse).message);
		}
	}

	return (
		// <div className=styles.container> Hello?</div>
		<div className={styles.container}>
			<div className={styles.options_bar}>
				<Language
					lang={inputLang}
					isInputLang={true}
					handleLetLang={handleInputLang}
				/>
				<Language
					isInputLang={false}
					lang={outputLang}
					handleLetLang={handleOutputLang}
				/>
			</div>
			<button className={styles.buttonTranslate} onClick={handleSubmit}>
				Translate
			</button>
			<div className={styles.main_container}>
				<div className={styles.source_frase}>
					<InputBox
						value={inputBoxValue}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
					/>
				</div>
				<div className={styles.result_frase}>
					<OutsputBox value={outputBoxValue} />
				</div>
			</div>
		</div>
	);
}

export default TranslatorForm;
