const path = require('path');

const {
  NIGHTWATCH_VERSION = '3.0.1',
  BASE_URL = 'https://nightwatchjs.org',
  MD_DOCS_FOLDER = 'nightwatch-docs',
  API_DOCS_FOLDER = 'nightwatch/lib/api',
  EXAMPLES_FOLDER = 'node_modules/nightwatch-examples/tests'
} = process.env;


console.log('API_DOCS_FOLDER', API_DOCS_FOLDER)

module.exports = {
  directories: {
    includes: 'src/includes',
    layouts: 'src/pages',
    pages: MD_DOCS_FOLDER,
    api: path.resolve(API_DOCS_FOLDER)
  },

  app_settings: {
    version: NIGHTWATCH_VERSION,
    baseUrl: BASE_URL,
    apiRepoUrl: 'https://github.com',
    githubRepo: 'nightwatchjs/nightwatch',
    docsRepoUrl: 'https://github.com/nightwatchjs/nightwatch-docs/blob/',
    docsRepoBranch: 'versions/2.0',
    mdFolder: path.resolve(MD_DOCS_FOLDER),
    apiFolder: path.resolve(API_DOCS_FOLDER),
    examples: {
      output_folder: 'public/__examples',
      source_folder: EXAMPLES_FOLDER
    }
  }
}