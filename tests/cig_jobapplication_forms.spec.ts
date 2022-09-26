import { test, expect } from '@playwright/test'
import { Forms } from '../page-objects/CigForms'

test.describe('Testing Job Application Forms', () => {

    //These testings perform both positive and negative testing
    //For negative testing, "wrong input" is a console-log msg and the test fails.
    //For positive testing, inputs need to be correct. Thus, we need to input Van and not
    //"van" or Vans. The tests will pass

    //Define variables
    let forms: Forms

    //Before hook
    test.beforeEach(async ({page}) => {
        forms = new Forms(page)
    })
   
    //Testing the job-application short form, usually found with Zimmer Biomet Jobs
    test("Testing the job-application short form", async({page}) => {
        await forms.visitJobApplicationShortFormPage()
        await forms.fillInPersonalCredentials("Test1", "Test2", "38002", "testtest.com", "8564712502")
        await forms.assertLegalVerbiage()
        await forms.clickSubmit()
        await forms.assertJobApplicationSubmitted()
    })

    //Testing the job-application long form, usually found with most jobs
    test("Testing the job-application long form", async({page}) => {
        await forms.visitJobApplicationLongFormPage()
        await forms.fillInJobRelatedQuestions("Yes", "4 years", "Company driver", "Team", "No", "Van", "Tanker", "0", "0")
        await forms.fillInPersonalCredentials("Test1", "Test2", "07675", "test@test.com", "8564712502")
        await forms.assertLegalVerbiage()
        await forms.clickSubmit()
        await forms.assertJobApplicationSubmitted()
        //await page.screenshot({path: 'longformsubmitte.png', fullPage:true})
    })




})