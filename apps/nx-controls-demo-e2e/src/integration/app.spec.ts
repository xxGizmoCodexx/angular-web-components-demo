import { getGreeting } from '../support/app.po';

describe('nx-controls-demo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to nx-controls-demo!');
  });
});
