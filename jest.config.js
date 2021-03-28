module.exports = {
  // preset: "ts-jest",
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc-node/jest",
      {
        target: "es2019",
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
        keepClassNames: true,
        sourcemap: true,
      },
    ],
  },
  testEnvironment: "node",
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
};
