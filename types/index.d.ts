import { TemplateResult, LitElement } from "lit";
import { MatchResult } from "path-to-regexp";
interface ILitRoutElement extends LitElement {
    route: string;
    routeAsParent: string;
    visible: boolean;
    result: MatchResult | null;
}
interface IRoutedLitElement<T extends object> extends LitElement {
    params: T | null;
    renderTemplate(): TemplateResult;
}
export class RoutedLitElement<T extends object> extends LitElement implements IRoutedLitElement<T> {
    get params(): T | null;
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
    get routeAsParent(): string;
    route: string;
    createRenderRoot(): this;
    connectedCallback(): void;
    attributeChangedCallback(name: string, _old: string, _new: string): void;
    disconnectedCallback(): void;
    shouldUpdate(): boolean;
    willUpdate(): void;
    updated(): void;
}
