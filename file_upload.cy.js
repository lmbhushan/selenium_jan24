import 'cypress-file-upload'
describe("FILE Upload", ()=>{
    it("DocUpload",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        
      //const filepath="New Text Document.txt"
      cy.get("#file-upload").attachfile('New Text Document.txt')
      cy.get("#file-submit").click()
      cy.wait(3000)
    })
    
    
})