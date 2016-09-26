module.exports = {
    dev: {
        cmd: 'ng build',
        maxBuffer: 1024 * 500
    },
    prod: {
        cmd: 'ng build -prod',
        maxBuffer: 1024 * 500
    }
};
