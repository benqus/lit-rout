# lit-rout

> **Please note:** still a draft

Declarative, conditional rendering based on the Location for [Lit](https://lit.dev/) applications.

## Parts

1. A `lit-rout` custom component registered by the library
1. A custom component extended from `lit-rout/RoutedLitComponent` registered by the application

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
  <lit-rout route="/page/:id">
    <my-page-with-route-params></my-page-with-route-params><!-- extends RoutedLitElement -->
  </lit-rout>
</my-app>
```

Custom `RoutedLitElement`

```ts
import { customElement } from 'lit/decorators';
import { RoutedLitElement } from 'lit-rout';

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

@customElement('my-page-with-route-params')
export class MyPage extends RoutedLitElement {
  renderTemplate() {
    return html`<h2>Page ${this.params.id}</h2>`;
  }
}
```

## About the components/API

Quick guide to the basic building blocks

### `lit-rout` Custom Component

```html
<lit-rout route="/path/to/success"><!-- content --></lit-rout>
```

A custom component registered by the library, with one attribute that should match (or not) the current URL.

This component will set the `visible` property on its child Elements. You will have to make sure that the child elements inherit from `RoutedLitElement`, otherwise they will be rendered at all times - match/update will ignore non-`RoutedLitElement`s.

Can have multiple `RoutedLitElement`s if needed.

### `RoutedLitElement` Class

Just like a standard `LitElement`, except (instead of the `render` method) you have to **implement the `renderTemplate` method** to return the HTML template.

```ts
@customElement('routed-layout')
export class MyPage extends RoutedLitElement {
  renderTemplate() {
    const params = this.params // access the matched parameters from the URL - within the container lit-rout element !!!
    return html`<h2>A Custom Layout</h2`;
  }
}
```

Please bear in mind that `RoutedLitElement`s are always rendered, its their children that are de/attached (dis/connected) from the DOM so any lifecycle related logic should go into those components.

### Extra

Parcel-TypeScript related [issue](https://github.com/parcel-bundler/parcel/issues/7325) that locks version to `typescript@4.3.5` for now.

In the future, when it's available, it would be awesome to use the [URLPattern API](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API)
