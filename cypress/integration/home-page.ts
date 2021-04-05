describe('Home Page', () => {
  it('Print Welcome', () => {
    cy.visit('http://localhost:3001').get('.bg-green-500 > .text-white').click()
  })
})
