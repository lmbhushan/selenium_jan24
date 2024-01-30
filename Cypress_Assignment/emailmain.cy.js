import{Customer}from"D:\\BhushanJoshi\\Bhushan\\Cypress\\New_folder\\cypress\\e2e\\Cypress_Assignment\\emailRepository.js"
describe("parabank", ()=>{
   
    it("fixture",()=>{
        cy.fixture('email.json').then((d)=>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        const obj=new Customer()
        cy.get('.contact > a').click()
        obj.entername(d.name)
        obj.enteremail(d.email)
        obj.enterphone(d.phone)
        obj.entermessage(d.message)
        cy.get('[colspan="2"] > .button').click()
        })
    })
})
