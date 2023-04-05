/// <reference types="cypress" />

context('Navigation', () => {
    describe('pokedex application application', () => {
        beforeEach(() => {
            // Cypress starts out with a blank slate for each test
            // so, we must tell it to visit our website with the `cy.visit()` command.
            // Since we want to visit the same URL at the start of all our tests,
            // we include it in our beforeEach function so that it runs before each test
            cy.visit('');
        });

        const LINKS = [
            { name: 'Home', route: '/pokedex' },
            { name: 'Simulator', route: '/simulator' },
            { name: 'Credits', route: '/credits' }
        ]

        describe('desktop', () => {
            beforeEach(() => {
                cy.viewport('macbook-11');
            });

            it('displays the application links', () => {
                LINKS.forEach(link => {
                    cy.contains(link.name).should('exist');
                });
            });

            it('navigates to the expected pages', () => {
                LINKS.forEach(link => {
                    cy.contains(link.name).click();
                    cy.location('pathname').should('equal', link.route);
                });
            });

            it('displays the user profile menu', () => {
                cy.get('[data-cy=profile-button]').should('exist');
            });
        });

        describe('mobile', () => {
            beforeEach(() => {
                cy.viewport('iphone-6');
            });
            it('displays the application links under the sub menu', () => {
                cy.get('[data-cy=mobile-menu]').click();
                LINKS.forEach(link => {
                    cy.contains(link.name).should('exist');
                });
            });

            it('navigates to the expected pages', () => {
                cy.get('[data-cy=mobile-menu]').click();
                LINKS.forEach(link => {
                    cy.contains(link.name).click({ force: true });
                    cy.location('pathname').should('equal', link.route);
                    cy.get('[data-cy=mobile-menu]').click();
                });
            });

            it('displays the user profile menu', () => {
                cy.get('[data-cy=profile-button]').should('exist');
            });
        });
    })
})