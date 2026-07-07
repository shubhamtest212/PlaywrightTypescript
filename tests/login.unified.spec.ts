import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { readData } from '../utils/dataReader';

const testData = readData('./test-data/LoginData.xlsx');
const testData = readData('./test-data/LoginData.csv');
const testData = readData('./test-data/loginDataNew.json', 'Sheet1');

test.describe('Login Tests', () => {

    for (const data of testData) {

        // if (data.run !== 'yes') continue;

        test(`Login test for- ${data.username}`, async ({ page }) => {

            test.skip(data.run !== 'yes', 'Run flag=NO')

            const loginPage = new LoginPage(page);

            await test.step('Navigate to loginpage', async () => {
                await loginPage.gotoLoginPage();
            });

            await test.step('Perform login', async () => {
                await loginPage.login(data.username, data.password);
            });


            await test.step('Validate Result', async () => {
                if (data.expected === 'success') {
                    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
                } else {
                    await expect(loginPage.errorMessage).toBeVisible();
                }
            });

        });
    }
});
