import { expect, test } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { readCSV } from '../utils/csvReader';

const loginData = readCSV('test-data/LoginData.csv');



loginData.forEach((data: any) => {


    if (data.run !== 'true') return;

    test(`Login test - ${data.username}`, async ({ page }) => {

        const loginPage = new LoginPage(page);

        await test.step('Navigate to loginpage with correct URL', async () => {
            await loginPage.gotoLoginPage();
        });


        await test.step('Perform login with valid username and password', async () => {
            await loginPage.login(data.username, data.password);

        });


        await test.step('Validate Result with assertions', async () => {
            if (data.expected === 'success') {
                await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
            } else {
                await expect(loginPage.errorMessage).toBeVisible();
            }
        });

    });
}
);


