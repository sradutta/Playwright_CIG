import { test, expect } from '@playwright/test'
import { Forms } from '../page-objects/CigForms'

/* These testings perform both positive and negative testing
For negative testing, pass in wrong inputs as parameters to the 
functions fillInPersonalCredentials and fillInJobRelatedQuestions.
The tests will keep on failing as the test will fail to assert the 
function assertJobApplicationSubmitted(). 
For positive testing, input parameters need to be correct. Thus, 
we need to input Van and not "van" or Vans. With correct input parameters, 
tests will pass. 

Thus, these tests the job-application submission process. 
*/

test.describe('Testing Job Application Forms', () => {

    //Define variables
    let forms: Forms

    //Before hook
    test.beforeEach(async ({page}) => {
        forms = new Forms(page)
    })
   
    //Testing the job-application short form, usually found with Zimmer Biomet Jobs
    test("Testing the job-application short form", async({page}) => {
        await forms.visitJobApplicationShortFormPage()
        await forms.fillInPersonalCredentials("Test1", "Test2", "38002", "test@test.com", "8564712502")
        //await forms.assertLegalVerbiage()
        await forms.clickSubmit()
        await forms.assertJobApplicationSubmitted()
    })

    //Testing the job-application long form, usually found with most jobs
    test("Testing the job-application long form", async({page}) => {
        await forms.visitJobApplicationLongFormPage()
        await forms.fillInJobRelatedQuestions("Yes", "4 years", "Company driver", "Team", "No", "Van", "Tanker", "0", "0")
        await forms.fillInPersonalCredentials("Test1", "Test2", "07675", "test@test.com", "8564712502")
        //await forms.assertLegalVerbiage()
        await forms.clickSubmit()
        await forms.assertJobApplicationSubmitted()
        //await page.screenshot({path: 'longformsubmitte.png', fullPage:true})
        })
        
    })
