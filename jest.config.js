module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@examples/(.*)$': '<rootDir>/examples/$1',
    '^@packages/(.*)$': '<rootDir>/packages/$1',
    '\\.(css|less|sass)$': 'identity-obj-proxy'
  }
}
