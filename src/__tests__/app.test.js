// src/__tests__/app.test.js
const app = require('../index');

describe('app exports', () => {
  test('should export an express app instance', () => {
    // Express app is a function that has `get`, `use` methods
    expect(typeof app).toBe('function');
    expect(app).toHaveProperty('get');
    expect(app).toHaveProperty('use');
  });
});
