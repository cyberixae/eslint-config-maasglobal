'use strict';

module.exports = {
  extends: 'eslint:recommended',
  env: {
    es6: true, // Register ES2015 globals
    node: true,
    jest: true,
  },
  parserOptions: { ecmaVersion: 2018 },
  plugins: ['import'],
  rules: {
    'block-scoped-var': 'error',
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [],
      },
    ],
    'consistent-return': 'error',
    'default-case': ['error', { commentPattern: '^no default$' }],
    'dot-notation': ['error', { allowKeywords: true }],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'func-style': ['error', 'declaration'],
    'getter-return': ['error', { allowImplicit: true }],
    'guard-for-in': 'error',
    'import/export': 'error',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
      },
    ],
    'import/first': ['error', 'absolute-first'],
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '/**/test/**/*.js',
          '/.prettierrc.js',
          '/bin/test',
          '/gulpfile.js',
          '/jest.setupEnvironment.js',
          '/scripts/**/*.js',
          '/webpack.config.js',
        ],
      },
    ],
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/prefer-default-export': 'error',
    'linebreak-style': ['error', 'unix'],
    'lines-around-directive': [
      'error',
      {
        before: 'always',
        after: 'always',
      },
    ],
    'max-depth': ['error', 4],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
      },
    ],
    'no-array-constructor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-else-return': ['error', { allowElseIf: true }],
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-extra-semi': 'off', // Handled by Prettier
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-mixed-spaces-and-tabs': 'off', // Handled by Prettier
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-path-concat': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],
    'no-return-assign': ['error', 'except-parens'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unexpected-multiline': 'off', // Handled by Prettier
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prefer-spread': 'error',
    strict: ['error', 'safe'],
    'symbol-description': 'error',
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'vars-on-top': 'error',
    yoda: 'error',
  },
  overrides: [{ files: ['**/test/**', '**/*.test.js', 'jest.setupEnvironment.js'], env: { mocha: true, jest: true } }],
};
