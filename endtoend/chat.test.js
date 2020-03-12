const puppeteer = require('puppeteer');

describe('Send message in chat', () => {
	let browser;
	let page;
	beforeAll(async () => {
		browser = await puppeteer.launch({ headless: true });
		page = await browser.newPage();
		await page.goto('http://localhost:3000/');
	}, 100000);
	it('should create new chat', async () => {
		await expect(page).toClick('[class*="chats_list"] >:last-child');
	}, 100000);
	it('should open the first chat', async () => {
		await expect(page).toClick('[class*="chats_list"] >:nth-last-child(2)');
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
			'[class*="chat_container"] > div:last-child > div:nth-child(2)',
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
