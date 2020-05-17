// compile SASS and output autoprefixer
var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var postcss = require('gulp-postcss'); //即便package.json是postcss 還是要call gulp-postcss
var autoprefixer = require('autoprefixer');

gulp.task('sassToCssPrefix', async function () {
	gulp.src('*.sass')
		.pipe(gulpSass()) // 編譯 Sass
		.pipe(postcss([autoprefixer()])) //package.json -> browserslist 控制前綴支援版本
		.pipe(gulp.dest('./dist')); // 指定編譯後的 css 檔案目錄
});