module.exports = {
    angular: {
        files: ['src/angular/**/*.ts','src/angular/**/*.html'],
        tasks: [
            'exec:dev'
        ],
        options: {
            livereload: true
        }
    }
};
