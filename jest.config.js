module.exports = {
  "preset": 'ts-jest',
  "verbose": true,
  "testEnvironment": 'jsdom',
  "modulePaths": ["src"],
  "setupFilesAfterEnv": [
    '<rootDir>/src/tests/setupTests.js',
    '@testing-library/jest-dom',
  ],
  "testPathIgnorePatterns": ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  "testRegex": '/src/tests/.*test\\.(tsx|js)$',
  "moduleFileExtensions": [
    'ts', 'tsx', 'js', 'jsx', 'json', 'node'
  ],
  "transform": {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  "moduleNameMapper": {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  "moduleDirectories": ['node_modules', '<rootDir>'],
  "transformIgnorePatterns": [
    "node_modules/(?!variables/.*)",
    "node_modules/(?!jest-runtime)"
  ],
  "globals": {
    "window": {}
  }
};