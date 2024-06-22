import { Locator, Page } from "@playwright/test";

export class LandingPage {
    public readonly url: string = '/';
    public readonly title: Locator;

    constructor(private readonly page: Page) {
        this.title = page.getByRole("heading", { name: "Vite + React" })
    }

    async goto() {
        await this.page.goto(this.url);
    }
}