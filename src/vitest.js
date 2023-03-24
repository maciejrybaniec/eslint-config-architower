module.exports = {
  extends: ["plugin:vitest/recommended"],

  rules: {
    "unicorn/no-unsafe-regex": "off",
    "max-lines": "off",
    "max-lines-per-function": "off",
    "max-classes-per-file": "off",
    "max-nested-callbacks": ["warn", { max: 6 }],
    "line-comment-position": "warn",
    "multiline-comment-style": "off",
    "max-params": ["error", 5],
    "max-statements": ["warn", 20],
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-argument": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/unbound-method": "warn",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-confusing-void-expression": "warn",
    "@typescript-eslint/no-redundant-type-constituents": "warn",
    "unicorn/no-array-callback-reference": "off",
    "unicorn/consistent-function-scoping": "off",
    "unicorn/no-array-reduce": "warn",
    "vitest/consistent-test-it": "error",
    "vitest/max-expects": ["error", { max: 10 }],
    "vitest/max-nested-describe": ["error", { max: 5 }],
    "vitest/no-alias-methods": "error",
    "vitest/no-conditional-expect": "error",
    "vitest/no-disabled-tests": "warn",
    "vitest/no-done-callback": "error",
    "vitest/no-duplicate-hooks": "error",
    "vitest/no-focused-tests": "error",
    "vitest/no-standalone-expect": "error",
    "vitest/no-test-return-statement": "error",
  },
}
