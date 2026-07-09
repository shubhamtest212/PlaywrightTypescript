import { test, expect } from '@playwright/test';

test('Typescript & Playwright Project', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('buy');
  await page.getByTestId('text-input').dblclick();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('play');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.getByRole('link', { name: 'Active' })).toBeVisible();
  await page.getByRole('listitem').filter({ hasText: 'All' }).click();
  await page.getByText('play').click();
  await page.getByRole('listitem').filter({ hasText: 'play' }).getByTestId('todo-item-toggle').check();
  await expect(page.getByRole('button', { name: 'Clear completed' })).toBeVisible();
//   await page.getByTestId('footer').click();
});