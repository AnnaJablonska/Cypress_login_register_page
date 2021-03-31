export default class registerPage {

    private usernameInput = '#username';
    private firstNameInput = '#firstName';
    private lastNameInput = '#lastName';
    private emailAddressInput = '#exampleInputEmail1';
    private passwordInput = '#exampleInputPassword1';
    private confirmPasswordInput = '#confirmpassword';
    private submitButton = '.btn-primary';
    private registerSuccessAlert = '.alert-primary';

    public getUrl(url: string) {
        cy.url().should('eq', url);
    }

    public setUserName(text: string) {
        cy.get(this.usernameInput).type(text)
    }

    public setFirstName(text: string) {
        cy.get(this.firstNameInput).type(text)
    }

    public setLastName(text: string) {
        cy.get(this.lastNameInput).type(text)
    }
      
    public setEmailAddress(text: string) {
        cy.get(this.emailAddressInput).type(text)
    }

    public setPassword(text: string) {
        cy.get(this.passwordInput).type(text)
    }

    public confirmPassword(text: string) {
        cy.get(this.confirmPasswordInput).type(text)
    }

    public clickSubmitButton(){
        cy.get(this.submitButton).click();
    }

    public checkRegisterSuccessAlert (text: string) {
        cy.get(this.registerSuccessAlert).should('contain', text);
      }


}