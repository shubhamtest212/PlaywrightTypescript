import { test, expect } from '@playwright/test';

test('MY First Test', async ({page}) => {

    // Navigate to the url
    await page.goto('https://google.com');


    // Handle popup like accept cookies
    const acceptButton = page.locator('button:has-text("Accept all")');
    if(await acceptButton.isVisible()) {
        await acceptButton.click();
        console.log('Popup accepted');
    }

    await page.locator('textarea[name="q"]').fill('Playwright');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    const results = await page .locator('h3').allTextContents();
    expect(results.length).toBeGreaterThan(0);



});