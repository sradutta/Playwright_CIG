import {test, expect} from '@playwright/test'

test("logging in", async({page}) => {
    await page.goto("https://int-identity.randallreilly.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DReachClient%26redirect_uri%3Dhttps%253A%252F%252Fstage.reach.randallreilly.com%252Flogin-callback%252F%26scope%3Dopenid%2520profile%2520role%2520offline_access%26response_type%3Dcode%26nonce%3DjmJsoykjf0z1jWWxH02447Ik9vLZh2msRmM3cIcx%26state%3DGPgASQH6igNotbUdFNBfzhzoIX7jrOqhddl75D6R");
    await page.locator('[placeholder="Enter email"]').fill('srabastidutta@randallreilly.com');
    await page.locator('text=CONTINUE').click();
    await page.locator('[placeholder="Enter password"]').fill('Pantubarfi1720!');
    //page.click('text=LOGIN');
    await page.goto('https://stage.reach.randallreilly.com/');
    await page.locator('text=Reach Jobs Demo Site')
    //await expect(page.locator('text=Reach Jobs Demo Site'));
})