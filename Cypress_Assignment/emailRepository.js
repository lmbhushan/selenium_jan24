export{Customer}
class Customer{
    entername(name){
        cy.get('#name').type(name)
    }
    enteremail(email){
        cy.get('#email').type(email)
    }
    enterphone(phone){
        cy.get('#phone').type(phone)
    }
    entermessage(message){
        cy.get('#message').type(message)
    }

}