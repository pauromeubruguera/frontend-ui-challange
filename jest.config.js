module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy', // Mock archivos CSS/SCSS
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  };
  