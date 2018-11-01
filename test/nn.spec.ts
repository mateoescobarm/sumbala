import { browser } from 'protractor';
import { SignInStepPage } from '../src/page/signin';
import { LeadWidget } from '../src/page/newleadwidget.page';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

describe('going to SU B&L page', () => {

  beforeEach(async () => {
    await browser.get('https://studyunion.bookandlearn.com/public/#/');
  });

  describe('login in', () => {
    const signIn: SignInStepPage = new SignInStepPage();
    const newLead: LeadWidget = new LeadWidget();

    beforeEach(async () => {
      await signIn.fillForm();
    });

    it('loged user', async () => {
      expect(signIn.getUserName())
        .toBe('Mateo Escobar M');
    });

    describe('checking for new LeadWidgets', () => {
      beforeEach(async () => {
        await newLead.goToLeadsPage();
        await newLead.findingSpecificLeads('Lead Widget');
      });
    });
  });
});
