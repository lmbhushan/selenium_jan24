import{Customer}from"D:\\BhushanJoshi\\Bhushan\\Cypress\\New_folder\\cypress\\e2e\\Cypress_Assignment\\loginRepository.js"
describe("login", ()=>{
   
    it("fixture",()=>{
        cy.fixture('login.json').then((data)=>{
            cy.visit("https://parabank.parasoft.com/parabank/index.htm")
            const obj=new Customer()
        obj.enterusername(data.username)
        obj.enterpassword(data.password)
        cy.get(':nth-child(5) > .button').click()
        })
    })    
})    