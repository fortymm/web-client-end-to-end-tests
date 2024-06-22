import { test, expect } from "@playwright/test";
import { Pages } from "./pages";

test.describe("/ (landing page)", () => {
  test("shows the header", async ({ page }) => {
    const pages = new Pages(page);
    await pages.landingPage.goto();

    await expect(pages.landingPage.title).toBeVisible();
  });
});
