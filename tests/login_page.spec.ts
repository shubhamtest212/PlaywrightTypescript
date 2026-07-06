import { expect, test } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import loginData from '../test-data/loginData.json'


test('Valid login test', async ({ page }) => {

    const loginPage = new LoginPage(page);


    await loginPage.gotoLoginPage();
    await loginPage.login(
        loginData.valid_user.username,
        loginData.valid_user.password
    )

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');   

});



test('Invalid login test', async ({ page }) => {

    const loginPage = new LoginPage(page);


    await loginPage.gotoLoginPage();
    await loginPage.login(
        loginData.invalid_user.username,
        loginData.invalid_user.password
    )

    await expect(loginPage.errorMessage).toBeVisible();

});

test('valid username and Invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login(
        loginData.InValid_password.username,
        loginData.InValid_password.password
    )
    await expect(loginPage.errorMessage).toBeVisible();
});