import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'

// import pkg from './package.json'

const extensions = [
  '.ts'
]

export default [
  {
    input: {
      mono: './src/index.ts',
      shared: './src/shared.ts'
    },
    output: [
      {
        sourcemap: false,
        dir: 'dist',
        format: 'es',
      },
    ],
    plugins: [
      resolve({extensions}),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/env'],
        babelHelpers: 'bundled',
      }),
      typescript({
        tsconfig: './tsconfig.json',
        clean: true,
      })
    ]
  }
]
