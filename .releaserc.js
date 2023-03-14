const { createConfig } = require('semantic-release-config-gitmoji/lib/createConfig');

const config = createConfig({
  monorepo: false
});

module.exports = config;

module.exports = {
  ...config,
  branches: [
    "main",
    { name: "develop", channel: "next", prerelease: "rc" },
  ],
  plugins: [
    ...config.plugins,
    ["@semantic-release/git", {
      "message": ":rocket: build(release): ${nextRelease.version} [skip ci]"
    }]
  ]
};
