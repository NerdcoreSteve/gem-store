const
    chokidar = require('chokidar'),
    exec = require('child_process').exec

chokidar.watch(['front-end'], {ignored: [/[\/\\]\./, /node_modules/]}).on('all', () => {
    exec('eslint *.js front-end/js/*.js')
    exec('browserify front-end/js/main.js -o public/js/main.js -t [ babelify --presets [ es2015 ] ]')
})

console.log('Now watching front end')
