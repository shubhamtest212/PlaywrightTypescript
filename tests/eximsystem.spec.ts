import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stagelogistics.brainbees.com/login');
  await page.getByRole('textbox', { name: '●●●●●●●' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
});