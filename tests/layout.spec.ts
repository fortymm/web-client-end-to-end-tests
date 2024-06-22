import { test, expect } from "@playwright/test";
import { Pages } from "./pages";

test.describe('Layout', () => {
    test("allows navigation to other pages from the header", async ({ page }) => {
        const pages = new Pages(page);
        await pages.landingPage.goto();

        await expect(pages.layout.toggleNavigationMenuButton).not.toBeVisible();
        await expect(pages.layout.landingPageLink).toHaveAttribute("href", pages.landingPage.url);
    });

    test("allows navigation to other pages from the navigation menu", async ({ browser }) => {
        const context = await browser.newContext({ viewport: { width: 430, height: 932 } });
        const page = await context.newPage();
        const pages = new Pages(page);
        await pages.landingPage.goto();

        await expect(pages.layout.landingPageLink).not.toBeVisible();
        await pages.layout.toggleNavigationMenuButton.click();
        await expect(pages.layout.landingPageLink).toHaveAttribute("href", pages.landingPage.url);
    });
});