import { Page } from "@playwright/test";
import { LandingPage } from "./pages/LandingPage";
import { Layout } from "./pages/Layout";

export class Pages {
    public readonly landingPage: LandingPage;
    public readonly layout: Layout;

    constructor(private readonly page: Page) {
        this.landingPage = new LandingPage(page);
        this.layout = new Layout(page);
    }
}