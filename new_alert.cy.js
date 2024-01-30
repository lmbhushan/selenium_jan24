describe("Alerts",()=>{
    it("Simple Alert",()=>{

        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
        cy.wait(2000)
        cy.get('#alertexamples').click()
        cy.on('window:alert',(t)=>{
            expect(t).contains("I am an alert box")

        })
    })

it("Confirm Alert",()=>{

    cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
    cy.wait(3000)
    cy.get('#confirmexample').click()
    cy.on('window:confirm',(t1)=>{
        expect(t1).contains("I am a confirm alert")

    })
})

it("Prompt Alert", ()=>{

    cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
    
    cy.window().then((win)=>{
    cy.stub(win,'prompt').returns('rahul')
    })
    cy.get('#promptexample').click()
})
    
})