import React, { useState, useEffect } from 'react';
import * as T from '../types/types';
import styles from '../styles/InputBox.module.css';
import LangaugeList from './LanguagesList';

function Langauge(props: T.ILanguageProps) {
	const [showLangs, setShowLangs] = useState(true);

	const langsCode: Map<string, string> = new Map([
		['Afrikaans', 'af'],
		['Albanian', 'sq'],
		['Amharic', 'am'],
		['Arabic', 'ar'],
		['Armenian', 'hy'],
		['Azerbaijan', 'az'],
		['Bashkir', 'ba'],
		['Basque', 'eu'],
		['Belarusian', 'be'],
		['Bengali', 'bn'],
		['Bosnian', 'bs'],
		['Burmese', 'my'],
		['Bulgarian', 'bg'],
		['Cebuano', 'ceb'],
		['Chinese', 'zh'],
		['Croatian', 'hr'],
		['Czech', 'cs'],
		['Danish', 'da'],
		['Dutch', 'nl'],
		['English', 'en'],
		['Esperanto', 'eo'],
		['Estonian', 'et'],
		['Finnish', 'fi'],
		['French', 'fr'],
		['Galician', 'gl'],
		['German', 'de'],
		['Georgian', 'ka'],
		['Greek', 'el'],
		['Gujarati', 'gu'],
		['Haitian (Creole)', 'ht'],
		['Hebrew', 'he'],
		['Hill Mari', 'mrj'],
		['Hindi', 'hi'],
		['Hungarian', 'hu'],
		['Indonesian', 'id'],
		['Irish', 'ga'],
		['Italian', 'it'],
		['Icelandic', 'is'],
		['Japanese', 'ja'],
		['Javanese', 'jv'],
		['Kazakh', 'kk'],
		['Kannada', 'kn'],
		['Catalan', 'ca'],
		['Kyrgyz', 'ky'],
		['Korean', 'ko'],
		['Khmer', 'km'],
		['Laotian', 'lo'],
		['Latin', 'la'],
		['Latvian', 'lv'],
		['Lithuanian', 'lt'],
		['Luxembourgish', 'lb'],
		['Malagasy', 'mg'],
		['Malay', 'ms'],
		['Malayalam', 'ml'],
		['Maltese', 'mt'],
		['Macedonian', 'mk'],
		['Maori', 'mi'],
		['Marathi', 'mr'],
		['Mari', 'mhr'],
		['Mongolian', 'mn'],
		['Nepali', 'ne'],
		['Norwegian', 'no'],
		['Punjabi', 'pa'],
		['Papiamento', 'pap'],
		['Persian', 'fa'],
		['Polish', 'pl'],
		['Portuguese', 'pt'],
		['Romanian', 'ro'],
		['Russian', 'ru'],
		['Scottish', 'gd'],
		['Serbian', 'sr'],
		['Sinhala', 'si'],
		['Slovakian', 'sk'],
		['Slovenian', 'sl'],
		['Spanish', 'es'],
		['Swahili', 'sw'],
		['Swedish', 'sv'],
		['Sundanese', 'su'],
		['Tajik', 'tg'],
		['Thai', 'th'],
		['Tagalog', 'tl'],
		['Tamil', 'ta'],
		['Tatar', 'tt'],
		['Telugu', 'te'],
		['Turkish', 'tr'],
		['Udmurt', 'udm'],
		['Uzbek', 'uz'],
		['Ukrainian', 'uk'],
		['Urdu', 'ur'],
		['Vietnamese', 'vi'],
		['Welsh', 'cy'],
		['Xhosa', 'xh'],
		['Yiddish', 'yi'],
	]);

	return (
		<div className={styles.editor}>
			<LangaugeList
				lang={props.lang}
				langFull={''}
				showLangs={showLangs}
				isInputLang={props.isInputLang}
			/>
		</div>
	);
}

export default Langauge;
