import{Customer}from"D:\\BhushanJoshi\\Bhushan\\Cypress\\New_folder\\cypress\\e2e\\Cypress_Assignment\\registerRepository.js"
describe("register", ()=>{
   
    it("fixture",()=>{
        cy.fixture('register.json').then((d)=>{
            cy.visit("https://parabank.parasoft.com/parabank/index.htm")
            const obj=new Customer()
            cy.get('#loginPanel > :nth-child(3) > a').click()
            obj.enterfirstname(d.fname)
            obj.enterlastname(d.lname)
            obj.enteraddress(d.address)
            obj.entercity(d.city)
            obj.enterstate(d.state)
            obj.enterzipcode(d.zipcode)
            obj.enterphone(d.phone)
            obj.enterssn(d.ssn)
            obj.enterusername(d.username)
            obj.enterpassword(d.password)
            obj.entercpassword(d.cpassword)
            cy.get('[colspan="2"] > .button').click()
            cy.get('#leftPanel > ul > :nth-child(8) > a').click()
       
        })
    })
})