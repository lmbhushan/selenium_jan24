describe("parabank", ()=>{
   
    it("fixture",()=>{
        cy.fixture('para_bank').then((d)=>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.get('.contact > a').click()
        cy.get('#name').type("d.name")
        cy.get('#email').type("d.email")
        cy.get('#phone').type("d.phone")
        cy.get('#message').type("d.message")
        cy.get('[colspan="2"] > .button').click()
        })
    })
})
