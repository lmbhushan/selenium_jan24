import{spicejet} from "D:\\Bhushan Joshi\\BhushanJoshi_24184\\Cypress\\New folder (2)\\cypress\\e2e\\spicejet_repository.js"  
describe("page spicejet"),() =>{
it("Using Fixture",()=>{
    cy.fixture('data_spicejet').then((data)=>{
    const obj=new spicejet()
    obj.geturl(data.url);
    cy.url().should("eq","https://spiceclub.spicejet.com/signup")
    obj.entertitle(data.title)
    obj.enterfirstname(data.firstname)
    obj.enterlastname(data.lastname)
    obj.country(data.country)
    obj.date(data.date)
    obj.contact(data.contact)
    obj.enteremail(data.email_id)
    obj.enterpassword(data.new_password)
    obj.c_password(data.c_password)
    obj.submit()
    })
})
}

