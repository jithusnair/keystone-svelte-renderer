/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
	branches: ['main'],
	repositoryUrl: 'https://github.com/jithusnair/keystone-svelte-renderer',
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/npm',
		'@semantic-release/github'
	]
};
