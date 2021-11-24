# lit-rout

> **Please note:** This is a draft just yet - will only support one matchhing route at present moment

Conditional but declarative rendering based on the Location.

## Concept

- 1. `lit-rout` component
- 1. A custom Component extended from `lit-rout/RoutedLitComponent`

Check out [https://www.npmjs.com/package/path-to-regexp#match](https://www.npmjs.com/package/path-to-regexp#match) about how to use route matching

## Usage

HTML Template

```html
<my-app>
  <lit-rout route="/">
    <my-dashboard></my-dashboard><!-- extends RoutedLitElement -->
  </lit-rout>
  <lit-rout route="/page">
    <my-page></my-page><!-- extends RoutedLitElement -->
    <h3>I'm always rendered</h3><!-- not a RoutedLitElement so updates for this are ignored -->
  </lit-rout>
</my-app>
```

Custom `RoutedLitElement`

```ts
import { RoutedLitElement } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('my-dashboard')
export class MyDashboard extends RoutedLitElement {
  renderTemplate() {
    return html`<h2>Dashboard</h2`;
  }
}

@customElement('my-page')
export class MyPage extends RoutedLitElement {
  renderTemplate() {
    return html`<h2>Page</h2>`;
  }
}
```

## About the components/API

Quick guide to the basic building blocks

### `lit-rout`

```html
<lit-rout route="/path/to/success"><!-- content --></lit-rout>
```

A custom component registered by the library, with one attribute that should match (or not) the current URL.

This component will set the `visible` property on its child Elements. You will have to make sure that the child elements inherit from `RoutedLitElement`, otherwise they will be rendered at all times - match/update will ignore non-`RoutedLitElement`s.

Can have multiple `RoutedLitElement`s if needed.

### `RoutedLitElement`

Just like a standard `LitElement`, expect you have to implement the `renderTemplate` method to return the HTML template.

```ts
import { getRouteParams } from 'lit-rout';

@customElement('routed-layout')
export class MyPage extends RoutedLitElement {
  renderTemplate() {
    const params = getRouteParams(); // retrieve parameters from the URL
    return html`<h2>A Custom Layout</h2`;
  }
}
```

Please bear in mind that `RoutedLitElement`s are always rendered, its their children that are de/attached (dis/connected) from the DOM so any lifecycle related logic should go into those components.

### Extra

In the future, when it's available, it would be awesome to use the [URLPattern API](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API)
