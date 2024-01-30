describe("Mouse Operations", ()=>{
    it.skip("MouseHover",()=>{
        cy.visit("https://demo.opencart.com/")
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('be.visible').click()

    })

    it.skip("Right click",()=>{
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    cy.get('.context-menu-one').trigger("contextmenu")
    cy.wait(3000)
    cy.get('.context-menu-icon-copy').click()
    })


    it.only("Double click",()=>{
        cy.visit("https://www.plus2net.com/javascript_tutorial/ondblclick-demo2.php")
        //cy.get('.context-menu-one').trigger("contextmenu")
        //cy.wait(3000)
        //cy.get('.context-menu-icon-copy').click()
        cy.get('input').should('be.visible').click()
        cy.wait(3000)
        cy.get('input').dblclick()

        })
    
})

