module.exports = {
  overrides: [
    {
      files: ["**/*.test.js"],
      rules: {
        "unicorn/no-unsafe-regex": "off",
      },
    },
  ],
}
