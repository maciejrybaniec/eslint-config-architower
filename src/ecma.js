module.exports = {
  env: {
    browser: true,
    es2022: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:compat/recommended",
    "plugin:unicorn/recommended",
    "plugin:no-unsanitized/DOM",
    "plugin:promise/recommended",
    "plugin:sonarjs/recommended",
    resolve("./prettier.js"),
  ],

  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: [
    "unicorn",
    "compat",
    "no-secrets",
    "promise",
    "sonarjs",
    "@microsoft/sdl",
    "write-good-comments",
  ],

  root: true,

  rules: {
    "no-secrets/no-secrets": "error",
    "no-caller": "error",
    "no-delete-var": "error",
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-new-func": "error",
    "@microsoft/sdl/no-cookies": "error",
    "@microsoft/sdl/no-document-domain": "error",
    "@microsoft/sdl/no-document-write": "error",
    "@microsoft/sdl/no-html-method": "error",
    "@microsoft/sdl/no-inner-html": "error",
    "@microsoft/sdl/no-insecure-url": "error",
    "@microsoft/sdl/no-msapp-exec-unsafe": "error",
    "@microsoft/sdl/no-postmessage-star-origin": "error",
    "@microsoft/sdl/no-winjs-html-unsafe": "error",
    "write-good-comments/write-good-comments": "warn",
    // TODO: Find out why adjunct turn it off
    // unicorn/no-array-for-each
    // unicorn/no-fn-reference-in-iterator
    // unicorn/no-array-for-each
    // unicorn/no-reduce
    // unicorn/no-null
    // unicorn/prefer-number-properties
    // unicorn/prefer-optional-catch-binding
    // unicorn/prevent-abbreviations
  },
}
