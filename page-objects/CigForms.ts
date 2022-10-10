import {chromium, expect, Locator, Page} from '@playwright/test'

export class Forms {

    //Define selectors as variables
    readonly page: Page
    readonly license: Locator
    readonly experience: Locator
    readonly driverType: Locator
    readonly teamSolo: Locator
    readonly lease: Locator
    readonly haulType: Locator
    readonly endorsement: Locator
    readonly violations: Locator
    readonly accidents: Locator
    readonly firstName: Locator
    readonly lastName: Locator
    readonly zipCode: Locator
    readonly email: Locator
    readonly phNum: Locator
    readonly submit: Locator
    //readonly verbiage: Locator

    
    //Init selectors using constructors
    constructor(page: Page){
        this.page =         page
        this.license =      page.locator('#drivers_license_class_a_container >> text=Do you have a current Class A CDL License?')
        //this.experience =   page.locator('#years_otr_exp_container >> text=Years of truck driving experience')
        this.experience = page.locator('[aria-label="Years of Experience"]')
        this.driverType =   page.locator('#driver_type_container')
        this.teamSolo =     page.locator('#team_solo_container')
        this.lease =        page.locator('lease_purchase_container')
        //this.haulType =     page.locator('haul_type_container')
        //this.endorsement =  page.locator('#endorsement_container')
        this.violations =   page.locator('[aria-label="Number of moving violations in the last 3 years?"]')
        this.accidents =    page.locator('[aria-label="Number of preventable accidents in the last 3 years?"]')
        this.firstName =    page.locator('#first_name_container >> [aria-label="First Name"]')
        this.lastName =     page.locator('#last_name_container >> [aria-label="Last Name"]')
        this.zipCode =      page.locator('#zip_container >> [aria-label="Zip Code"]')
        this.email =        page.locator('#email_container >> [aria-label="Email"]')
        this.phNum =        page.locator('#phone_container >> [aria-label="Phone Number"]')
        //this.submit =       page.locator('.btn btn-primary waves-effect waves-light light-blue darken-3, [type="submit"],[value="Submit"], #submit_button >> text=Submit')
        //this.submit =       page.locator(':nth-match(:text("Submit"),2)')
        this.submit = page.locator('text = I AGREE, SUBMIT')
        //this.submit = page.locator('#formBuilder, #submit_button')
        //this.verbiage =     page.locator('.opt_in_verbiage >> text=By providing my phone number and clicking the button below, I agree to the')
    }

    //Define methods
    //Use or change this URL, in future, to test the job-application short-form
    async visitJobApplicationShortFormPage(){
        await this.page.goto('https://www.careersingear.com/zimmer-biomet/warehouse-workers-with-zimmer-383535323330312d3338303032')
    }
    //Use or change this URL, in future, to test the job-application long-form
    async visitJobApplicationLongFormPage(){
        //await this.page.goto('https://www.careersingear.com/k-b-transportation/cdl-a-otr-driver-90k-yearly-6-mos-exp-reqd-393039373536332d3037363735') 
        // const browser = await chromium.launch()
        // const context = await browser.newContext()
        // const page = await context.newPage()
        await this.page.goto('https://www.careersingear.com/averitt-express')  
    }
    //Fill in the job-related questions
    async fillInJobRelatedQuestions(yesorno: string, yrsOfExperience: string, drivertype: string, teamOrSolo: string, leasePurchase: string, 
                                    haulType: string, endorsementType: string, numOfViolations: string, numOfAccidents: string){

        //Do you have a current class A CDL License
        if (yesorno == 'Yes'){
            //await this.page.locator('#radio_drivers_license_class_a_Yes >> text=Yes').click
            await this.page.locator('#drivers_license_class_a_container >> text=Yes').click()
        }
        else{
            //await this.page.locator('#radio_drivers_license_class_a_No >> text=No').click
            await this.page.locator('#drivers_license_class_a_container >> text=No').click()
        }
        // // Choosing the "Years of Experience"
        // switch(yrsOfExperience){
        //     case "0-3 months":
        //         //await this.page.click('[aria-label="Years of Experience"], [option value="0-3 months"]')
        //         await this.page.locator('[aria-label="Years of Experience"]').selectOption('4 years');
        //         break;
            
        // }
        //Choosing the driver type
        switch (drivertype){
            case "Owner operator":
                //await this.page.locator('#radio_driver_type_owner operator >> text=Owner operator').click()
                await this.page.locator('text=Owner operator').click()
                break;
            case "Company driver":
                //await this.page.locator('#radio_driver_type_company driver >> text=Company driver').click()
                await this.page.locator('text=Company driver').click()
                break;
            case "Student":
                //await this.page.locator('#radio_driver_type_student >> text=Student').click()
                await this.page.locator('text=Student').click()
                break;
            case "Prospective student":
                //await this.page.locator('#radio_driver_type_prospective student >> text=Prospective student').click()
                await this.page.locator('text=Prospective student').click();
                break;
        }
        //Choosing team or solo
        if(teamOrSolo == "Team"){
            //await this.page.click('#team_solo_container >> text=I am a, #radio_team_solo_Team >> text=Team')
            await this.page.locator('label:has-text("Team")').click()
        }
        else {
            await this.page.locator('label:has-text("Solo")').click()
        }
        //Choosing lease purchase is yes or no 
        if(leasePurchase == "Yes"){
            //await this.page.locator('label:has-text("Yes")').click()
            await this.page.locator('#lease_purchase_container >> text=Yes').click();
        }
        else{
            //await this.page.locator('label:has-text("No")').click()
            await this.page.locator('#lease_purchase_container >> text=No').click();
        }

        //Choosing haul type experience
        switch(haulType){
            case "Hhg":
                await this.page.locator('#check_haul_type_hhg >> text=Hhg').click()
                break;
            case "Reefer":
                await this.page.locator('#check_haul_type_reefer >> text=Reefer').click()
                break;
            case "Double/Triple":
                await this.page.locator('#check_haul_type_double/triple >> text=Double/Triple').click()
                break;
            case "Van":
                await this.page.locator('#haul_type_container, #check_haul_type_van >> text=Van').click()
                break;
            case "Intermodal":
                await this.page.locator('#check_haul_type_intermodal >> text=Intermodal').click()
                break;
            case "Heavy haul":
                await this.page.locator('#check_haul_type_heavy haul >> text=Heavy haul').click()
                break;
            case "Auto carrier":
                await this.page.locator('#check_haul_type_auto carrier >> text=Auto carrier').click()
                break; 
            case "Flatbed":
                await this.page.locator('#check_haul_type_flatbed >> text=Flatbed').click()
                break;
            case "Tanker":
                await this.page.locator('#check_haul_type_tanker >> text=Tanker').click()
                break;
            case "Hazmat":
                await this.page.locator('#check_haul_type_hazmat >> text=Hazmat').click()
                break;
            case "Stepdeck":
                await this.page.locator('#check_haul_type_stepdeck >> text=Stepdeck').click()
                break;
            case "Oversized":
                await this.page.locator('#check_haul_type_oversized >> text=Oversized').click()
                break;  
        }

        //Checking endorsement
        switch(endorsementType){
            case "Hazmat":
                await this.page.locator('#endorsement_container >> text=Hazmat').click()
                break;

            case "Tanker":
                await this.page.locator('#endorsement_container >> text=Tanker').click()
                break;

            case "Double/Triple":
                await this.page.locator('#endorsement_container >> text=Double/Triple').click()
                break
        }

        //await this.haulType.selectOption(haulType)
        //await this.endorsement.selectOption(endorsementType)
        await this.violations.selectOption(numOfViolations)
        await this.accidents.selectOption(numOfAccidents)
        await this.experience.selectOption(yrsOfExperience)

    }
    //Fill in all the personal credentials that are needed in both short and long forms
    async fillInPersonalCredentials(firstname: string, lastname: string, zip: string, email: string, phonenumber: string){
        await this.firstName.fill(firstname)
        await this.lastName.fill(lastname)
        await this.zipCode.fill(zip)
        await this.email.fill(email)
        await this.phNum.fill(phonenumber)  
    }
    //Click the "Submit" button
    async clickSubmit(){
        await this.submit.click()
        // if (await this.page.locator('.form-group input-field required invalid').isEnabled){
        //     console.log("wrong input")
        // }
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
        await delay(8000)
    }
    //Assert the presence of the legal paragraphs that appear before the "Submit" button in any job-application form
    async assertLegalVerbiage(){
        await expect((this.page).locator('.opt_in_verbiage')).toContainText('By providing my phone number and clicking the button below, I agree to the')
    }
    //Assert that the job application got submitted
    async assertJobApplicationSubmitted(){
        //await this.page.waitForEvent('popup')
        //await this.page.waitForLoadState('domcontentloaded');
        //expect(this.page).toHaveURL('https://www.careersingear.com/prequalified', {timeout: 1000})
        await expect(this.page).toHaveURL('https://www.careersingear.com/prequalified')
        //await this.page.screenshot({path: 'shortformsubmitte.png', fullPage:true})
    }
}
