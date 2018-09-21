import { $, ElementFinder, promise, browser, ExpectedConditions } from 'protractor';

export class SignInStepPage {
  private get userNameField(): ElementFinder {
    return $('[placeholder="Username"]');
  }
  private get passwordField(): ElementFinder {
    return $('[placeholder="Password"]');
  }
  private get logInButton(): ElementFinder {
    return $('button');
  }
  private async logInForm() {
    await this.userNameField.sendKeys('comercial2.medellin@su.co');
    await this.passwordField.sendKeys('mateo3112');
    await browser.wait(ExpectedConditions.visibilityOf(this.logInButton));
    // await browser.sleep(3000);
    return this.logInButton.click();
  }
  public async fillForm(): Promise<void> {
    await browser.wait(ExpectedConditions.presenceOf($('[name="$form"]')));
    return this.logInForm();
  }
  private get logedUserName():ElementFinder {
    return $('.ng-binding');
  }
  public getUserName(): promise.Promise<string> {
    return this.logedUserName.getText();
  }
}
