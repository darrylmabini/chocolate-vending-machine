module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  bail: true,
  rootDir: 'src',
  moduleDirectories: ['src', 'node_modules'],
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
};
