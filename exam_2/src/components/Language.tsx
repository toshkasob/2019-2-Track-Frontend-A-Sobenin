import React, { useState, useEffect } from 'react';
import * as T from '../types/types';
import styles from '../styles/Language.module.css';
import LangaugeList from './LanguagesList';
import { langsCode } from '../constants/AllLangs';

function Langauge(props: T.ILanguageProps) {
	const [showLangs, setShowLangs] = useState(false);
	const [chosenLang, setChosenLang] = useState('en');
	const [chosenLangFull, setChosenLangFull] = useState('English');
	const [autoDetect, setAutoDetect] = useState('none');

	let langFromList = 'en';
	let langFromListFull = 'English';
	function handleShowLangs() {
		if (showLangs) {
			setShowLangs(false);
		} else {
			setShowLangs(true);
		}
	}

	function handleChooseLang(chosenLangauge: string) {
		setChosenLangFull(chosenLangauge);
		// console.log(chosenLangauge); // ToDo comment it
		if (langsCode.has(chosenLangauge)) {
			// console.log(chosenLangauge); // ToDo comment it
			langFromList = langsCode.get(chosenLangauge) as string;
			langFromListFull = chosenLangauge;
			setChosenLang(langFromList);
		} else {
			setChosenLang('AD');
			langFromList = 'AD';
			langFromListFull = 'AutoDetect';
		}
		setShowLangs(false);
		props.handleLetLang(langFromList);
	}

	function hideAutoDetect() {
		if (props.isInputLang) {
			setAutoDetect('inline');
		} else {
			setAutoDetect('none');
		}
		let flagChangeLang: boolean = false;
		langsCode.forEach((value: string, key: string) => {
			if (value === props.lang) {
				setChosenLangFull(key);
				setChosenLang(value);
				flagChangeLang = true;
			}
		});
		if (!flagChangeLang) {
			if (props.isInputLang) {
				setChosenLangFull('AutoDetect');
				setChosenLang('AD');
			} else {
				setChosenLangFull('Unknown');
				setChosenLang('un');
			}
		}
	}

	let typeOfLangBox: string;
	let langBoxStyle: any;
	let buttonOpenLangs: any = <button></button>;
	if (props.isInputLang) {
		typeOfLangBox = "This's INPUT language";
		langBoxStyle = `${styles.language}`;
		buttonOpenLangs = (
			<button
				type="button"
				className={`${styles.langauge} ${styles.input}`}
				onClick={handleShowLangs}
			>
				v
			</button>
		);
	} else {
		typeOfLangBox = "This's OUTPUT language";
		langBoxStyle = `${styles.language}`;
		buttonOpenLangs = (
			<button
				type="button"
				className={`${styles.langauge} ${styles.output}`}
				onClick={handleShowLangs}
			>
				v
			</button>
		);
	}

	useEffect(() => {
		hideAutoDetect();
	});

	return (
		<div className={langBoxStyle} id={typeOfLangBox}>
			<button
				className={styles.buttonLang}
				style={{ display: autoDetect }}
				onClick={() => {
					handleChooseLang('AutoDetect');
				}}
			>
				{'AutoDetect'}
			</button>
			<button
				className={styles.buttonLang}
				// style={{background: '#add8e6'}}
			>
				{chosenLangFull}
			</button>
			{buttonOpenLangs}
			<LangaugeList
				lang={langFromList}
				langFull={langFromListFull}
				showLangs={showLangs}
				isInputLang={props.isInputLang}
				handleChoseLang={handleChooseLang}
			/>
		</div>
	);
}

export default Langauge;
