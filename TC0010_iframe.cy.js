import 'cypress-iframe'
describe('Iframetest', ()=>{
    it('Test1',()=>{

        cy.visit("https://jqueryui.com/draggable/")
        cy.frameLoaded('.demo-frame');
        cy.iframe().find('#draggable').then(function(t){
        const frametext=t.text()
        expect(frametext).to.contains("Drag me around");
        cy.log(frametext);
        })

    
    })
    })