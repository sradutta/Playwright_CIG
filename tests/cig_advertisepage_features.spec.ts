import {test, expect} from '@playwright/test'

/* Tests the features of the advertise page */

test('The Advertise Page', async({page}) => {

    await page.goto('https://www.careersingear.com')
    await page.locator('li > a:has-text("Advertise")').click({force:true})
    await expect(page.locator('[class="tab-heading tab-advertise white-text"]')).toContainText('Advertise')
    await expect(page.locator('span[class="small"]')).toContainText('close')
    await expect(page.locator('[for="contact_email"]')).toContainText('Email (required)')
    await expect(page.locator(('[for="name"]'))).toContainText('Full Name (required)')
    await expect(page.locator('[for="subject"]')).toContainText('Subject (required)')
    await expect(page.locator('[for="textarea"]')).toContainText('Question or Comments (required)')
    await expect(page.locator('#submit_button')).toContainText('Submit')

    const headerTab = await page.locator('[class="tab-heading tab-advertise white-text"]')
    const headerTabColor = await headerTab.evaluate((element) => {
        return window.getComputedStyle(element).getPropertyValue('background-color')
    })
    await expect(headerTabColor).toBe('rgb(209, 73, 0)')

    const submitButton = await page.locator('#submit_button')
    const submitButtonColor = await submitButton.evaluate((element) => {
        return window.getComputedStyle(element).getPropertyValue('background-color')
    })
    await expect(submitButtonColor).toBe('rgb(13, 125, 186)')
}) 

   



