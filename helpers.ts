
export async function loadHomePage(page){
    await page.goto('https://www.careersingear1.com')
}

export async function assertH1(page){
    await page.waitForSelector('h1')
}
