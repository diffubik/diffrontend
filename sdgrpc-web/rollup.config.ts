import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

function bundle(config: object) {
  return {
    ...config,
    input: './src/index.ts',
    external: (id: string) => !/^[./]/.test(id),
  };
}

export default [
  bundle({
    plugins: [esbuild()],
    output: [
      {
        file: `dist/index.js`,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `dist/index.d.ts`,
      format: 'es',
    },
  }),
]
