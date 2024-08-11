import exp from "constants";
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
      });
    }
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
        await expect(page.getByText("Login Failed")).toBeVisible();
      });
    }
  );

  test(
    "Verify email field cannot be empty",
    { tag: ["@smoke", "@regression"] },
    async ({ loginPage, page }) => {
      const options: LoginFormOptions = {
        email: "",
        password: "BadPassword1234!@",
      };
      await test.step("Attempt to login with invalid credentials", async () => {
        await loginPage.login(options, true);
        await expect(
          page.getByText(
            "Email error: email cannot be blank, invalid email address"
          )
        ).toBeVisible();
        expect(loginPage.btnLogin).toBeDisabled();
      });
    }
  );

  test(
    "Verify email field cannot be invalid",
    { tag: ["@smoke", "@regression"] },
    async ({ loginPage, page }) => {
      const options: LoginFormOptions = {
        email: "thebomb",
        password: "BadPassword1234!@",
      };
      await test.step("Attempt to login with invalid credentials", async () => {
        await loginPage.login(options, true);
        await expect(
          page.getByText("Email error: invalid email address")
        ).toBeVisible();
        expect(loginPage.btnLogin).toBeDisabled();
      });
    }
  );

  test(
    "Verify navigation to create account page",
    { tag: ["@smoke", "@regression"] },
    async ({ loginPage, page }) => {
      await test.step("Navigate to create account page", async () => {
        await loginPage.clickCreateAccountButton();
        expect(page.url()).toContain("/createAccount");
      });
    }
  );
});
