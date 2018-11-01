import { ElementFinder, element, by, promise, ElementArrayFinder,
   $$, ExpectedConditions, browser, $ } from 'protractor';

export class LeadWidget{
  private get leadsOption(): ElementFinder {
    return element(by.cssContainingText('a', 'Leads'));
  }
  public goToLeadsPage(): promise.Promise<void> {
    return this.leadsOption.click();
  }
  private get leadsList(): ElementArrayFinder {
    return $$('.table tbody');
  }
  public findingSpecificLeads(name: string): ElementArrayFinder {
    return this.leadsList.filter((product) => {
      return product.$$('.span')
        .getText().then((attribute) => {
          return attribute === name;
        });
    });
  }
  private changingAsignee(): promise.Promise<void> {
    return this.findingSpecificLeads(name).$('.fa-pencil').click();
  }
  public async selectNewAsignee(): promise.Promise<void> {
    await browser.wait(ExpectedConditions.presenceOf($('#sale-seller')));
    return 
  }
}
