import { Locator, Page } from "@playwright/test";

export class Layout {
    public readonly toggleNavigationMenuButton: Locator;
    public readonly landingPageLink: Locator;

    constructor(private readonly page: Page) {
        this.landingPageLink = page.getByRole('link', { name: 'FortyMM' });
        this.toggleNavigationMenuButton = page.getByRole('button', { name: 'Toggle navigation menu' });
    }
}