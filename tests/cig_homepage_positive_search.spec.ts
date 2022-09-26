import { expect, test} from '@playwright/test'


test('testing the search feature on homepage', async({page}) => {

    //Navigate to homepage
    await page.goto('https://www.careersingear.com/')

    //Filling in partial text as location and asserting success message
    await page.locator('text=Search Advanced Filters >> [placeholder = "City\\, State or Zip"]').fill('Pitts')
    await page.locator('text=Search Advanced Filters >> button[name="action"]').click()
    //page.waitForEvent('popup')
    //expect(page.locator('.filter-chip')).toContain('Pitts')
        
    //filter-chip
    //await expect(textFilterMsg).toContain('text=Currently Viewing Pitts')

})