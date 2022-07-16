import gulpTs from 'gulp-typescript'
import gulp from 'gulp'

const {src, dest} = gulp

export function tsTranspile(){
	return src('./src/ts/**/*.ts')
		.pipe(gulpTs({noImplicitAny: true, outDir: './js', target:'ES2015'}))
		.pipe(dest('./dist/js'))
}
