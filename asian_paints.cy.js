describe("Asian paints",()=>{
    it("add_to_cart",()=>{
        cy.visit("https://www.asianpaints.com/")
        cy.wait(5000)
        //cy.get(':nth-child(2) > #exitPopupmodal > .modal-dialog > .modal-content > .modal-body > .exit-popup > .exit-popup-right > .exit-popup-header > .iconLinks')
        cy.get(':nth-child(6) > .track_section > .iconTextLinks__text').trigger('mouseover').click()
        cy.wait(2000)
        cy.get(':nth-child(5) > .anchor-explore-stores > .imageWrapper > .image-explore-stores > img').trigger('mouseover').click()
        cy.wait(2000)
        //cy.get('[href="https://www.asianpaints.com/online-shop/colour-selection-tools/asian-paints-colour-cosmos-fan-deck-2200-colours.html"] > p').trigger('mousehover').click()
        cy.get('[href="https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html"]').trigger('mouseover').click()
        cy.get('[data-attr-price="4499.25"] > :nth-child(5) > .global-button-white > :nth-child(1)').trigger('mouseover').click()
        cy.wait(2000)
        cy.get('#cartPinCode').click().type("421503")
        cy.get('.pin-code-form > .ctaComp > .ctaText').trigger('mouseover').click()
        cy.get('.cart-items-dropdowb').click()
        //cy.wait(2000)
        //cy.get('[data-attr-price="4499.25"] > :nth-child(5) > .global-button-white > :nth-child(1)').trigger('mouseover').click()
           
    
    })
})