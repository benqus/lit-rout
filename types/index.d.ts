import { TemplateResult, LitElement } from "lit";
import { MatchResult } from "path-to-regexp";
export interface ILitRoutElement extends LitElement {
    route: string;
    visible: boolean;
    result: MatchResult | null;
}
export interface IRoutedLitElement extends LitElement {
    params: MatchResult['params'] | null;
    renderTemplate(): TemplateResult;
}
export class RoutedLitElement extends LitElement implements IRoutedLitElement {
    get params(): MatchResult['params'] | null;
    /**
     * Don't override this
     */
    render(): TemplateResult;
    /**
     * Override this function to render template when route is visible
     */
    renderTemplate(): TemplateResult;
}
export class LitRoutElement extends LitElement implements ILitRoutElement {
    get result(): MatchResult | null;
    private set result(value);
    get visible(): boolean;
    route: string;
    createRenderRoot(): this;
    connectedCallback(): void;
    attributeChangedCallback(name: string, _old: string, _new: string): void;
    disconnectedCallback(): void;
    shouldUpdate(): boolean;
    willUpdate(): void;
    updated(): void;
}
