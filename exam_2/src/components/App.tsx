import React from 'react';
import styles from '../styles/App.module.css';
import TranslatorHeader from './TranslatorHeader';
import TranslatorForm from './TranslatorForm';

function App() {
	return (
		<div className={styles.App}>
			<header className={styles.AppHeader}>
				<TranslatorHeader />
			</header>
			<TranslatorForm />
		</div>
	);
}

export default App;
