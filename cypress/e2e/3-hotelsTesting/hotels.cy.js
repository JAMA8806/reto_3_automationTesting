
describe("Testing", ()=>{

    beforeEach(()=>{
        
        cy.visit("https://jama8806.github.io/hotels/")
    })
    
    

    it("Verify all the hotel cards are loaded", ()=>{
        cy.get('.hotel-card').should('have.length', 18)
    })
    
    it("Verify every price filter match cards", ()=>{
        
        cy.get('.filter-prices').select("All prices")
        cy.get('.hotel-card').should('have.length', 18)
        
        cy.get('.filter-prices').select("1")
        cy.get('div[data-price="1"]').should('have.length', 3)
        cy.get('.filter-prices').select("2")
        cy.get('div[data-price="2"]').should('have.length', 4)
        cy.get('.filter-prices').select("3")
        cy.get('div[data-price="3"]').should('have.length', 2)
        cy.get('.filter-prices').select("4")
        cy.get('div[data-price="4"]').should('have.length', 9)
        
        
    })
    
    it("Verify the clear button is working", ()=>{
        
        cy.get('.filter-prices').select("4")
        cy.get('div[data-price="4"]').should('have.length', 9)
        cy.get('.clear-btn').click()
        cy.get('.hotel-card').should('have.length', 18)

    })
    
})