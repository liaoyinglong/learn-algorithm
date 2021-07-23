const path = require("path");

const esbuild = require("esbuild");

/**
 * Jest ESBuild is a jest transformer that uses esbuild to compile .ts and .tsx
 * into Node.js compatible JavaScript.
 *
 * This file is JavaScript using commonjs modules (require instead of import)
 * because it's the compiler for TypeScript files when running with jest. We
 * want this file to run directly under Node to avoid bootstrapping.
 *
 * Originally copied from the MIT licensed
 * https://github.com/aelbore/esbuild-jest/
 * @param {string} sourceText
 * @param {string} sourcePath
 * @param {import('@jest/types').Config} _config
 * @param {import('@jest/transform/build/types').TransformOptions} _options
 * @return {import('@jest/transform/build/types').TransformedSource}
 */
const process = (sourceText, sourcePath, _config, _options) => {
  const loader = path.extname(sourcePath).slice(1);
  if (loader !== "ts" && loader !== "tsx" && loader !== "js" && loader !== "jsx") {
    throw new Error(
      `Unsupported extension type '${loader}' for esbuild Jest transformer on file: ${sourcePath}`
    );
  }
  return esbuild.transformSync(sourceText, {
    format: "cjs",
    target: "es6",
    loader: loader,
    sourcemap: "both",
    sourcesContent: true,
    sourcefile: sourcePath,
  });
};

module.exports = { process };
