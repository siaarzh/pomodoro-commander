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
  
  // Also clean up any test database files in the root directory
  const rootDir = __dirname;
  try {
    const files = fs.readdirSync(rootDir);
    files.forEach(file => {
      if (file.startsWith('__test__db') && file.endsWith('.nedb')) {
        const filePath = path.join(rootDir, file);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
    });
  } catch (error) {
    // Ignore cleanup errors
  }
});

// Global cleanup after all tests
afterAll(async () => {
  // Close any open nedb databases to prevent open handles
  try {
    const { DBs } = require('./src/main/db');
    for (const dbName in DBs) {
      if (DBs[dbName] && typeof DBs[dbName].close === 'function') {
        await new Promise((resolve) => {
          DBs[dbName].close((err) => {
            if (err) console.warn(`Error closing ${dbName}:`, err);
            resolve();
          });
        });
      }
    }
  } catch (error) {
    // Ignore cleanup errors
  }

  const testDbDir = path.join(__dirname, '__test__db');
  if (fs.existsSync(testDbDir)) {
    try {
      fs.rmdirSync(testDbDir);
    } catch (error) {
      // Ignore cleanup errors
    }
  }
  
  // Clean up any remaining test database files
  const rootDir = __dirname;
  try {
    const files = fs.readdirSync(rootDir);
    files.forEach(file => {
      if (file.startsWith('__test__db') && file.endsWith('.nedb')) {
        const filePath = path.join(rootDir, file);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
    });
  } catch (error) {
    // Ignore cleanup errors
  }
});
