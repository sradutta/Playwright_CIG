import {test, expect} from '@playwright/test'

test('Verifying header links on homepage', async({page}) =>{

//Navigate to CIG
await page.goto('https://www.careersingear.com/')

//Verify "Company" link
await page.locator(':nth-match(:text("Company"),1)').click()
await expect(page).toHaveURL('https://www.careersingear.com/featured-trucking-companies')
await page.screenshot({path: 'company.png', fullPage: true})

//Verify "State" link
await page.locator(':nth-match(:text("State"),1)').click()
await expect(page).toHaveURL('https://www.careersingear.com/trucking-jobs')
await page.screenshot({path: 'state.png', fullPage: true})

//Verify "Haul Type" link
await page.locator('text=Haul Type').click()
await expect(page).toHaveURL('https://www.careersingear.com/haul-types')
await page.screenshot({path: 'haultype.png', fullPage: true})

//Verify "CIG Logo" link
await page.locator('[aria-label="Site logo link to homepage"] svg').click()
await expect(page).toHaveURL('https://www.careersingear.com/')
await page.screenshot({path: 'ciglogo.png', fullPage: true})

})