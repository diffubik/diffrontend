import { RollupOptions } from "rollup";

import esbuild from "rollup-plugin-esbuild";
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from "@rollup/plugin-node-resolve";
import dev from "rollup-plugin-dev";

const options: RollupOptions = {
  input: ["src/web.ts"],
  plugins: [nodeResolve({ preferBuiltins: false }), commonjs(), esbuild(), dev()],
  output: {
    sourcemap: true,
    dir: "dist/",
  },
};

export default options;
