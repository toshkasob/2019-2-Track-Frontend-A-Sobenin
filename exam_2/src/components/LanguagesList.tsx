import React from 'react';
import styles from '../styles/LangList.module.css';
import * as T from '../types/types';
import { langsCode } from '../constants/AllLangs';

// export const langsCode: Map<string, string> = new Map ([
// 	['Afrikaans', 'af'],
// 	['Albanian', 'sq'],
// 	['Amharic', 'am'],
// 	['Arabic', 'ar'],
// 	['Armenian', 'hy'],
// 	['Azerbaijan', 'az'],
// 	['Bashkir', 'ba'],
// 	['Basque', 'eu'],
// 	['Belarusian', 'be'],
// 	['Bengali', 'bn'],
// 	['Bosnian', 'bs'],
// 	['Burmese', 'my'],
// 	['Bulgarian', 'bg'],
// 	['Cebuano', 'ceb'],
// 	['Chinese', 'zh'],
// 	['Croatian', 'hr'],
// 	['Czech', 'cs'],
// 	['Danish', 'da'],
// 	['Dutch', 'nl'],
// 	['English', 'en'],
// 	['Esperanto', 'eo'],
// 	['Estonian', 'et'],
// 	['Finnish', 'fi'],
// 	['French', 'fr'],
// 	['Galician', 'gl'],
// 	['German', 'de'],
// 	['Georgian', 'ka'],
// 	['Greek', 'el'],
// 	['Gujarati', 'gu'],
// 	['Haitian (Creole)', 'ht'],
// 	['Hebrew', 'he'],
// 	['Hill Mari', 'mrj'],
// 	['Hindi', 'hi'],
// 	['Hungarian', 'hu'],
// 	['Indonesian', 'id'],
// 	['Irish', 'ga'],
// 	['Italian', 'it'],
// 	['Icelandic', 'is'],
// 	['Japanese', 'ja'],
// 	['Javanese', 'jv'],
// 	['Kazakh', 'kk'],
// 	['Kannada', 'kn'],
// 	['Catalan', 'ca'],
// 	['Kyrgyz', 'ky'],
// 	['Korean', 'ko'],
// 	['Khmer', 'km'],
// 	['Laotian', 'lo'],
// 	['Latin', 'la'],
// 	['Latvian', 'lv'],
// 	['Lithuanian', 'lt'],
// 	['Luxembourgish', 'lb'],
// 	['Malagasy', 'mg'],
// 	['Malay', 'ms'],
// 	['Malayalam', 'ml'],
// 	['Maltese', 'mt'],
// 	['Macedonian', 'mk'],
// 	['Maori', 'mi'],
// 	['Marathi', 'mr'],
// 	['Mari', 'mhr'],
// 	['Mongolian', 'mn'],
// 	['Nepali', 'ne'],
// 	['Norwegian', 'no'],
// 	['Punjabi', 'pa'],
// 	['Papiamento', 'pap'],
// 	['Persian', 'fa'],
// 	['Polish', 'pl'],
// 	['Portuguese', 'pt'],
// 	['Romanian', 'ro'],
// 	['Russian', 'ru'],
// 	['Scottish', 'gd'],
// 	['Serbian', 'sr'],
// 	['Sinhala', 'si'],
// 	['Slovakian', 'sk'],
// 	['Slovenian', 'sl'],
// 	['Spanish', 'es'],
// 	['Swahili', 'sw'],
// 	['Swedish', 'sv'],
// 	['Sundanese', 'su'],
// 	['Tajik', 'tg'],
// 	['Thai', 'th'],
// 	['Tagalog', 'tl'],
// 	['Tamil', 'ta'],
// 	['Tatar', 'tt'],
// 	['Telugu', 'te'],
// 	['Turkish', 'tr'],
// 	['Udmurt', 'udm'],
// 	['Uzbek', 'uz'],
// 	['Ukrainian', 'uk'],
// 	['Urdu', 'ur'],
// 	['Vietnamese', 'vi'],
// 	['Welsh', 'cy'],
// 	['Xhosa', 'xh'],
// 	['Yiddish', 'yi'],
// ]);

function LangaugeList(props: T.ILangProps) {
	if (!props.showLangs) {
		return null;
	}
	let languageList: Array<any> = [];
	langsCode.forEach((key: string, value: string) => {
		languageList.push(<button>{value}</button>);
	});
	let showList: any = <div></div>;
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
