const
    gulp = require('gulp'),
    imageResize = require('gulp-image-resize'),
    rename = require('gulp-rename'),
    del = require('del')
 
gulp.task('resize-images', () => {
    const front_end_images = gulp.src('front-end/images/*')

    del(['public/images/*'])

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

gulp.task('default', ['resize-images'])
