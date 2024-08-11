import { type Locator, type Page } from "@playwright/test";

/**
 * Represents main hive page.
 */
export class HivePage {
  readonly page: Page;

  readonly containerHeader: Locator;

  constructor(page: Page) {
    this.page = page;

    this.containerHeader = page.locator(".text-center");
  }

  async goto() {
    await this.page.goto("/");
  }

  async clickAndNavigateToHive(hiveName: string) {
    await this.page.locator("div").getByText(hiveName).click();
  }
}
