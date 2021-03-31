export default class homePage {

    private loginButton = ':nth-child(4) > .navbar-nav > :nth-child(2) > .nav-link';
    private logOutButton = ':nth-child(4) > .navbar-nav > :nth-child(2) > .nav-link';

    public navigateToHomePage(url: string) {
      cy.visit(url);
      return this;
    }

    public clickLoginButton() {
      cy.get(this.loginButton).click({multiple: true});
    }  

    public clickLogOutButton() {
        cy.get(this.logOutButton).click();
    }
}