describe("Booknow",()=>{
    it("bookflight",()=>{

    })
    it("Book",()=>{
        cy.visit("https://www.spicejet.com/")
        //cy.get('[data-testid="guest-submit-btn"]').click()
        cy.get('[data-testid="search-source-code"]').click()
        cy.get('[data-testid="auto-cmp-txt"]').click().type("BOM")
        cy.get('[data-testid="auto-cmp-row-title-0"]').click()
        cy.get('[data-testid="search-destination-code"]').click()
        cy.get('[data-testid="auto-cmp-txt"]').click().type("PNQ")
        cy.get('[data-testid="auto-cmp-row-0"]').click()
        cy.get('.r-1awozwy > :nth-child(1) > [data-testid="search-renderPax"]').click()
        cy.get('[data-testid="home-travellers-adult-2"]').click()
        cy.get('[data-testid="home-travellers-child-1"]').click()
        cy.get('[data-testid="home-travellers-action-btn"]').click()
        cy.get('[style="flex-wrap: nowrap;"] > :nth-child(1) > .css-1dbjc4n > .css-76zvg2')
        //cy.get('.r-150rngu > :nth-child(1) > :nth-child(1) > .css-1dbjc4n > .css-76zvg2').click()
        cy.get('[data-testid="search-submit-btn"]').click()
        cy.get(':nth-child(7) > :nth-child(1) > .r-jwli3a').click()
        

    })
})