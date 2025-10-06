// Jest setup file to handle cleanup
const fs = require('fs');
const path = require('path');

// Clean up test database files after each test
afterEach(() => {
  const testDbDir = path.join(__dirname, '__test__db');
  if (fs.existsSync(testDbDir)) {
    try {
      const files = fs.readdirSync(testDbDir);
      files.forEach(file => {
        const filePath = path.join(testDbDir, file);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      });
    } catch (error) {
      // Ignore cleanup errors
    }
  }
});

// Global cleanup after all tests
afterAll(() => {
  const testDbDir = path.join(__dirname, '__test__db');
  if (fs.existsSync(testDbDir)) {
    try {
      fs.rmdirSync(testDbDir);
    } catch (error) {
      // Ignore cleanup errors
    }
  }
});
