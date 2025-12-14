// rollup.config.mjs
import terser from "@rollup/plugin-terser";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import serve from 'rollup-plugin-serve';
import livereload from "rollup-plugin-livereload";
import css from "rollup-plugin-import-css";
import del from 'rollup-plugin-delete'
import { string } from "rollup-plugin-string";
import nodePolyfills from 'rollup-plugin-polyfill-node';
import url from "@rollup/plugin-url";

// If is dev or prod env
let isDev = process.env.NODE_ENV === 'development'

// Output setting
const outputDev = {
	file: 'build/bundle.js',
	format: 'iife',
	name: 'outputDev',
}
const outputProd = {
	file: 'build/bundle.js',
	format: 'iife',
	name: 'outputProd',
}

// Plugin setting
const pluginDev = [
	/*serve({
		contentBase: './build',
		host: 'localhost',
		port: 10001,
		open: true,
		openPage: '/',
		historyApiFallback: true
	}),*/
	livereload({
		watch: 'build',

	}),
]
const pluginProd = [
	terser(),
]

// Rollup Setting
export default {
	input: 'src/index.tsx',
	output: isDev ? outputDev : outputProd,
    plugins:[
		del({ targets: ['build/**/*.js', 'build/**/*.css'] }),
		css({
			output: "style.css",
		}),
		string({
			include: "./src/notes/**/*.md",
		}),
        nodeResolve(),
		commonjs(),
		nodePolyfills(),
		replace({
			'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production'),
			preventAssignment: true,
		}),
        babel({ babelHelpers: 'bundled', extensions: ['.js', '.ts', '.jsx', '.tsx'], exclude: 'node_modules/**' }),
		...(isDev ? pluginDev : pluginProd)
    ],
};