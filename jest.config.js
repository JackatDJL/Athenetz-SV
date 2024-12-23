const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!@vercel/flags)', // Adjust this pattern to include any other packages that need to be transformed
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^§ui/(.*)$': '<rootDir>/src/ux/ui/$1',
    '^§comp/(.*)$': '<rootDir>/src/ux/components/$1',
    '^§api/(.*)$': '<rootDir>/src/ux/api/$1',
    '^§util/(.*)$': '<rootDir>/src/ux/util/$1',
  },
};