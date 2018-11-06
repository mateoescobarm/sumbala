import { browser } from 'protractor';
import { SignInStepPage } from '../src/page/signin';
import { HomePage } from '../src/page/homepage.page';
import { EstudentsPage } from '../src/page/estudents.page';

describe('going to SU B&L page', () => {

  beforeEach(async () => {
    await browser.get('https://studyunion.bookandlearn.com/public/#/');
  });

  describe('login in', () => {
    const signIn: SignInStepPage = new SignInStepPage();
    const home: HomePage = new HomePage();
    const estudents: EstudentsPage = new EstudentsPage();

    beforeEach(async () => {
      await browser.waitForAngular();
      await signIn.fillForm();
    });

    it('then user should be loged', async () => {
      expect(signIn.getUserName())
        .toBe('Mateo Escobar M');
    });

    describe('going to estudents page', () => {
      beforeEach(async () => {
        await home.goToLeadsPage();
      });

      it('then we should have the students page', () => {
        expect(estudents.pageName.getText())
          .toBe('Buscar');
      });

      describe('for each new lead we asign a user', () => {
        beforeEach(async () => {
          await estudents.changingAsignee('Lead Widget', 'Mateo Escobar');
        });

        it(' then ther should not be any Lead Widgets', () => {
          expect(estudents.findingSpecificLeads('Lead Widget'))
            .toBe(null);
        });
      });
    });
  });
});
