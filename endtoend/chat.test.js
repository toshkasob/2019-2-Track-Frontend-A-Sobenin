const puppeteer = require('puppeteer');

describe('Send message in chat', () => {
	let browser;
	let page;
	beforeAll(async () => {
		browser = await puppeteer.launch({ headless: true });
		page = await browser.newPage();
		await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
	}, 100000);
	it('should create new chat', async () => {
		await expect(page).toClick('[data-qa="button-create-chat"]');
	}, 100000);
	it('should open the created chat', async () => {
		await expect(page).toClick('[data-qa="link-to-chat"]:last-of-type');
	}, 100000);
	it('should write phrase "I can write this phrase" ', async () => {
		await expect(page).toFill('input', 'I can write this phrase');
		// await page.waitFor(20000000);
	}, 100000);
	it('should press Enter" ', async () => {
		await page.keyboard.press('Enter');
	}, 100000);

	it('should check written phrase "I can write this phrase" ', async () => {
		await expect(page).toMatchElement(
			'[data-qa="message-in-chat"]:last-of-type [data-qa="message-text"]',
			{
				text: 'I can write this phrase',
			},
		);
	}, 100000);

	it('should write phrase "I can write this phrase" ', async () => {
		await expect(page).toFill('#input', 'I can write this phrase');
		await page.keyboard.press('Enter');
		await expect(page).toMatchElement(
			'[class*="chat_container"] > div:last-child > div:nth-child(2)',
			{
				text: 'I can write this phrase',
			},
		);
	}, 100000);

	afterAll(async () => {
		await browser.close();
	}, 100000);
});
