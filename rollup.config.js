// Rollup plugins
import babel from 'rollup-plugin-babel';

export default {
    entry: 'lib/ghostworker-devtools.js',
    dest: 'dist/ghostworker-devtools.js',
    format: 'umd',
    moduleName: 'GhostWorkerDevTools',
    sourceMap: true,
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
    ]
}