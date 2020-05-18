import React, { useState } from 'react';
import * as T from '../types/types';
import styles from '../styles/Language.module.css';
import LangaugeList from './LanguagesList';
import { fullLangs } from '../constants/fullLangs';

function Langauge(props: T.ILanguageProps) {
	let { handleLetLang, isInputLang, lang } = props;
	lang = fullLangs.has(lang) ? lang : 'UN';
	const [showLangs, setShowLangs] = useState(false);
	const [chosenLang, setChosenLang] = useState(lang);
	const [chosenLangFull, setChosenLangFull] = useState(
		fullLangs.get(lang) as string,
	);
	const [autoDetect, setAutoDetect] = useState('none');

	function handleShowLangs() {
		if (showLangs) {
			setShowLangs(false);
		} else {
			setShowLangs(true);
		}
	}

	function handleChooseLang(chosenLangauge: string) {
		setChosenLang(chosenLangauge);
		if (fullLangs.has(chosenLangauge)) {
			lang = chosenLangauge;
			setChosenLangFull(fullLangs.get(chosenLangauge) as string);
			isInputLang && chosenLangauge !== 'AD'
				? setAutoDetect('inline')
				: setAutoDetect('none');
		} else {
			if (isInputLang) {
				lang = 'AD';
				setChosenLangFull('AutoDetect');
				setChosenLang('AD');
				setAutoDetect('none');
			} else {
				lang = 'ru';
				setChosenLangFull('Unknown');
				setChosenLang('un');
				setAutoDetect('none');
			}
		}
		setShowLangs(false);
		handleLetLang(lang);
	}

	let typeOfLangBox: string;
	let langBoxStyle: string;
	let buttonOpenLangs: JSX.Element;
	if (isInputLang) {
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

	return (
		<div className={langBoxStyle} id={typeOfLangBox}>
			<button className={styles.buttonLang}>{chosenLangFull}</button>
			{buttonOpenLangs}
			<button
				id="AutoDetect button"
				className={styles.buttonLang}
				style={{ display: autoDetect }}
				onClick={() => {
					handleChooseLang('AD');
				}}
			>
				{'AutoDetect'}
			</button>
			<button
				id="English button"
				className={styles.buttonLang}
				style={{ display: autoDetect }}
				onClick={() => {
					handleChooseLang('en');
				}}
			>
				{'English'}
			</button>
			<button
				id="Russian button"
				className={styles.buttonLang}
				style={{ display: autoDetect }}
				onClick={() => {
					handleChooseLang('ru');
				}}
			>
				{'Russian'}
			</button>
			<LangaugeList
				lang={chosenLang}
				langFull={chosenLangFull}
				showLangs={showLangs}
				isInputLang={isInputLang}
				handleChoseLang={handleChooseLang}
			/>
		</div>
	);
}

export default Langauge;
