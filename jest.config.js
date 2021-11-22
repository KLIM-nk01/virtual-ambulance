module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/__test__/config/importJestDOM.ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__test__/mock/fileMock.ts',
    '\\.(css|less)$': '<rootDir>/src/__test__/mock/styleMock.ts',
    '^@styleMixin(.*)$': '<rootDir>/src/styleMixin$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '^@data(.*)$': '<rootDir>/src/data$1',
    '^@containers(.*)$': '<rootDir>/src/containers$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@store(.*)$': '<rootDir>/src/store$1',
    '^@core(.*)$': '<rootDir>/src/core$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
  },
};
