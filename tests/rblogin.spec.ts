import { test } from '@playwright/test';

test('Exim Login', async ({page}) => {
    
    console.log('..I am login in the Exim System..');
    await page.goto('https://stagelogistics.brainbees.com/login');

});