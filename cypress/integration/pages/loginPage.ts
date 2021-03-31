export default class loginPage {

    private username = '#userName';
    private password = '#exampleInputPassword1';
    private submitButton = '.btn';
    private successAlert = '.alert';
    private registerHyperlink = '.text-center > .text-dark';

    public setUsername(username: string){
        cy.get(this.username).type(username);
    }
    public setPassword(password: string){
        cy.get(this.password).type(password);
    }

    public clickSubmitButton(){
        cy.get(this.submitButton).click();
    }

    public checkLoginSuccessAlert (text: string) {
        cy.get(this.successAlert).should('contain', text);
      }

    public clickRegisterHyperlink () {
      cy.get(this.registerHyperlink, {timeout: 3000}).click();
    }  



}