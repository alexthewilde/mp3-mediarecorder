import copy from 'rollup-plugin-copy';
import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
    input: 'src/recorder.ts',
    output: [{ file: pkg.module, format: 'es', sourcemap: true, interop: false }],
    watch: {
        include: 'src/**'
    },
    plugins: [
        typescript({ useTsconfigDeclarationDir: true }),
        resolve(),
        sourceMaps(),
        copy({ 'node_modules/vmsg/vmsg.wasm': 'dist/vmsg.wasm' })
    ]
};