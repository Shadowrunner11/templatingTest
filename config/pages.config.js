import pug from 'gulp-pug'
import gulp from 'gulp'
import {data} from './fakeData.js'

const {src, dest} = gulp
export function pugTranspile(){
	return src('./src/pug/**/*.pug')
		.pipe(pug({verbose: true, pretty: true, data, self:true}))
		.pipe(dest('./dist/'))
}