import { babel } from "@rollup/plugin-babel"
import external from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
import scss from "rollup-plugin-scss"
import typescript from "@rollup/plugin-typescript"
import { terser } from "rollup-plugin-terser"
import postcss from "postcss"
import autoprefixer from "autoprefixer"

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      scss({
        output: "dist/css/doxy-web.min.css",
        failOnError: true,
        outputStyle: "compressed",
        processor: () => postcss([autoprefixer()]),
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        babelHelpers: "bundled"
      }),
      external(),
      resolve(),
      typescript(),
      terser(),
    ],
  },
]

