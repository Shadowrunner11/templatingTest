import sass from 'sass'
import gsass from 'gulp-sass'
import prefx from 'gulp-autoprefixer'
import gulp from 'gulp'

const {src, dest} = gulp

const sassPlug  = gsass(sass)

export function sassTranspile(){
	return src('./src/sass/**/*.sass')
		.pipe(sassPlug().on("error", sassPlug.logError))
		.pipe(dest('./dist/css'))
}


export function autoPrefix(){
	return src('./src/css/**/*.css')
		.pipe(prefx({flexbox: true, cascade: false}))
		.pipe(dest('./dist/styles'))
}