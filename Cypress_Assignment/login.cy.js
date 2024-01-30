describe("login", ()=>{
   
    it("fixture",()=>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.get(':nth-child(2) > .input').type("rahul11")
        cy.get(':nth-child(4) > .input').type("rsingh")
        cy.get(':nth-child(5) > .button').click()
       
    })
  
})