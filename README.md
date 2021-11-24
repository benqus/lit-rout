# lit-rout

> **Please note:** This is a draft at present moment

Experiment with minimal, declarative Lit routing. This is the beginning.

## Idea, usage

Needed some basic routing functionality on one of my projects:

```html
import { html } from 'lit'; // or 'lit/html' or 'lit-html'

import 'lit-rout';

html`
  <my-app>
    <lit-rout route="/">
      <my-dashboard></my-dashboard>
    </lit-rout>
    <lit-rout route="/(.*)">
      <im-visible>
        <p>All. The. Time!</p>
      </im-visible>
    </lit-rout>
    <lit-rout route="/page-one">
      <my-page-one></my-page-one>
    </lit-rout>
    <lit-rout route="/page-two">
      <my-page-two></my-page-two>
    </lit-rout>
  </my-app>
`;
```

In the future, when it's available, it would be awesome to use the [URLPattern API](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API)
