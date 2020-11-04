module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  testPathIgnorePatterns: [
    'dist',
  ],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      { cwd: __dirname },
    ],
  },
  transformIgnorePatterns: [
    'packages/*/node_modules/(?!@banksalad/web-native-interface-event)',
  ],
  testRegex: '\\.test\\.ts$',
};

