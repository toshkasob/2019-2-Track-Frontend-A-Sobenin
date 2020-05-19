import React from 'react';
import styles from '../styles/LangList.module.css';
import * as T from '../types/types';
import { fullLangs } from '../constants/fullLangs';

function LangaugeList(props: T.ILangProps) {
	let { handleChoseLang, isInputLang, lang, langFull, showLangs } = props;
	if (!showLangs) {
		return null;
	}
	let languageList: Array<JSX.Element> = [];

	fullLangs.forEach((value: string, key: string) => {
		if (key !== 'AD' && key !== 'UN') {
			languageList.push(
				<button
					className={styles.oneLang}
					onClick={() => {
						handleChoseLang(key);
					}}
				>
					{value}
				</button>,
			);
		}
	});
	let showList: JSX.Element;
	if (isInputLang) {
		showList = (
			<div className={`${styles.langList} ${styles.input}`}>{languageList}</div>
		);
	} else {
		showList = (
			<div className={`${styles.langList} ${styles.output}`}>
				{languageList}
			</div>
		);
	}
	return showList;
}

export default LangaugeList;
