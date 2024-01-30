describe('Hooks', ()=> {
  before(function(){
    cy.log("This is the setup block")
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  })

  after(function(){
    cy.log("This is teardown block")
})

  beforeEach(function(){
    cy.log("This is the login block")

    cy.fixture("data_orangehrmdata.json").then( (d)=>{
        cy.get("input[name=username]").type(d.username) 
        cy.get("input[name=password]").type(d.password)
        cy.get("button[type=submit]").click()
  })
  })
afterEach(function()
  {
    cy.log("This is logout block")
    cy.get('.oxd-userdropdown-name').click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()


  })

    it("TEST1", ()=>{
        cy.log("This is the test")
        
    })
    
   

})
