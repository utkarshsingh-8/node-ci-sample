module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'json-summary', 'lcov', 'text', 'clover'],

  // Fail tests (exit non-zero) if coverage is below these thresholds
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },

  // Optional: collect coverage for specific files/globs
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/__tests__/**'
  ]
};
