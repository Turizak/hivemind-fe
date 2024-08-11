import { test, expect, LoginFormOptions } from "../shared/baseTest";

const testHive = "Gaming";

test.describe("Hivemind: Hive Page Tests", { tag: ["@login"] }, () => {
  test.beforeEach(async ({ loginPage, account, page }) => {
    await loginPage.goto();
    await loginPage.login(account);
    await expect(page.getByText("Select a Hive")).toBeVisible();
  });

  test(
    "Verify navigation to specific Hive page",
    { tag: ["@smoke", "@regression"] },
    async ({ hivePage, page }) => {
      await test.step("Navigate to hive page", async () => {
        await hivePage.clickAndNavigateToHive(testHive);
        await expect(hivePage.containerHeader).toBeVisible();
        await expect(hivePage.containerHeader).toHaveText(testHive);
        expect(page.url()).toContain("/hive/uuid/");
      });
    }
  );
});
