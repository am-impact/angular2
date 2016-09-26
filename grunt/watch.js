module.exports = {
    angular: {
        files: ['src/angular/**/*.ts'],
        tasks: [
            'exec:dev'
        ],
        options: {
            livereload: true
        }
    }
};
