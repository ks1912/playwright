const {expect} = require('@playwright/test')
const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '../.env')
});


class LoginPage {
    userNameInput() {
        return global.page.locator('//input[@placeholder="Username"]')
    }
    userPasswordField() {
        return global.page.locator('//input[@placeholder="Password"]')
    }
    submitButton() {
        return global.page.locator('//button[@type="submit"]')
    }


    async navigate() {
        await global.page.goto(process.env.WEB_URL);
    }
    async enterUsername() {
        await this.userNameInput().waitFor({status: 'visible'});
        await this.userNameInput().fill(process.env.WEB_USERNAME);
    }
    async enterPassword() {
        await this.userPasswordField().fill(process.env.WEB_PASSWORD);
    }
    async clickOnLoginButton() {
        await this.submitButton().click();
    }
    async verifyDashboardURL() {
        expect(await global.page.url()).toEqual('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    }
}
module.exports = {
    LoginPage
}
