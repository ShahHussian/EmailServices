module.exports = {
  preset: 'ts-jest', // Use ts-jest preset to handle TypeScript files
  testEnvironment: 'node', // Use Node.js environment for tests
  transform: {
    '^.+\\.tsx?$': 'ts-jest' // Transform TypeScript files using ts-jest
  },
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'], // Match files with .test.ts or .spec.ts extensions
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // File extensions Jest will process
  clearMocks: true // Clear mocks between tests
}
