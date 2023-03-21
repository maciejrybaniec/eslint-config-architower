# ArchiTower ESLint Config

Our shareable config & rules for ESLint

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![CI: Test][github-actions-src]][github-actions-href]

## How to use it?

1.Add package & necessary dependencies (such as `ESlint` & `Prettier`) to your repository, for eg. with `pnpm` or your package manager of choice:

```bash
pnpm i -D eslint prettier eslint-config-architower
```

2.Extend your local ESLint config file with ArchiTower config:

```js
module.exports = {
  extends: [
    "architower"
  ],
}
```

## Development

At first make a copy of this repository and install all dependencies using `pnpm`:

```bash
git clone git@github.com:ArchiTower/eslint-config-architower.git
cd eslint-config-architower
pnpm i
```

## License

[MIT](./LICENSE.md)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/eslint-config-architower?style=flat-square
[npm-version-href]: https://npmjs.com/package/eslint-config-architower

[npm-downloads-src]: https://img.shields.io/npm/dm/eslint-config-architower?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/eslint-config-architower

[github-actions-src]: https://img.shields.io/github/actions/workflow/status/ArchiTower/eslint-config-architower/release.yml?branch=main&style=flat-square
[github-actions-href]: https://github.com/ArchiTower/eslint-config-architower/actions/workflows/release.yml
