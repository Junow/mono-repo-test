module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
  moduleDirectories: ["node_modules", "src"],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.js?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    "node_modules/?!(@junow/shared)"
  ]
}