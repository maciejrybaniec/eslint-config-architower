module.exports = {
  extends: [
    resolve("./ecma.js"),
    resolve("./typescript.js"),
    "plugin:jsonc/recommended-with-jsonc",
    resolve("./prettier.js"),
  ],

  plugins: ["@html-eslint", "html", "markdown", "@typescript-eslint"],

  root: true,

  overrides: [
    {
      files: ["*.json", "*.json5", "*.jsonc"],
      parser: "jsonc-eslint-parser",
    },
    {
      extends: ["plugin:@html-eslint/recommended"],
      files: ["*.html"],
      parser: "@html-eslint/parser",
    },
    {
      files: ["**/*.md"],
      processor: "markdown/markdown",
    },
    {
      extends: ["plugin:yml/standard"],
      files: ["*.yml", "*.yaml"],
      parser: "yaml-eslint-parser",
    },
  ],
}
