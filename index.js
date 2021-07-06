const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://digitalinnovation.one/artigos/calendario-glassmorphism-com-css-e-javascript');

    await page.evaluate(() => {


    });

    await browser.close();
})();