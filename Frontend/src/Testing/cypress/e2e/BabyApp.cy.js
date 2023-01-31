describe('login into the app', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('Feeding page', () => {
  it('navigates to feeding', () => {
    cy.visit('http://localhost:3000/feeding')
  })

  it('shows the feeding title', () => {
    cy.visit('http://localhost:3000/feeding')
    cy.get('[data-testid="feedingTitle"]').should('exist')
  })

  it('adds a feeding', () => {
    cy.visit('http://localhost:3000/feeding')
    cy.get('[data-testid="addFeedingButton"]').click()
    cy.get('[data-testid="formTime"]').type('2017-06-01T08:30')
    cy.get('[data-testid="formDescription"]').type('100')
    cy.get('[data-testid="formButton"]').click()
  })

})

describe('Nappies page', () => {
  it('navigates to nappies', () => {
    cy.visit('http://localhost:3000/nappies')
  })

  it('shows the nappies title', () => {
    cy.visit('http://localhost:3000/nappies')
    cy.get('[data-testid="nappyTitle"]').should('exist')
  })

  it('adds a nappy', () => {
    cy.visit('http://localhost:3000/nappies')
    cy.get('[data-testid="addNappiesButton"]').click()
    cy.get('[data-testid="formTime"]').type('2017-06-01T08:30')
    cy.get('[data-testid="formDescription"]').type('wet')
    cy.get('[data-testid="formButton"]').click()
  })
})

describe('Name page', () => {
  it('navigates to name', () => {
    cy.visit('http://localhost:3000/name')
  })

  it('get new name', () => {
    cy.visit('http://localhost:3000/name')
    cy.get('[data-testid="getNewNameButton"]').click()
    cy.get('[data-testid="randomName"]').should('exist')
  })

  it('get new name - looping through the letters', () => {
    cy.visit('http://localhost:3000/name')
    
    for (let i = 0; i < 10; i++) {
      let letters = cy.get('[data-testid="letterButtonDiv"]').children()
      cy.get('[data-testid="letterButtonDiv"]').children().eq(i).click()
      cy.get('[data-testid="getNewNameButton"]').click()
      cy.get('[data-testid="randomName"]').should('contain', letters[i].text())
    }
  })
})



