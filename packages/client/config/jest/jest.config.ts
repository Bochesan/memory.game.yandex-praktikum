import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

export default {
  moduleNameMapper: {
    '\\.svg': path.resolve(__dirname, 'Component.tsx'),
    '\\.png': path.resolve(__dirname, 'Component.tsx'),
    '\\.jpg': path.resolve(__dirname, 'Component.tsx'),
    '\\.webp': path.resolve(__dirname, 'Component.tsx'),
    '@/(.*)': '<rootDir>/src/$1',
    '\\.s?css$': 'identity-obj-proxy',
  },
  clearMocks: true,
  preset: 'ts-jest',
  rootDir: '../../',
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>src'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>config/jest/setup.tests.ts'],
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
}
