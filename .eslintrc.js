module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
      alias: {
        map: [
          // And all your import aliases
          ['@components', './src/components/'],
          ['@constants', './src/constants/'],
          ['@enums', './src/enums/'],
          ['@features', './src/features/'],
          ['@interfaces', './src/interfaces/'],
          ['@pages', './src/pages/'],
          ['@router', './src/router/'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/prefer-stateless-function': 0,
    'react/destructuring-assignment': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
      },
    ],
    'arrow-body-style': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
  },
};
