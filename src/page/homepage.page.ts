import { ElementFinder, element, by, browser, ExpectedConditions } from 'protractor';

export class HomePage{
  private get estudentsOption(): ElementFinder {
    return element(by.className('navbar-center'));
  }
  public async goToLeadsPage(): Promise<void> {
    await browser.wait(ExpectedConditions.presenceOf(this.estudentsOption));
    return this.estudentsOption.click();
  }
}
