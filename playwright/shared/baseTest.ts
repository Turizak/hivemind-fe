import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

interface LoginFormOptions {
  email: string;
  password: string;
}

const test = base.extend<{
  loginPage: LoginPage;
  account: LoginFormOptions;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  account: async ({}, use) => {
    const formData: LoginFormOptions = {
      email: process.env.PLAYWRIGHT_USER as string,
      password: process.env.PLAYWRIGHT_PASS as string,
    };
    await use({ ...formData });
  },
});

export {
  expect,
  type Page,
  type Locator,
  type FrameLocator,
} from "@playwright/test";
export { test, type LoginFormOptions };
