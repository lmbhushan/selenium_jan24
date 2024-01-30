describe("parabank", ()=>{
   
    it("email",()=>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.get('.contact > a').click()
        cy.get('#name').type("Rahul")
        cy.get('#email').type("rahul@gmail.com")
        cy.get('#phone').type("9421146177")
        cy.get('#message').type("hello")
        cy.get('[colspan="2"] > .button').click()

    })
    
})