# ArchiTower ESLint Config

Our shareable config & rules for ESLint

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![CI: Test][github-actions-src]][github-actions-href]

## How to use it?

1.Add package & necessary dependencies (such as `ESlint` & `Prettier`) to your
repository, for eg. with `pnpm` or your package manager of choice:

```bash
pnpm i -D eslint prettier eslint-config-architower
```

2.Extend your local ESLint config file with ArchiTower config:

```js
module.exports = {
  extends: ["architower"],
}
```

### Without Prettier

When, you don't want to use prettier, you can easily make a little different config:

```js
module.exports = {
  extends: [
    "architower/ecma",
    "architower/typescript",
    "architower/html",
    "architower/json",
    "architower/yaml",
    "architower/markdown",
  ],
}
```

### Using with Node.js

When you want to use our config for Node.js based solution, please change config extension to:

```js
module.exports = {
  extends: ["architower/node"],
}
```

Then, define node engine version in `package.json`:

```json
{
  "engines": {
    "node": ">=14.0.0"
  },
}
```

### Using with VSCode

To get vscode-eslint support, we need to add the following in vscode settings
(`.vscode/settings.json`).

```json
{
  "eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "json",
    "jsonc",
    "json5",
    "yaml",
    "html"
  ]
}
```

## Used rulesets & plugins

- [eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
- [unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [compat](https://github.com/amilajack/eslint-plugin-compat)
- [jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc)
- [yml](https://github.com/ota-meshi/eslint-plugin-yml)
- [no-secrets](https://github.com/nickdeis/eslint-plugin-no-secrets)
- [html-eslint](https://yeonjuan.github.io/html-eslint/docs)
- [html](https://github.com/BenoitZugmeyer/eslint-plugin-html)
- [markdown](https://github.com/eslint/eslint-plugin-markdown)
- [prettier](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration)
- [no-unsanitized](https://github.com/mozilla/eslint-plugin-no-unsanitized)
- [promise](https://github.com/eslint-community/eslint-plugin-promise)
- [sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
- [n](https://github.com/eslint-community/eslint-plugin-n)
- [security](https://github.com/eslint-community/eslint-plugin-security)
- [etc](https://github.com/cartant/eslint-plugin-etc)
- [@microsoft/sdl](https://github.com/microsoft/eslint-plugin-sdl)
- [write-good-comments](https://github.com/kantord/eslint-plugin-write-good-comments)
- [vitest](https://github.com/veritem/eslint-plugin-vitest)
- [playwright](https://github.com/playwright-community/eslint-plugin-playwright)

## Development

At first make a copy of this repository and install all dependencies using
`pnpm`:

```bash
git clone git@github.com:ArchiTower/eslint-config-architower.git
cd eslint-config-architower
pnpm i
```

Then, create a branch, make your changes in code, commit it following
[gitmoji](https://gitmoji.dev/) &
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) styles.

After that, push it and then create a
[Pull Request](https://github.com/ArchiTower/eslint-config-architower/pulls)
with target to `develop` branch.

### Branching

In our repositories we're following the simple solution:

- `main` branch represents stable releases of the libraries or production
  environment of released applications
- `develop` branch is for release candidates, betas etc. Here we developing
  solution - library or app.

## License

[MIT](./LICENSE.md)

<!-- Badges -->

[npm-version-src]:
  https://img.shields.io/npm/v/eslint-config-architower?style=flat-square
[npm-version-href]: https://npmjs.com/package/eslint-config-architower
[npm-downloads-src]:
  https://img.shields.io/npm/dm/eslint-config-architower?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/eslint-config-architower
[github-actions-src]:
  https://img.shields.io/github/actions/workflow/status/ArchiTower/eslint-config-architower/release.yml?branch=main&style=flat-square
[github-actions-href]:
  https://github.com/ArchiTower/eslint-config-architower/actions/workflows/release.yml
