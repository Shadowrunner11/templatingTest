import gulp from 'gulp'
import { autoPrefix, sassTranspile } from './config/styles.config.js'
import { pugTranspile } from './config/pages.config.js'
import { tsTranspile } from './config/ts.config.js'

const { series, parallel , watch} = gulp


export default ()=>watch(
	["./src/**/*"],
	{ ignoreInitial: false }, 
	parallel(series(sassTranspile,autoPrefix), pugTranspile, tsTranspile)
	)