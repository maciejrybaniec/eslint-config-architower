module.exports = {
  extends: [
    require.resolve("./ecma.js"),
    require.resolve("./typescript.js"),
    "plugin:jsonc/recommended-with-jsonc",
    require.resolve("./prettier.js"),
  ],

  plugins: ["@html-eslint", "html", "markdown", "@typescript-eslint"],

  overrides: [
    {
      files: ["*.json", "*.json5", "*.jsonc"],
      parser: "jsonc-eslint-parser",
      excludedFiles: ["package-lock.json"],
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
      excludedFiles: ["pnpm-lock.yaml"],
      parser: "yaml-eslint-parser",
    },
  ],
}
