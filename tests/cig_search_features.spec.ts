import {test, expect} from '@playwright/test'

/* This tests the search feature on the homepage. 
The magnifying glass search feature from the top
right navigation bar. It also checks the Advanced
Filters. 
*/

test.describe('Testing all the search features of CIG', () => {


    test('The search feature on home-page', async({page}) => {
        await page.goto('https://www.careersingear.com/')

        await expect(page.locator('text=Search Advanced Filters')).toBeVisible()
        await expect(page.locator('#keywords')).toBeVisible()
        await expect(page.locator('text=Search Advanced Filters >> [placeholder="City, State or Zip"]')).toBeVisible()
        await expect(page.locator('text=Search Advanced Filters >> [placeholder="City, State or Zip"]')).toHaveAttribute('required','')
        await expect(page.locator('[class="btn orange darken-4"]:has-text("Search")')).toBeVisible()

        const boxLocation = await page.locator('text=Search Advanced Filters >> [placeholder="City, State or Zip"]');
        const boxLocationColor = await boxLocation.evaluate((element) =>{
            return window.getComputedStyle(element).getPropertyValue('background-color')
             })
        expect(boxLocationColor).toBe('rgb(255, 255, 255)')

        const boxKeywords = await page.locator('#keywords')
        const boxKeywordsColor = await boxKeywords.evaluate( (element) => {
            return window.getComputedStyle(element).getPropertyValue('background-color')
        })
        expect(boxKeywordsColor).toBe('rgb(255, 255, 255)')

        const searchBtn = await page.locator('[class="btn orange darken-4"]:has-text("Search")')
        const searchBtnColor = await searchBtn.evaluate( (element) => {
            return window.getComputedStyle(element).getPropertyValue('background-color')
        })
        expect(searchBtnColor).toBe('rgb(209, 73, 0)')

        const typedKeyword = 'Flatbed'
        const typedPlace = 'OH'
        await page.locator('#keywords').fill(typedKeyword)
        await page.locator('text=Search Advanced Filters >> [placeholder="City, State or Zip"]').fill(typedPlace)
        await page.locator('[class="btn orange darken-4"]:has-text("Search")').click()
        await expect(page.locator('.filter-chip >> nth=0')).toHaveText(typedKeyword)
        await expect(page.locator('.filter-chip >> nth=1')).toHaveText(typedPlace)
        const numOfJobs = await page.locator('.job-listings').count()
        expect(numOfJobs).toBeGreaterThan(0)


    })

    test('The search feature -- magnifying glass --  from the header', async({page}) => {
        await page.goto('https://www.careersingear.com/haul-types')
        await page.locator('#mdi-magnify').click()
        
        const boxKeywords = await page.locator('[aria-label="Keywords"] >> nth=0')
        const boxKeywordsColor = await boxKeywords.evaluate((element) => {
            return window.getComputedStyle(element).getPropertyValue('background-color')
        })
        expect(boxKeywordsColor).toBe('rgba(0, 0, 0, 0)')
        expect(boxKeywords).toHaveAttribute('placeholder','Keywords or Company')

        const boxLocation = await page.locator('[aria-label="Location"] >> nth=0')
        const boxLocationColor = await boxKeywords.evaluate((element) => {
            return window.getComputedStyle(element).getPropertyValue('background-color')
        })
        expect(boxLocationColor).toBe('rgba(0, 0, 0, 0)')
        expect(boxLocation).toHaveAttribute('placeholder','City\, State or Zip')

        const boxDistance = await page.locator('[aria-label="Radius"] >> nth=1')
        const boxDistanceColor = await boxDistance.evaluate( (element) => {
            return window.getComputedStyle(element).getPropertyValue('background-color')
        })
        expect(boxDistanceColor).toBe('rgba(255, 255, 255, 0.9)')
        expect(boxDistance).toContainText('Distance')
        expect(page.locator('option >> nth=0')).toHaveAttribute('option', '')

        expect(page.locator('.safari_only_search')).toHaveText('Search')
        const searchBox = await page.locator('.safari_only_search')
        const searchBoxColor = await searchBox.evaluate( (element) => {
            return window.getComputedStyle(element).getPropertyValue('background-color')
        })
        expect(searchBoxColor).toBe('rgb(255, 255, 255)')
        
        const typedKeyword = 'Van'
        const typedPlace = 'pitt'
        await page.locator('[aria-label="Keywords"] >> nth=0').fill(typedKeyword)
        await page.locator('[aria-label="Location"] >> nth=0').fill(typedPlace)
        await page.locator('.safari_only_search').click()
        await expect(page.locator('.filter-chip >> nth=0')).toHaveText(typedKeyword)
        await expect(page.locator('.filter-chip >> nth=1')).toHaveText(typedPlace)
        const numOfJobs = await page.locator('[class="col l9 m9 s12"]').count()
        expect(numOfJobs).toBeGreaterThan(0)
    })

    test('Testing Advanced Filters', async({page}) => {
        
        await page.goto('https://www.careersingear.com/')
        await page.locator('text=Advanced Filters').click()
        await expect(page.url()).toEqual('https://www.careersingear.com/search')
        const numOfJobs = await page.locator('.job-listings').count()
        expect(numOfJobs).toBeGreaterThan(0)
        expect(page.locator('[class="grey-text text-darken-3"] >> nth=1')).toHaveText('Company')
        expect(page.locator('[class="grey-text text-darken-3"] >> nth=2')).toHaveText('Haul Type Experience')
        expect(page.locator('[class="btn waves-effect waves-light z-depth-0 filter"]')).toHaveText('Filter Results')


    })

})