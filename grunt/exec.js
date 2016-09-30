module.exports = {
    dev: {
        cmd: 'ng build',
        maxBuffer: 1024 * 500
    },
    prod: {
        cmd: 'ng build -prod',
        maxBuffer: 1024 * 500
    },
    rename_bundle: {
        cmd: 'for f in htdocs/resources/scripts/angular/main.*.bundle.js; do mv "$f" "htdocs/resources/scripts/angular/main.bundle.js"; done'
    }
};
