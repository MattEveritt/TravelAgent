module.exports = {
  root: true,
  env: {
    jest: true, // Add this line
  },
  extends: ['@react-native', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
      },
    ],
    semi: ['error', 'always'],
    quotes: [2, 'single'],
    // indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'object-curly-spacing': ['error', 'always'],
  },
};
