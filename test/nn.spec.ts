import { browser } from 'protractor';
import { SignInStepPage } from '../src/page/signin';
import { HomePage } from '../src/page/homepage.page';

describe('going to SU B&L page', () => {

  beforeEach(async () => {
    await browser.get('https://studyunion.bookandlearn.com/public/#/');
  });

  describe('login in', () => {
    const signIn: SignInStepPage = new SignInStepPage();
    const newLead: HomePage = new HomePage();

    beforeEach(async () => {
      await browser.waitForAngular();
      await signIn.fillForm();
    });

    it('then user should be loged', async () => {
      expect(signIn.getUserName())
        .toBe('Mateo Escobar M');
    });

    describe('checking for new LeadWidgets', () => {
      beforeEach(async () => {
        await newLead.goToLeadsPage();
        // await console.log(newLead.findingSpecificLeads('Lead Widget'));
      });

      it('then lead should be asigned', () => {
        expect(signIn.getUserName())
        .toBe('Mateo Escobar');
      });
    });
  });
});
