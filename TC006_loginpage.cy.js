import {loginpage} from "D:\\Bhushan Joshi\\BhushanJoshi_24184\\Cypress\\New folder (2)\\cypress\\e2e\\login_repository.js"

describe("orangeHRM", ()=> {
  
    it("Login", ()=>{

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.fixture("data_orangehrmdata.json").then( (d)=>{
    const obj=new loginpage()

obj.enterusername(d.username)
obj.enterpassword(d.password)
obj.clickonsubmit()

})
})
})