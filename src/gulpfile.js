const {watch, src, dest, series, parallel} = require("gulp")
const postcss = require("gulp-postcss")
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require("gulp-sass-glob")
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")
const rollup = require("rollup")
const rollupCommonJs = require("@rollup/plugin-commonjs")
const rollupNodeResolve = require("@rollup/plugin-node-resolve").nodeResolve
const rollupTerser = require("rollup-plugin-terser").terser

const logger = require("eazy-logger").Logger({
  useLevelPrefixes: false
})

let rollupCache;

const __ = {
  location: "../theme/assets"
}

async function buildJsWithCache() {
  const bundle = await rollup.rollup({
	cache: rollupCache,
	input: "./js/theme.js",
	watch: {
	  include: "./js/**",
	  exclude: "./node_modules/**"
	},
	treeshake: true,
	plugins: [
	  rollupNodeResolve({
		browser: true
	  }),
	  rollupCommonJs({sourceMap: false}),
	  rollupTerser()
	]
  });
  
  rollupCache = bundle.cache;
  return bundle;
}

function jsTask(done) {
  buildJsWithCache().then(bundle => {
	bundle.write({
		sourcemap: false,
		file: __.location + "/theme.js",
		format: "iife",
		indent: false
	  })
	  .then(done())
  })
}

function scssTask(done) {
  src(["scss/theme.scss"], {sourcemaps: false})
	.pipe(sassGlob())
	.pipe(sass({outputStyle: "compressed" }))
	.on("error", error)
	.pipe(postcss([autoprefixer({grid: true}), cssnano()]))
	.on("error", error)
	.pipe(dest(__.location, {sourcemaps: false}))
  
  done()
}

function watchFiles(done) {
  watch("./js/*.js", {interval: 1000}, series(jsTask))
  watch("./scss/**/*.scss", {interval: 1000}, series(scssTask))
  done()
}

function error(message) {
  console.log(message)
  this.emit("end")
}

exports.watch = parallel(jsTask, scssTask, watchFiles)