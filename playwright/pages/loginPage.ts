import { type Locator, type Page } from "@playwright/test";

/**
 * Represents a login page.
 */
export class LoginPage {
  readonly page: Page;

  readonly inputEmail: Locator;
  readonly inputPassword: Locator;

  readonly btnLogin: Locator;
  readonly btnCreateAccount: Locator;

  constructor(page: Page) {
    this.page = page;

    this.inputEmail = page.getByTestId("loginEmail");
    this.inputPassword = page.getByTestId("loginPassword");

    this.btnLogin = page.getByTestId("loginBtn1");
    this.btnCreateAccount = page.getByTestId("loginBtn2");
  }

  async goto() {
    await this.page.goto("/login");
  }

  async clickCreateAccountButton() {
    await this.btnCreateAccount.click();
  }

  async clickLoginButton() {
    await this.btnLogin.click();
  }

  async fillEmail(email: string) {
    await this.inputEmail.fill(email);
  }

  async fillPassword(password: string) {
    await this.inputPassword.fill(password);
  }

  async login(
    opts: { email: string; password: string },
    fail: boolean = false
  ) {
    await this.fillEmail(opts.email);
    await this.fillPassword(opts.password);
    fail ? null : await this.clickLoginButton();
  }
}
