module.exports = {
  plugins: ["@typescript-eslint"],

  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:etc/recommended",
      ],
      files: ["**.ts", "**.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
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
        "etc/no-commented-out-code": "warn",
        "etc/no-const-enum": "error",
        "etc/no-t": "error",
        "etc/throw-error": "error",
        "etc/underscore-internal": "error",
      },
    },
  ],
}
