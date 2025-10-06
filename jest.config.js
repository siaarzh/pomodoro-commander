const common = {
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "json",
        "node"
    ],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|dat)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(s?css|sass)$": "<rootDir>/__mocks__/styleMock.js",
        "^worker-loader!": "<rootDir>/__mocks__/workerMock.js",
    }
};

module.exports = {
    ...common,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'html'],
    testMatch: ['**/*.(spec|test).[jt]s?(x)'],
    transformIgnorePatterns: [ ],
    globals: {
        'ts-jest': {
            diagnostics: false
        }
    },
    "roots": [
        "<rootDir>",
    ],
    "modulePaths": [
        "<rootDir>",
    ],
    "moduleDirectories": [
        "node_modules"
    ],
    // For Circle CI
    reporters: ["default", "jest-junit"],
    // Fix for open handles in CI
    testEnvironment: 'node',
    forceExit: true,
    // Increase timeout for CI
    testTimeout: 30000,
    // Run tests serially to avoid file conflicts
    maxWorkers: 1,
    // Setup file for cleanup
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
