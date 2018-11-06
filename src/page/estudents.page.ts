import {
  ElementArrayFinder,
  ElementFinder,
  $,
  $$,
  browser,
  ExpectedConditions,
  by } from 'protractor';

export class EstudentsPage{
  public get pageName(): ElementFinder {
    return $('hi > span');
  }
  private get leadsList(): ElementArrayFinder {
    return $$('.table tbody tr');
  }
  public findingSpecificLeads(name: string): ElementArrayFinder {
    return this.leadsList.filter((lead) => {
      return lead.$$('.span')
        .getText().then((attribute) => {
          return attribute === name;
        });
    });
  }
  public changingAsignee(name, asignee): Promise<void> {
    return this.findingSpecificLeads(name).forEach(async (element) => {
      await element.$('.fa-pencil').click();
      await browser.wait(ExpectedConditions.presenceOf($('#sale-seller')));
      return this.findingSpecificLeads(name)
        .element(by.cssContainingText('option', `${asignee}`)).click();
    });

  }
}
