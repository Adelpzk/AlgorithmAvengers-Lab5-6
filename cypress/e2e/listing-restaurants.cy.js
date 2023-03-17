describe('Listing Restaurants', () => {
  it('shows restaurants from the server', () => {
    const sushiPlace = 'Sushi Place';
    const pizzaPlace = 'Pizza Place';
    cy.intercept('GET', 'https://api.outsidein.dev/basbgzLP6Hbw6eOVaLZiCMFNLMSGI3g8/restaurants', [
      {id: 1, name: sushiPlace},
      {id: 2, name: pizzaPlace},
    ]);
    cy.visit('/');
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
