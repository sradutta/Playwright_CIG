import {test, expect} from '@playwright/test'

/* This tests the state-tab from the top-right navigation menu.
Click on state-tab and navigate to https://www.careersingear.com/trucking-jobs.
48 state cards are located in that page. Thus, this test will 
navigate to each of the states individually and make sure jobs are listed.
It will also make sure that jobs are listed for that particular state only by 
asserting the presence of the state-abbreivation in the location input 
field.
*/

test.describe('The State-Tab link from top-right', () => {

    const baseURL = 'https://www.careersingear.com/trucking-jobs'
    const stateArr = ['al','az','ar','ca','co','ct','de','fl','ga',
                          'id','il','in','ia','ks','ky','la','me','md','ma',
                          'mi','mn','ms','mo','mt','ne','nv','nh','nj',
                          'nm','ny','nc','nd','oh','ok','or','pa','ri','sc',
                          'sd','tn','tx','ut','vt','va','wa','wv','wi','wy']
    const length = stateArr.length

    for(let i=0; i<length; i++){
        // const context = await browser.newContext()
        // const page = await context.newPage()
        test('Testing state --'+ stateArr[i], async({page}) => {
            await page.goto(baseURL+'/'+stateArr[i])
            const numOfJobs = await page.locator('.job-listings').count()
            await expect(numOfJobs).toBeGreaterThan(0)
            await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[i].toUpperCase())
            //await page.screenshot({path: stateArr[i]+'.png', fullPage:true}) //for debugging
        })
    }

    /* The code below exists in case we need to perfom any test based on a particular 
    individual state 
    */

    // test('AL', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[0])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[0].toUpperCase())
    // })

    // test('AZ', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[1])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[1].toUpperCase())
    // })

    // test('AR', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[2])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[2].toUpperCase())
    // })

    // test('CA', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[3])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[3].toUpperCase())
    // })

    // test('CO', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[4])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[4].toUpperCase())
    // })

    // test('CT', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[5])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[5].toUpperCase())
    // })

    // test('DE', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[6])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[6].toUpperCase())
    // })

    // test('FL', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[7])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[7].toUpperCase())
    // })

    // test('GA', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[8])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[8].toUpperCase())
    // })

    // test('ID', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[9])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[9].toUpperCase())
    // })

    // test('IL', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[10])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[10].toUpperCase())
    // })

    // test('IN', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[11])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[11].toUpperCase())
    // })

    // test('IA', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[12])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[12].toUpperCase())
    // })

    // test('KS', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[13])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[13].toUpperCase())
    // })

    // test('KY', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[14])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[14].toUpperCase())
    // })

    // test('LA', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[15])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[15].toUpperCase())
    // })

    // test('ME', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[16])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[16].toUpperCase())
    // })

    // test('MD', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[17])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[17].toUpperCase())
    // })

    // test('MA', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[18])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[18].toUpperCase())
    // })

    // test('MI', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[19])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[19].toUpperCase())
    // })

    // test('MN', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[20])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[20].toUpperCase())
    // })

    // test('MS', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[21])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[21].toUpperCase())
    // })

    // test('MO', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[22])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[22].toUpperCase())
    // })

    // test('MT', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[23])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[23].toUpperCase())
    // })


    // test('NE', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[24])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[24].toUpperCase())
    // })

    // test('NV', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[25])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[25].toUpperCase())
    // })

    // test('NH', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[26])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[26].toUpperCase())
    // })

    // test('NJ', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[27])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[27].toUpperCase())
    // })

    // test('NM', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[28])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[28].toUpperCase())
    // })

    // test('NY', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[29])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[29].toUpperCase())
    // })

    // test('NC', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[30])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[30].toUpperCase())
    // })

    // test('ND', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[31])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[31].toUpperCase())
    // })

    // test('OH', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[32])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[32].toUpperCase())
    // })

    // test('OK', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[33])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[33].toUpperCase())
    // })

    // test('OR', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[34])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[34].toUpperCase())
    // })

    // test('PA', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[35])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[35].toUpperCase())
    // })

    // test('RI', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[36])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[36].toUpperCase())
    // })

    // test('SC', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[37])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[37].toUpperCase())
    // })

    // test('SD', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[38])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[38].toUpperCase())
    // })

    // test('TN', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[39])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[39].toUpperCase())
    // })

    // test('TX', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[40])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[40].toUpperCase())
    // })

    // test('UT', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[41])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[41].toUpperCase())
    // })

    // test('VT', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[42])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[42].toUpperCase())
    // })

    // test('VA', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[43])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[43].toUpperCase())
    // })

    // test('WA', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[44])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[44].toUpperCase())
    // })

    // test('WV', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[45])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[45].toUpperCase())
    // })

    // test('WI', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[46])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[46].toUpperCase())
    // })

    // test('WY', async({page}) => {
    //     await page.goto(baseURL+'/'+stateArr[47])
    //     const numOfJobs = await page.locator('.job-listings').count()
    //     await expect(numOfJobs).toBeGreaterThan(0)
    //     await expect(page.locator('#location >> nth=1')).toHaveAttribute('value',stateArr[47].toUpperCase())
    // })

})