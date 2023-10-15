const { defaults } = require('jest-config');

export default {
  'roots': [
    '<rootDir>'
  ],
  'testMatch': [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  'transform': {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  'moduleFileExtensions': [
    'tsx',
    ...defaults.moduleFileExtensions
],
}