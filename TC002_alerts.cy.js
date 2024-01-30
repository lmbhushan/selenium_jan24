describe("Alerts",()=>{
    it("Simple Alert",()=>{

        cy.visit("https://letcode.in/alert")
        cy.wait(2000)
        cy.get('#accept').click()
        cy.on('window:alert',(t)=>{
            expect(t).contains("Hey welcome to LetCode")

        })
    })



it("Confirm Alert",()=>{

    cy.visit("https://letcode.in/alert")
    cy.wait(3000)
    cy.get('#confirm').click()
    cy.on('window:confirm',(t1)=>{
        expect(t1).contains("welcome to LetCode")

    })
})


it("Prompt Alert", ()=>{

    cy.visit("https://letcode.in/alert")
    
    cy.window().then((win)=>{
    cy.stub(win,'prompt').returns('rahul')
    
    
    })
    cy.get('#prompt').click()
})
    
})