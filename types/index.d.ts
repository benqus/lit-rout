import { LitElement, TemplateResult } from "lit";
import { MatchResult } from "path-to-regexp";
export class RoutedLitElement extends LitElement {
    visible: boolean;
    /**
     * Don't override this
     */
    render(): TemplateResult;
    /**
     * Override this function to render template when route is visible
     */
    renderTemplate(): TemplateResult;
}
export function getRoute(): LitRoutElement;
export function getRouteParams(): MatchResult['params'];
export class LitRoutElement extends LitElement {
    route: string;
    get result(): MatchResult | null;
    get visible(): boolean;
    createRenderRoot(): this;
    connectedCallback(): void;
    disconnectedCallback(): void;
    shouldUpdate(): boolean;
    willUpdate(): void;
    updated(): void;
}
