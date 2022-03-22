module.exports = {
    plugins: ["stylelint-scss"],
    extends: ["stylelint-config-standard", "stylelint-config-standard-scss", "stylelint-config-prettier"],
    ignoreFiles: ["/dist/*"],
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
    }
};