module.exports = {
  rules: {
    "id-length": "off",
    "new-cap": "off",
    "multiline-comment-style": "off",
    "max-lines-per-function": "off",
    "max-statements": ["warn", 24, { ignoreTopLevelFunctions: true }],
    "unicorn/prefer-dom-node-text-content": "warn",
    "@typescript-eslint/restrict-template-expressions": "off",
    "eslint-comments/require-description": "off",
  },
}
