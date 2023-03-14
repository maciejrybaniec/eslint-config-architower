module.exports = {
  branches: [
    "main",
    { name: "next", channel: "next", prerelease: "rc" },
    { name: "develop", prerelease: true },
  ],
  extends: ["semantic-release-config-gitmoji"],
};
