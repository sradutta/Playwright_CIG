import {test, expect, Page} from '@playwright/test'
import { JobLists } from '../page-objects/PagesWithJobLists'
import { Forms } from '../page-objects/CigForms'


test('Submitting a job multiple time', async({page}) => {

    test.setTimeout(120000)

    let joblists: JobLists
    let forms: Forms
    joblists = new JobLists(page)
    forms = new Forms(page)

    // test.beforeEach( async({page}) => {
    //     joblists = new JobLists(page)
    //     forms = new Forms(page)
    // })
        for(let j = 0; j < 100; j++){
            await page.goto('https://www.careersingear.com/containerport-group/cdl-a-owner-ops-we-raised-rates-an-avg-of-20-no-touch-container-freight-company-chassis-383535393237322d3037303236')
            
            await forms.fillInJobRelatedQuestions("Yes", "4 years", "Company driver", "Team", "No", "Van", "Tanker", "0", "0")
            await forms.fillInPersonalCredentials("Test1", "Test2", "07675", "test@test.com", "8564712502")
            await forms.clickSubmit()
            await forms.assertJobApplicationSubmitted()
            await page.screenshot({path: 'longformsubmitted_'+[j]+'.png', fullPage:true}) 
            console.log(j)
            
        }     
})

