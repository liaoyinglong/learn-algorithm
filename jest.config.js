let enableDebugger = (() => {
  const { NODE_OPTIONS } = process.env;
  // NODE_OPTIONS: "--require C:\\Users\\long8\\AppData\\Local\\Temp\\debugConnector.211.7142.14.js",
  return !!NODE_OPTIONS && NODE_OPTIONS.includes("debug");
})();

const config = {
  testEnvironment: "node",
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
};

if (enableDebugger) {
  config.preset = "ts-jest";
} else {
  config.transform = {
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
  };
}

module.exports = config;
