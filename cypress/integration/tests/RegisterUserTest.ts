import HomePage from '../pages/homePage';
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';

describe('Register USer test flow:', () => {
  const homePage = new HomePage();  
  const loginPage = new LoginPage();
  const registerPage = new RegisterPage();

it('We are able to register a new user', () => {
    homePage.navigateToHomePage(Cypress.env("homePageUrl"));
    homePage.clickLoginButton();
    loginPage.clickRegisterHyperlink();
    registerPage.setUserName('userName test');
    registerPage.setFirstName('firstName test');
    registerPage.setLastName('lastName test');
    registerPage.setEmailAddress('email@test.com');
    registerPage.setPassword('passwordTest');
    registerPage.confirmPassword('passwordTest');
    registerPage.clickSubmitButton();

    registerPage.checkRegisterSuccessAlert('User created. You can now login.');
})
})