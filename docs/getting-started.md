---
title: Getting Started
order: 100
description: "Getting Started"
published: true
---

# Getting Started

Using scully-image was designed to be as easy as possible. The goal is to let you get on and deal with the most important aspects of your app or site, not resizing or manipulating images.

## Prerequisites

You will need an existing Angular+Scully site set up.

If not, head on over to the Scully documentation to get started: [https://scully.io/docs/learn/getting-started/overview](https://scully.io/docs/learn/getting-started/overview)

## Installation

Add to dependencies

```
npm install --save scully-image
```

Make sure you have the following dependencies already:

```json
"peerDependencies": {
  "@angular/common": "^13.0.1",
  "@angular/core": "^13.0.1",
  "@scullyio/scully": "latest",
  "@scullyio/ng-lib": "latest",
  "tslib": "^1.10.0"
}
```

Import and register plugin in `scully.<YOUR PROJECT NAME>.config.js`

```js
const { registerPlugin } = require("@scullyio/scully");
const { registerScullyImage } = require("scully-image/plugin");
registerScullyImage(registerPlugin);

exports.config = {
  // ...,

  // Required if using primitives as a placeholder
  puppeteerLaunchOptions: {
    timeout: 0,
  },
  // Add to defaultPostRenderers
  defaultPostRenderers: ["scullyImage"],

  // ...
};
```

Import `ScullyImageModule` into your relevant modules.

```js

import { ScullyImageModule } from 'scully-image';

@NgModule({
  .// ..
  imports: [
    // ... other modules,
    ScullyImageModule
  ]
  // ...
})
```

## Usage (Components)

Add component to a template

```html
<scully-blur-image
  [pixelHeight]="330"
  [pixelWidth]="440"
  [pluginOptions]="{ width: 42 }"
  src="http://www.fillmurray.com/g/800/600"
></scully-blur-image>
```

## Usage (Markdown)

If you would like scully-image to handle you images in Markdown, you will need to configure an extra function in your scully config file. The default props will be used for images using markdown syntax.

```javascript
const {
  registerScullyImage,
  registerScullyImageMarkdown,
} = require("scully-image/plugin");

registerScullyImageMarkdown(registerPlugin, {
  defaultImageProps: {},
});
```

```markdown
## Lorem Ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

![Your alt text](/assets/your-image.jpg)
```

You can also use the syntax for components in your markdown if you would like to customize an individual image. You will need to prefix all Inputs to the component with `data-` and dasherize them instead of camelCase. Plugin Options for will need to be JSON stringified.

```html
<scully-blur-image
  data-type="blur"
  data-markdown="true"
  data-plugin-options='{ "width": 42 }'
  src="/assets/your-image.jpg"
></scully-blur-image>
```


Run the Angular build command followed by the Scully build command

```
npm run ng build
npm run scully
```
