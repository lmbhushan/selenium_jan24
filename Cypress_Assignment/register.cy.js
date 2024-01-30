describe("register", ()=>{
   
    it("pararegi",()=>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get(':nth-child(1) > [width="20%"]').type("Rahul")
        cy.get(':nth-child(2) > [width="20%"]').type("Singh")
        cy.get(':nth-child(3) > [width="20%"]').type("A-22 Shri Apt")
        cy.get(':nth-child(4) > [width="20%"]').type("Thane")
        cy.get(':nth-child(5) > [width="20%"]').type("Maharashatra")
        cy.get(':nth-child(6) > [width="20%"]').type("420092")
        cy.get(':nth-child(7) > [width="20%"]').type("9421146177")
        cy.get(':nth-child(8) > [width="20%"]').type("90564")
        cy.get(':nth-child(10) > [width="20%"]').type("rahul11")
        cy.get(':nth-child(11) > [width="20%"]').type("rsingh")
        cy.get(':nth-child(12) > [width="20%"]').type("rsingh")
        cy.get('[colspan="2"] > .button').click()
        cy.get('#leftPanel > ul > :nth-child(8) > a').click()
    })
  
})