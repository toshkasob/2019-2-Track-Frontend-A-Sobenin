import React from 'react';
import styles from '../styles/LangList.module.css';
import * as T from '../types/types';
import { langsCode } from '../constants/AllLangs';

function LangaugeList(props: T.ILangProps) {
	if (!props.showLangs) {
		return null;
	}
	let languageList: Array<JSX.Element> = [];
	langsCode.forEach((key: string, value: string) => {
		languageList.push(
			<button
				className={styles.oneLang}
				onClick={() => {
					props.handleChoseLang(value);
				}}
			>
				{value}
			</button>,
		);
	});
	let showList: JSX.Element;
	if (props.isInputLang) {
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
