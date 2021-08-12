module.exports = {
  transform: {
    "^.+\\.tsx?$": "./config/esbuild-jest.js",
  },
  moduleNameMapper:{
    "src(.*)$": "<rootDir>/src/$1",
  }
};
