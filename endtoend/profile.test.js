const puppeteer = require('puppeteer');

describe('Edit profile', () => {
	let browser;
	let page;
	beforeAll(async () => {
		browser = await puppeteer.launch({ headless: true });
		page = await browser.newPage();
		await page.goto('http://localhost:3000/#/edit_profile', {
			waitUntil: 'networkidle0',
		});
	}, 100000);
	it('should add Full name', async () => {
		await expect(page).toFill('[data-qa="input-fullname"]', 'Antonio S.');
	}, 100000);
	it('should add Username', async () => {
		await expect(page).toFill('[data-qa="input-username"]', 'Antoni');
	}, 100000);
	it('should add Full name', async () => {
		await expect(page).toFill('[data-qa="input-bio"]', "I'm Antonio =P");
	}, 100000);
	it('should press Enter" ', async () => {
		await page.keyboard.press('Enter');
	}, 100000);

	afterAll(async () => {
		await browser.close();
	}, 100000);
});
