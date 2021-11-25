import { TemplateResult, LitElement } from 'lit';
import { MatchResult } from 'path-to-regexp';

export interface ILitRoutElement extends LitElement {
  route: string;
  visible: boolean;
  result: MatchResult | null;
}

export interface IRoutedLitElement extends LitElement {
  params: MatchResult['params'] | null;
  renderTemplate(): TemplateResult;
}
