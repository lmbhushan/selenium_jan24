export{Customer}
class Customer{
    enterfirstname(fname){
        cy.get(':nth-child(1) > [width="20%"]').type(fname)
    }
    enterlastname(lname){
        cy.get(':nth-child(2) > [width="20%"]').type(lname)
    }
    enteraddress(address){
        cy.get(':nth-child(3) > [width="20%"]').type(address)
    }
    entercity(city){
        cy.get(':nth-child(4) > [width="20%"]').type(city)
    }
    enterstate(state){
        cy.get(':nth-child(5) > [width="20%"]').type(state)
    }
    enterzipcode(zipcode){
        cy.get(':nth-child(6) > [width="20%"]').type(zipcode)
    }
    enterphone(phone){
        cy.get(':nth-child(7) > [width="20%"]').type(phone)
    }
    enterssn(ssn){
        cy.get(':nth-child(8) > [width="20%"]').type(ssn)
    }
    enterusername(username){
        cy.get(':nth-child(10) > [width="20%"]').type(username)
    }
    enterpassword(password){
        cy.get(':nth-child(11) > [width="20%"]').type(password)
    }
    entercpassword(cpassword){
        cy.get(':nth-child(12) > [width="20%"]').type(cpassword)
    }
    clickbutton(){
        cy.get('#leftPanel > ul > :nth-child(8) > a').click()
    }
}