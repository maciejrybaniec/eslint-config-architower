module.exports = {
  env: {
    node: true,
  },

  extends: [
    resolve("./ecma.js"),
    resolve("./typescript.js"),
    "plugin:n/recommended",
    "plugin:security/recommended",
    resolve("./prettier.js"),
  ],

  rules: {
    'unicorn/prefer-string-replace-all': 'error',
  }
}
