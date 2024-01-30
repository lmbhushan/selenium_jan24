describe("Login with orangeHRM", ()=>{
    it.skip("Register",()=>{

    })
    it.skip("Implicit assertions",()=>{
    //it("Login",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       // cy.title().should("eq","OrangeHRM")
        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and("include","orange")
        .and("contain","orange")
        //cy.url().should("contain","blue")
        //cy.url().should("include","Orange")
        cy.get("input[name=username]").type("Admin")
        cy.get("input[name=password]").type("admin123")
        cy.get("button[type=submit]").click()

    })
    //it ("Logout",()=>{

   // })
})

it.only("Explicit assertions",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name=username]").type("Admin")
    cy.get("input[name=password]").type("admin123")
    cy.get("button[type=submit]").click()
    
    let expname="Burak İkinci"
    cy.get('.oxd-userdropdown-name').then((x)=>{
        let acname=x.text()
        expect(acname).to.not.equal(expname)
        expect(acname).to.equal("Burak İkinci")
        
        assert.Equal(acname,expname)
        assert.notEqual(acname,expname)

    })

})
