---
title: Config
order: 200
description: "config"
published: true
---

# Config

scully-image uses an optional custom config file for now. This could change in the future.

It is called `scully-image.config.json` and you put it in the root of your project next to your scully config.

## Defaults

Without a created config file, the default values look like this:

```
{
  "assetsPath": "./assets",
  "defaultPreloaderOptions": {
    "blur": {},
    "traced": {},
    "primitives": {}
  }
}
```

### assetsPath

We need a path to your assets file relative to the built project path. This is so that we can output the resized image assets.

### defaultPreloaderOptions

These options correspond to the `pluginOptions` you can pass to the Angular components.

These act as global defaults that you can override individually at the component Input level.

Please see the corresponding [component sections](/docs/components) for available keys and their value types.
