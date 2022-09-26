import { expect, test} from '@playwright/test'


test('testing the search feature on homepage', async({page}) => {

    //Navigate to homepage
    await page.goto('https://www.careersingear.com/')

    //Leaving location empty and asserting the error message
    await page.fill('#keywords', 'van')
    await page.locator('text=Search Advanced Filters >> button[name="action"]').click()
    // page.on('alert', async(alert)) => {
    //     console.log(alert.message())
    //     expect(alert.message()).toContain('Please fill out this field.')
    // })
    const errMsg = await page.locator('text=Search Advanced Filters')
    //expect(await errMsg.screenshot()).toMatchSnapshot({threshold:0.5, maxDiffPixels: 500})
    expect(await errMsg.screenshot()).toMatchSnapshot({maxDiffPixels: 500})

})