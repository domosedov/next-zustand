describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Print Welcome', () => {
    cy.get('.bg-green-500 > .text-white').click()
    cy.findAllByRole('button').click()
  })
})
