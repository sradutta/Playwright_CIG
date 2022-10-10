import { test, expect} from '@playwright/test'

/* This test the Company Page. From the top-right, click
on the company tab. You will then be navigated to the 
Company Page. The test ensures that the listings -- Averitt, 
US Xpress, Penske, etc, etc -- work; that is user is navigated
the correct page when each listing is clicked and jobs are shown.
*/

test.describe("Testing all the features of the company-tab page", () => {

    //Go To the company page
    test.beforeEach(async({page}) => {
      await page.goto('https://www.careersingear.com/featured-trucking-companies')
      await expect(page.locator('h1:has-text("Featured Trucking Companies Hiring")')).toHaveText("Featured Trucking Companies Hiring")
    })
    
    //Averitt
    test('Averitt Link', async({page}) => {
      await page.locator('text=Averitt Express').click()
      await page.waitForURL('https://www.careersingear.com/averitt-express')
      await expect(page.locator('img[alt="Averitt Express"]')).toBeVisible
      await expect(page.locator('text=Averitt Express')).toBeVisible
      const numOfAverittJobs: number = await page.locator('a:has-text("Apply Now")').count()
      await expect(numOfAverittJobs).toBeGreaterThan(0)
    })

    //Crete Carrier
    test('Crete Carrier', async({page}) => {
      await page.locator('nav >> text=Company').click()
      await page.locator('text=Crete Carrier Corporation').click()
      await page.waitForURL('https://www.careersingear.com/crete-carrier-corporation')
      await expect(page.locator('.company-name')).toHaveText("Crete Carrier Corporation")
      const numOfCrteJobs: number = await page.locator('a:has-text("Apply Now")').count()
      await expect(numOfCrteJobs).toBeGreaterThan(0)
    })
    
     //K & B Transportation 
     test('K&B Transportation', async({page}) => {
      await page.locator('nav >> text=Company').click()
      await page.locator('text=K&B Transportation').click()
      await page.waitForURL('https://www.careersingear.com/k-b-transportation/jobs')
      await expect(page.locator('.company-name')).toHaveText("K&B Transportation")
      const numOfKBJobs: number = await page.locator('a:has-text("Apply Now")').count()
      await expect(numOfKBJobs).toBeGreaterThan(0)
     })

     //Penske
     test('Penske', async({page}) => {
      await page.locator('nav >> text=Company').click()
      await page.locator('text=Penske').click()
      await page.waitForURL('https://www.careersingear.com/penske/jobs')
      await expect(page.locator('.company-name')).toHaveText('Penske')
      const numOfPenskeJobs: number = await page.locator('a:has-text("Apply Now")').count()
      await expect(numOfPenskeJobs).toBeGreaterThan(0)
     })
     
     //US Xpress
     test('US Xpress', async({page}) => {
      await page.locator('nav >> text=Company').click()
      await page.locator('text=US Xpress').click()
      await page.waitForURL('https://www.careersingear.com/us-xpress')
      await expect(page.locator('.company-name')).toHaveText('US Xpress')
      const numOfUSXpressJobs: number = await page.locator('a:has-text("Apply Now")').count()
      await expect(numOfUSXpressJobs).toBeGreaterThan(0)
     })
     
     //See More Trucking Companies
     test('Other Companies', async({page}) => {
      await page.locator('nav >> text=Company').click()
      await page.locator('text=See more trucking companies hiring').click()
      await expect(page.locator('h1')).toHaveText('Trucking Companies')
      await expect(page.locator('.row:has(p)')).toContainText("Searching for trucking and transportation related companies hiring? Look through our list of employers to view all available truck driving and trucking related job postings.")
      const numOfDiffJobs: number = await page.locator('[class="company-name truncate"]').count()
      await expect(numOfDiffJobs).toBeGreaterThan(0)
      var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      for(let i=0; i < 26; i++){
        await expect(page.locator('a:has-text("c[i]")')).toBeTruthy
      }
     })
})
