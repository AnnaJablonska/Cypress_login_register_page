import HomePage from '../pages/homePage';
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';

describe('Login test flow:', () => {
  
  const homePage = new HomePage();  
  const loginPage = new LoginPage();
  const registerPage = new RegisterPage();

  it('We are able to login as an administrator', () => {
    homePage.navigateToHomePage(Cypress.env("homePageUrl"));
    homePage.clickLoginButton();
    loginPage.setUsername('administrator');
    loginPage.setPassword('xisE4P5DsjT4Hq');
    loginPage.clickSubmitButton();

    loginPage.checkLoginSuccessAlert('You are already logged in.');
    })

    it('We are able to log out', () => {
      homePage.clickLogOutButton();
      loginPage.checkLoginSuccessAlert('You are now logged out.');
    })  
  })