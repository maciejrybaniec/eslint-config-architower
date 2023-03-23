module.exports = {
  plugins: ["@typescript-eslint"],

  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:etc/recommended",
      ],
      files: ["**.ts", "**.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
      rules: {
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
        "no-commented-out-code": "warn",
        "no-const-enum": "error",
        "no-t": "error",
        "throw-error": "error",
        "underscore-internal": "error",
      },
    },
  ],
}
