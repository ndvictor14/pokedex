import React from 'react'
import { SearchField } from './search-field'

describe('<SearchField />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SearchField onSearch={() => {}} />)
  });

  it('calls the provided on search method when the search button is clicked', () => {
    const onSearchSpy = cy.spy().as('onSearchSpy');
    const query = 'some pokemon';
    cy.mount(<SearchField onSearch={onSearchSpy} />);
    cy.get('[data-cy=search-input]').clear().type(query);
    cy.get('[data-cy=search-button]').click();
    cy.get('@onSearchSpy').should('have.been.calledWith', { query });
  });

  it('sets the initial search field value to the value passed in', () => {
    const value = 'initial value';
    cy.mount(<SearchField onSearch={() => {}} value={value} />);
    cy.get('[data-cy=search-input]').should('have.value', value);
  });

});