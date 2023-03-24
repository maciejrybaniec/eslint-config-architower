module.exports = {
  overrides: [
    {
      files: ["**/*.test.js"],
      rules: {
        "unicorn/no-unsafe-regex": "off",
        "max-lines": "off",
        "max-lines-per-function": "off",
      },
    },
  ],
}
