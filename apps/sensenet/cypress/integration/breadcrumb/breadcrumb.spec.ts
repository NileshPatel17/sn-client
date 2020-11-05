import { pathWithQueryParams } from '../../../src/services/query-string-builder'

describe('Breadcrumb', () => {
  before(() => {
    cy.login()
    cy.visit(pathWithQueryParams({ path: '/', newParams: { repoUrl: Cypress.env('repoUrl') } }))
  })
  it('breadcrumb after navigating to IT Workspace, breadcrumb should be displayed as it should.', () => {
    const expectedBreadcrumbItems = ['Content', '/', 'IT Workspace', '/', 'Document Library']
    cy.get('[data-test="drawer-menu-item-Content"]').click()
    cy.get('[data-test="IT Workspace"]')
      .click()
      .then(() => {
        cy.get('[data-test="Calendar"]').should('be.visible')
        cy.get('[data-test="table-cell-Calendar"]').should('be.visible')
      })

    cy.get('[data-test="Document Library"]').click({ force: true })
    cy.get('nav[aria-label="breadcrumb"] li').each(($el) => {
      expect(expectedBreadcrumbItems).to.include($el.text())
    })
  })
  it('clicking on parent item in the breadcrumb should open the chosen container', () => {
    const expectedBreadcrumbItems = ['Content', '/', 'IT Workspace', '/', 'Document Library']
    cy.get('[data-test="drawer-menu-item-Content"]').click()
    cy.get('[data-test="IT Workspace"]').click()
    cy.get('[data-test="Document Library"]').click({ force: true })
    cy.get('nav[aria-label="breadcrumb"] li').each(($el) => {
      expect(expectedBreadcrumbItems).to.include($el.text())
    })
    cy.get('[data-test="Document Library"]').should('be.visible')
    cy.get('[data-test="table-cell-Document Library"]').should('be.visible')
  })
  it('right click on a breadcrumb item should open its actionmenu.', () => {
    cy.get('[data-test="drawer-menu-item-Content"]').click()
    cy.get('[data-test="IT Workspace"]').click()
    cy.get('[data-test="Document Library"]').click({ force: true })
    cy.get('nav[aria-label="breadcrumb"] li')
      .find('button[aria-label="IT Workspace"]')
      .rightclick()
      .then(() => {
        cy.get('ul[role="menu"]').should('be.visible')
      })
  })
})
