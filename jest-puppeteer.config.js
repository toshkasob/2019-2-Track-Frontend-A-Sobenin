module.exports = {
	launch: {
		headless: true, // false для отображения в клиенте
	},
	server: {
		command: 'npm start',
		port: 3000,
		launchTimeout: 300000,
		debug: true,
	},
};
