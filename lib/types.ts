import { TemplateResult, LitElement } from 'lit';
import { MatchResult } from 'path-to-regexp';

export interface ILitRoutElement extends LitElement {
  route: string;
  routeAsParent: string;
  visible: boolean;
  result: MatchResult | null;
}

export interface IRoutedLitElement<T extends object> extends LitElement {
  params: T | null;
  renderTemplate(): TemplateResult;
}
