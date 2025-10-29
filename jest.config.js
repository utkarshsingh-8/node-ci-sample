module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'json-summary', 'lcov', 'text', 'clover'],

  // Fail tests (exit non-zero) if coverage is below these thresholds
  coverageThreshold: {
  global: {
    branches: 70,
    functions: 70,
    lines: 70,
    statements: 70
  }
},

  // Optional: collect coverage for specific files/globs
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/__tests__/**'
  ]
};
