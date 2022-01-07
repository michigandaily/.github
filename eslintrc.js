module.exports = {
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'airbnb',
    'airbnb/hooks'
  ],
  globals: {
    JSX: true,
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js'] }],
    'no-use-before-define': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: false, optionalDependencies: false, peerDependencies: false },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
  },
};
