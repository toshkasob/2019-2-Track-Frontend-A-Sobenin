import React from 'react';
import * as T from '../types/types';
import styles from '../styles/OutputBox.module.css';

function OutputBox(props: T.OutputBoxProps) {
	return (
		<div>
			{/* <span class='placeholder'></span> */}
			<textarea
				className={styles.textarea}
				placeholder="Перевод (Translate)"
				value={props.value}
				readOnly={true}
			/>
		</div>
	);
}

export default OutputBox;
