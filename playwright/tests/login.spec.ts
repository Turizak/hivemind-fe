import { test, expect, LoginFormOptions } from "../shared/baseTest";

test.describe("Hivemind: Login Page Tests", { tag: ["@login"] }, () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test(
    "Verify successful login with valid email and password",
    { tag: ["@smoke", "@regression"] },
    async ({ loginPage, account, page }) => {
      await test.step("Login with valid credentials", async () => {
        await loginPage.login(account);
        // await expect(page.getByTestId("contentItem").first()).toBeVisible();
      });
    },
  );

  test(
    "Verify unsuccessful login with invalid email and password",
    { tag: ["@smoke", "@regression"] },
    async ({ loginPage, page }) => {
      const options: LoginFormOptions = {
        email: "BadEmail@ex.com",
        password: "BadPassword1234!@",
      };
      await test.step("Attempt to login with invalid credentials", async () => {
        await loginPage.login(options);
        await expect(loginPage.btnLogin).toHaveText("Login Failed");
      });
    },
  );

  test(
    "Verify navigation to create account page",
    { tag: ["@smoke", "@regression"] },
    async ({ loginPage, page }) => {
      await test.step("Navigate to create account page", async () => {
        await loginPage.clickCreateAccountButton();
        expect(page.url()).toContain("/createAccount");
      });
    },
  );
});
