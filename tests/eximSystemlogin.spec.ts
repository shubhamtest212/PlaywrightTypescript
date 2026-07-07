import { test } from '@playwright/test';

test('Exim Login', async ({ page }) => {

    console.log('..I am login in the Exim System..');
    await page.goto('https://stagelogistics.brainbees.com/login');

});

test('RB System', async ({ page }) => {

    console.log('..I am login in the Rocketbees System..');
    await page.goto('https://stagecourier.rocketbees.in/rb_b2c_cms/');

});

test('Facebook Login', async ({ page }) => {

    console.log('..I am login in the Facebook System..');
    await page.goto('https://www.facebook.com');

});

test('Google', async ({ page }) => {

    console.log('..I am entering some keywords in the google..');
    await page.goto('https://www.google.com');
    await page.getByPlaceholder('Search Google or type a URL').fill('Shubham');

});