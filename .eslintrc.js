module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  settings: {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
                                         // default to "createReactClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "detect", // React version. "detect" automatically picks the version you have installed.
                           // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                           // default to latest and warns if missing
                           // It will default to "detect" in the future
      "flowVersion": "0.128" // Flow version
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:flowtype/recommended'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  plugins: ['react', 'flowtype'],
  rules: {
    //More rules in: http://eslint.org/docs/rules/
    'comma-dangle': 0, // standard: 2 // too many errors to fix now
    'jsx-quotes': 1, // standard: [2, "prefer-single"], // too many errors to fix
    'no-cond-assign': 2,
    'no-console': 2,
    'no-constant-condition': 0, // standard: 2 //  to be changed in the near future
    'no-debugger': 2,
    //'no-extra-parens': 2,
    'no-useless-escape': 0,
    'no-case-declarations': 0,
    'no-extra-boolean-cast': 0, // standard: 2 //  to be changed in the near future
    'no-extra-semi': 2,
    'no-fallthrough': 0, // standard: 2 //  to be changed in the near future
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-undef': 2,
    'no-unreachable': 2,
    'no-unused-vars': [
      2,
      {
        args: 'after-used',
      },
    ],
    'no-use-before-define': 1,

    //React JSX rules
    'react/jsx-closing-bracket-location': 0, // era 1,
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-handler-names': 0,
    //'react/jsx-indent-props': 1,
    'react/jsx-indent': [1, 2],
    'react/jsx-key': 1,
    //'react/jsx-max-props-per-line': 1,
    'react/jsx-no-bind': [
      2,
      {
        allowArrowFunctions: true,
        allowBind: false,
        ignoreRefs: true,
      },
    ],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 1,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    //'react/jsx-boolean-value': 2, // too many errors to fix

    //React rules
    'react/no-danger': 1,
    'react/no-deprecated': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 1,
    'react/no-is-mounted': 1,
    'react/no-multi-comp': [
      1,
      {
        ignoreStateless: true,
      },
    ],
    //'react/no-set-state': 1,

    'react/display-name': 0,
    'react/no-string-refs': 1,
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 0,
    'react/sort-comp': 1,
    'react/jsx-wrap-multilines': 1,
    'flowtype/space-after-type-colon': [2, 'always', { allowLineBreak: true }],
  },
  globals: {
    test: false,
    expect: false,
    jest: false,
    describe: false,
    it: false,
    __COUNTRY__: false,
    COUNTRY: false,
    __IS_CONTACT_CENTER__: false,
    __DEVELOPMENT__: false,
    ENVIRONMENT: false,
    MIDDLEWARE_BASE_HOST: false,
    MIDDLEWARE_CMS_BASE_HOST: false,
    MIDDLEWARE_CMS_API_BASE_HOST: false,
    MIDDLEWARE_CUSTOMER_BASE_HOST: false,
    MIDDLEWARE_MISC_BASE_HOST: false,
    MIDDLEWARE_GLOBAL_POSITION_BASE_HOST: false,
    MIDDLEWARE_PAYMENTS_BASE_HOST: false,
    MIDDLEWARE_ACCOUNTS_BASE_HOST: false,
    MIDDLEWARE_AUTH_BASE_HOST: false,
    MIDDLEWARE_AUTH_SERVICE_HOST: false,
    MIDDLEWARE_LOCALIZATION_BASE_HOST: false,
    MIDDLEWARE_USER_PREFERENCE_BASE_HOST: false,
    MIDDLEWARE_GDPR_BASE_HOST: false,
    MIDDLEWARE_SECURITY_BASE_HOST: false,
    MIDDLEWARE_ATM_BASE_HOST: false,
    MIDDLEWARE_DEPOSITS_BASE_HOST: false,
    MIDDLEWARE_DATABANK_BASE_HOST: false,
    MIDDLEWARE_CARDS_BASE_HOST: false,
    MIDDLEWARE_SERVICES_BASE_HOST: false,
    MIDDLEWARE_CARDS_CREDIT_BASE_HOST: false,
    MIDDLEWARE_DOCUMENT_MANAGER_BASE_HOST: false,
    MIDDLEWARE_CARDS_CONTRACT_BASE_HOST: false,
    MIDDLEWARE_TERMS_AND_CONDITIONS_BASE_HOST: false,
    MIDDLEWARE_DEVICES_BASE_HOST: false,
    MIDDLEWARE_FORMS_BASE_HOST: false,
    MIDDLEWARE_CATEGORY_BASE_HOST: false,
    MIDDLEWARE_TRANSLATIONS_BASE_HOST: false,
    MIDDLEWARE_LOANS_BASE_HOST: false,
    MIDDLEWARE_WEALTH_BASE_HOST: false,
    MIDDLEWARE_CURRENCY_BASE_HOST: false,
    MIDDLEWARE_DEBIN_BASE_HOST: false,
    MIDDLEWARE_BENEFICIARY_BASE_HOST: false,
    MIDDLEWARE_INSTRUMENTS_BASE_HOST: false,
    MIDDLEWARE_COMPLIANCE_BASE_HOST: false,
    MIDDLEWARE_REFINITIV_BASE_HOST: false,
  },
};
