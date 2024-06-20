import { test, expect } from "@playwright/test";

test.describe("/ (landing page)", () => {
  test("shows the header", async ({ page }) => {
    await page.goto("http://localhost:5173/");
    await expect(
      page.getByRole("heading", { name: "Vite + React" })
    ).toBeVisible();
  });
});
