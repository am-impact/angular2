module.exports = function(grunt) {
	grunt.registerTask('default', [
        'exec:dev'
	]);

	grunt.registerTask('production', [
		'exec:prod',
        'exec:rename_bundle'
	]);
};
