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

If not, head on over to the Scully documentation to get started: [https://scully.io/docs/getting-started](https://scully.io/docs/getting-started)

## Installation

Add to dependencies

```
npm install --save scully-image
```

Make sure you have the following dependencies already:

```json
"peerDependencies": {
  "@angular/common": "^9.0.1",
  "@angular/core": "^9.0.1",
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

## Usage

Add component to a template

```html
<scully-blur-image
  [pixelHeight]="330"
  [pixelWidth]="440"
  [pluginOptions]="{ width: 42 }"
  src="http://www.fillmurray.com/g/800/600"
></scully-blur-image>
```

Run the Angular build command followed by the Scully build command

```
npm run ng build
npm run scully
```
