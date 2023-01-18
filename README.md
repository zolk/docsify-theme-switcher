[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# docsify-theme-switcher

A Docsify plugin that adds a dropdown menu for switching between multiple themes.

This plugin will add a specified class name to your Docsify site's `<body>` tag,
which you can then use to make styling changes. The selected theme will be
stored in `localStorage`, so it will persist between page loads.

## Usage

```html
<script>
  window.$docsify = {
    // ... (your existing Docsify config)
    themeSelector: {
      themes: [
        { name: "Light Theme", class: "theme-light" },
        { name: "Dark Theme", class: "theme-dark" },
        { name: "Retro Theme", class: "theme-retro" },
      ],
    },
  };
</script>
<script src="//cdn.jsdelivr.net/npm/docsify-theme-switcher@1/dist/theme-switcher.min.js"></script>
```

Default styles, which you can override or replace with your own:

```html
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/docsify-theme-switcher@1/dist/theme-switcher.min.css"
/>
```

## Options

### themeSelector.themes

- Type: `Array<{ name: String, class: String }>`
- Default: `undefined`

**Required.** An array of themes with a `name` for the select menu and a `class`
which will be added to the document's `<body>` tag upon activation.

### themeSelector.pathRegex

- Type: `RegExp`
- Default: `undefined`

An optional regex for displaying the theme selector only on certain pages. For
example, a value of `/components\/(.+)/` will only show the selector on pages
that contain `/components/` in the path.

## Live Example

You can see this plugin in use as part of **Docsify Breeze** ([Live example](https://docsify-breeze.vercel.app/components/button), [GitHub project](https://github.com/zolk/docsify-breeze)).

## Local Demo

You can test this project locally in a demo Docsify installation.

First, clone this repo:

```
git clone https://github.com/zolk/docsify-theme-switcher.git
```

Then install dependencies (you'll need [Node](https://nodejs.org/en/download/package-manager/) installed):

```
npm install
```

Finally, boot the local dev server:

```
npm start
```

By default, the server will boot at http://localhost:3000.

Note that you won't see any visual changes in this demo when changing the theme,
but the associated theme class name will be added to the `<body>` tag.

## License

This project was created by [Kevin Zolkiewicz](http://zolk.com) and is licensed
under an [MIT License](./LICENSE).

<br><br><br>

<p align="center"><a href="https://8thlight.com"><img src="./8l.png" height="75" alt="" /></a><br><i>This project is supported by <a href="https://8thlight.com">8th Light</a>.</i></p>
