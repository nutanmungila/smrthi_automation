describe('smrthi',()=>{

    it('load home page',()=>{
        cy.visit('https://www.smrthi.com/');
    
    })
    it('Title check',()=>{
        cy.visit('https://www.smrthi.com/');
        cy.title()
        .should('eq', 'Smrthi - Home')

    })
    it('book count check',()=>{
        cy.visit('https://www.smrthi.com/');
        cy.get('[data-test=bookItem]')
        .should('have.length', 57)

    })
    it('Text english or sanskrit check',()=>{
        cy.visit('https://www.smrthi.com/');
        cy.get('[data-test=bookTitleSkt]').contains('अ')
        cy.get('[data-test=bookTitleEng]').contains('a')
       
    })
    it('Rgveda url check',()=>{
        cy.visit('https://www.smrthi.com/');
        cy.get('[data-test=bookTitleEng]')
        .contains('ṛgveda')
        .click()
        cy.url().should('eq','https://www.smrthi.com/book/Rgveda')
    
    })
    it('Rgveda chapters count',()=>{
        cy.visit('https://www.smrthi.com/book/Rgveda');
        cy.get('[data-test=chapter]').children().should('have.length', 10)
       
    })
    it('Rgveda title text check inside',()=>{
        cy.visit('https://www.smrthi.com/book/Rgveda');
        cy.get('[data-test=bookName]').should('have.text', 'ऋग्वेद')
        
    })
    it('chapter 1.1 check',()=>{
        cy.visit('https://www.smrthi.com/book/Rgveda');
        cy.get('.MuiTypography-root')
        .contains('1')
        .click()
        cy.get('[data-test=bookContext]').contains('1.1')
        
    })
    
})
/*
Visit smrthi
TO check the text is ṛgveda
 
*/