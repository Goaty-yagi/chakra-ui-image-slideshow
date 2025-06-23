import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import path from "path";
import { fileURLToPath } from "url";

// Polyfill __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  input: "src/index.ts", // Entry that re‑exports your components
  output: [
    {
      file: "dist/index.esm.mjs", // ESM (for bundlers)
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/index.cjs.cjs", // CommonJS (for Node / older tools)
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
  ],
  plugins: [
    peerDepsExternal(), // Auto mark peer deps as external
    resolve(),
    commonjs(),
    typescript({
      tsconfig: path.resolve(__dirname, "tsconfig.json"),
      declaration: true,
      declarationDir: "dist",
      rootDir: "src",
    }),
    babel({
      babelHelpers: "bundled",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      exclude: "node_modules/**",
    }),
  ],
  external: [
    "react",
    "react-dom",
    "@chakra-ui/react",
    "@emotion/react",
    "@emotion/styled",
    "motion",
    "@chakra-ui/system",
    "@chakra-ui/color-mode",
    "@chakra-ui/react-use-safe-layout-effect",
  ],
};
