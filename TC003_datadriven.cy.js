describe("Data Driven", ()=>{
    
    it("Using Fixtures",()=>{
        cy.fixture('data_orangehrmdata').then(data=>{
        cy.visit(data.url)
        cy.get("input[name=username]").type(data.username)
        cy.get("input[name=password]").type(data.password)
        cy.get("button[type=submit]").click()
              
    })
})
})

    //it ("Logout",()=>{

