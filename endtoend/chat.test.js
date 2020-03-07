const puppeteer = require('puppeteer');

describe('Send message in chat', () => {
	let browser;
	let page;
	beforeAll(async () => {
		browser = await puppeteer.launch();
		page = await browser.newPage();
		await page.goto('http://localhost:3000/');
	});
	it('should create new chat', async () => {
		await expect(page).toClick('[class*="chats_list"] >:last-child');
	});
	it('should open the first chat', async () => {
		await expect(page).toClick('[class*="chats_list"] >:nth-last-child(2)');
	});
	it('should write phrase "I can write this phrase" ', async () => {
		await expect(page).toFillForm('#input', {
			value: 'I can write this phrase',
		});
		await page.keyboard.press('Enter');
		await expect(page).toMatchElement(
			'[class*="chat_container"] > div:last-child > div:nth-child(2)',
			{
				text: 'I can write this phrase',
			},
		);
	});
	afterAll(async () => {
		await browser.close();
	});
});
