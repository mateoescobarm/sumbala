import { ElementFinder, $, element, by } from "protractor";

export class MainPage {
  private get plusSign(): ElementFinder {
    return $('global-link');
  }
  private get newLeadOption(): ElementFinder {
    return element(by.cssContainingText('div', 'Crear un nuevo estudiante'));
  }
  public async goToAddNewLeadPage(): Promise<void> {
    await this.plusSign.click();
    return this.newLeadOption.click();
  }
}
