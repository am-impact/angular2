module.exports = {
    angular: {
        files: ['src/angular/**/*.ts','src/angular/**/*.html','src/angular/**/*.css'],
        tasks: [
            'exec:dev'
        ],
        options: {
            livereload: true
        }
    }
};
