module.exports = {
    prod: {
        options: {
            sourceMap: false,
            mangle: false
        },
        files: [
            {
                src: 'htdocs/resources/scripts/angular/main.bundle.js',
                dest: 'htdocs/resources/scripts/angular/main.bundle.js'
            }
        ]
    }
};
