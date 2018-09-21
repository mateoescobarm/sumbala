import { browser } from 'protractor';
import { SignInStepPage } from '../src/page/signin';

describe('going to SU B&L page', () => {

  beforeEach(async () => {
    await browser.get('https://studyunion.bookandlearn.com/public/#/');
  });

  describe('login in', () => {
    const signIn: SignInStepPage = new SignInStepPage();

    beforeEach(async () => {
      await signIn.fillForm();
    });

    it('loged user', async () => {
      expect(signIn.getUserName())
        .toBe('Mateo Escobar M');
    });
  });
});
