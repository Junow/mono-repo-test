import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'

// import pkg from './package.json'

const input = './src/index.ts'
const extensions = [
  '.ts'
]

export default [
  {
    input,
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
      }),
      typescript({
        tsconfig: './tsconfig.json',
        clean: true,
      })
    ]
  }
]
