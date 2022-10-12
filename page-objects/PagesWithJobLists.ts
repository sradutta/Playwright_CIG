import { expect, Locator, Page } from "@playwright/test";
import { Forms } from '../page-objects/CigForms'

export class JobLists {

    readonly page: Page
    readonly urlusxpres     =   'https://www.careersingear.com/us-xpress'
    readonly urlaveritt     =   'https://www.careersingear.com/averitt-express'
    readonly urlcretecar    =  'https://www.careersingear.com/crete-carrier-corporation'
    readonly urlpenske      =   'https://www.careersingear.com/penske/jobs'
    readonly urlkandb       =   'https://www.careersingear.com/k-b-transportation/jobs'
    readonly urlalabma      =   'https://www.careersingear.com/trucking-jobs/al'
    readonly urlarizona     =   'https://www.careersingear.com/trucking-jobs/az'
    readonly urlarkansas    =   'https://www.careersingear.com/trucking-jobs/ar'
    readonly urlcali        =   'https://www.careersingear.com/trucking-jobs/ca'
    readonly urlcolorado    =   'https://www.careersingear.com/trucking-jobs/co'
    readonly urlflatbed     =   'https://www.careersingear.com/haul-type/flatbed'
    readonly urlhazmat      =   'https://www.careersingear.com/haul-type/hazmat'
    readonly urlreefer      =   'https://www.careersingear.com/haul-type/reefer'
    readonly urltanker      =   'https://www.careersingear.com/haul-type/tanker'
    readonly urlvan         =   'https://www.careersingear.com/haul-type/van'

   
    constructor(page: Page){
        this.page = page
    }

    async createAndCheckJDPages (wheretogo: string) {
    
        const hrefData = new Array()
        const firstPart = 'https://www.careersingear.com'
        
        await this.page.goto(wheretogo)
        //const numOfJobs = await this.page.locator('text=Apply Now').count()
        const numOfJobs = (await this.page.locator('.job-listings').count() ||
                           await this.page.locator('.company-page-job-listings').count())


        for (let i=0; i < numOfJobs; i++){
            //var href = await this.page.locator('text=Apply Now').nth(i)
            var href = await this.page.locator('.main-link').nth(i)
            var wholeAddress = await href.getAttribute("href")
            //console.log(wholeAddress)
            hrefData.push(firstPart+wholeAddress);
            //console.log(hrefData)
        }
        for(let j = 0; j < numOfJobs; j++){
            //await forms.visitJobApplicationLongFormPage()
            //await page.screenshot({path: 'averittJobListsPage.png', fullPage:true})
            //await page.locator('text=Apply Now').nth(i).click()
            // console.log(j)
            // if(j === 3){
            //     await this.page.pause()
            // }
            await this.page.goto(hrefData[j])
            const jobAppPresent = await this.page.locator('#applicationHeader').isEnabled()
            if(jobAppPresent === true){
                const jobAppPart1 = await this.page.locator('#c_d_l_information').isEnabled()
                const jobAppPart2 = await this.page.locator('#criminal_record_information').isEnabled()
                const jobAppPart3 = await this.page.locator('#driver_and_contact_information').isEnabled()
            
                if(jobAppPart1 === true){

                    //CDL License
                    expect(this.page.locator('#drivers_license_class_a_container')).toHaveAttribute('required', '')
                    expect(this.page.locator('#radio_drivers_license_class_a_Yes')).toHaveAttribute('value', 'Yes')
                    expect(this.page.locator('#radio_drivers_license_class_a_No')).toHaveAttribute('value', 'No')

                    //Years of Experience
                    expect(this.page.locator('[aria-label="Years of Experience"]')).toHaveAttribute('required', '1')

                    //Driver Type
                    expect(this.page.locator('#driver_type_container')).toHaveAttribute('required', '')
                    expect(this.page.locator('[id="radio_driver_type_owner operator"]')).toHaveAttribute('value', 'owner operator')
                    expect(this.page.locator('[id="radio_driver_type_company driver"]')).toHaveAttribute('value', 'company driver')
                    expect(this.page.locator('#radio_driver_type_student')).toHaveAttribute('value', 'student')
                    expect(this.page.locator('[id="radio_driver_type_prospective student"]')).toHaveAttribute('value', 'prospective student')

                    //Team or Solo
                    expect(this.page.locator('#team_solo_container')).toHaveAttribute('required', '')
                    expect(this.page.locator('#radio_team_solo_Team')).toHaveAttribute('value', 'Team')
                    expect(this.page.locator('#radio_team_solo_Solo')).toHaveAttribute('value', 'Solo')

                    //Lease Purchase
                    expect(this.page.locator('#lease_purchase_container')).toHaveAttribute('required', '')
                    expect(this.page.locator('#radio_lease_purchase_Yes')).toHaveAttribute('value', 'Yes')
                    expect(this.page.locator('#radio_lease_purchase_No')).toHaveAttribute('value', 'No')

                    //Haul-type Experience
                    expect(this.page.locator('#check_haul_type_hhg')).toHaveAttribute('value', 'hhg')
                    expect(this.page.locator('[id="check_haul_type_auto carrier"]')).toHaveAttribute('value', 'auto carrier')
                    expect(this.page.locator('#check_haul_type_reefer')).toHaveAttribute('value', 'reefer')
                    expect(this.page.locator('#check_haul_type_flatbed')).toHaveAttribute('value', 'flatbed')
                    expect(this.page.locator('[id="check_haul_type_double/triple"]')).toHaveAttribute('value', 'double/triple')
                    expect(this.page.locator('#check_haul_type_tanker')).toHaveAttribute('value', 'tanker')
                    expect(this.page.locator('#check_haul_type_van')).toHaveAttribute('value', 'van')
                    expect(this.page.locator('#check_haul_type_hazmat')).toHaveAttribute('value', 'hazmat')
                    expect(this.page.locator('#check_haul_type_intermodal')).toHaveAttribute('value', 'intermodal')
                    expect(this.page.locator('#check_haul_type_stepdeck')).toHaveAttribute('value', 'stepdeck')
                    expect(this.page.locator('[id="check_haul_type_heavy haul"]')).toHaveAttribute('value', 'heavy haul')
                    expect(this.page.locator('#check_haul_type_oversized')).toHaveAttribute('value', 'oversized')

                    //Endorsement
                    expect(this.page.locator('#check_endorsement_hazmat')).toHaveAttribute('value', 'hazmat')
                    expect(this.page.locator('#check_endorsement_tanker')).toHaveAttribute('value', 'tanker')
                    expect(this.page.locator('[for="check_endorsement_double/triple"]')).toContainText('Double/triple')

                }
                if(jobAppPart2 === true){
                    expect(this.page.locator('[aria-label="Number of moving violations in the last 3 years?"]')).toHaveAttribute('required', '1')
                    expect(this.page.locator('[aria-label="Number of preventable accidents in the last 3 years?"]')).toHaveAttribute('required', '1')

                }
                if(jobAppPart3 === true){
                    expect(this.page.locator('[aria-label="First Name"]')).toHaveAttribute('required', '')
                    expect(this.page.locator('[aria-label="Last Name"]')).toHaveAttribute('required', '')
                    expect(this.page.locator('[aria-label="Zip Code"]')).toHaveAttribute('required', '')
                    expect(this.page.locator('[aria-label="Email"] >> nth=1')).toHaveAttribute('required', '')
                }
            }
        }

    }

    async createAndFillJDPages(wheretogo: string){

        const hrefData = new Array()
        const firstPart = 'https://www.careersingear.com'

        let forms: Forms
        forms = new Forms(this.page)
        
        await this.page.goto(wheretogo)
        //const numOfJobs = await this.page.locator('text=Apply Now').count()
        const numOfJobs = (await this.page.locator('.job-listings').count() ||
                           await this.page.locator('.company-page-job-listings').count())


        for (let i=0; i < numOfJobs; i++){
            //var href = await this.page.locator('text=Apply Now').nth(i)
            var href = await this.page.locator('.main-link').nth(i)
            var wholeAddress = await href.getAttribute("href")
            //console.log(wholeAddress)
            hrefData.push(firstPart+wholeAddress);
            //console.log(hrefData)
        }
        for(let j = 0; j < numOfJobs; j++){
            await this.page.goto(hrefData[j])
            const jobAppNotPresent = await this.page.locator('.off-site').isVisible()
            if(jobAppNotPresent === true){
                continue
            }
            else {
                await forms.fillInJobRelatedQuestions("Yes", "4 years", "Company driver", "Team", "No", "Van", "Tanker", "0", "0")
                await forms.fillInPersonalCredentials("Test1", "Test2", "07675", "test@test.com", "8564712502")
                //await forms.assertLegalVerbiage()
                await forms.clickSubmit()
                await forms.assertJobApplicationSubmitted()
                await this.page.screenshot({path: 'longformsubmitted_'+[j]+'.png', fullPage:true}) 
            }      
        }     
    }
}