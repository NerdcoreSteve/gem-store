var gulp = require('gulp')
var imageResize = require('gulp-image-resize')
var rename = require('gulp-rename')
 
gulp.task('default', () => {
    var front_end_images = gulp.src('front-end/images/*')

    front_end_images
        .pipe(imageResize({ 
            width: 200,
            height: 200,
            crop: true,
            upscale: false
        }))
        .pipe(rename(function (path) {
            path.basename += '-full'
        }))
        .pipe(gulp.dest('public/images'))

    front_end_images
        .pipe(imageResize({ 
            width: 100,
            height: 100,
            crop: true,
            upscale: false
        }))
        .pipe(rename(function (path) {
            path.basename += '-thumb'
        }))
        .pipe(gulp.dest('public/images'))
})
