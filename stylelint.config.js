module.exports = {
    "processors": ["stylelint-processor-styled-components"],
    "extends": [
        "stylelint-config-recommended",
        "stylelint-config-styled-components",
        "stylelint-config-prettier"
    ],
    "rules": {
        "font-family-no-missing-generic-family-keyword": null,
        "no-extra-semicolons": null,
        "no-descending-specificity": null
    }
}