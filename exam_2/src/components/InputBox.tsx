import React from 'react';
import * as T from '../types/types';
import styles from '../styles/InputBox.module.css';

function InputBox(props: T.InputBoxProps) {
	return (
		<div className={styles.editor}>
			{/* <span class='placeholder'></span> */}
			<textarea
				className={styles.textarea}
				placeholder="Введите текст (Enter text)"
				value={props.value}
				onChange={props.handleChange}
				onSubmit={props.handleSubmit}
				// onKeyUp={resizeBox(this)}
				onFocus={props.handleSubmit}
			/>
		</div>
	);
}

export default InputBox;
