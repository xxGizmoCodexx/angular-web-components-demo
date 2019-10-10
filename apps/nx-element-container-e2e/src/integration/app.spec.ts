import { getGreeting } from '../support/app.po';

describe('nx-element-container', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to nx-element-container!');
  });
});
