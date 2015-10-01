const BroccoliMergeTrees = require( 'broccoli-merge-trees' );
const BrowserSync = require( 'broccoli-browser-sync' );
const Replace = require('broccoli-string-replace');
const env = require( 'broccoli-env' ).getEnv();

const clientTree = 'client';

const browserSync = new BrowserSync( [ clientTree ] );

var buildTag = ( '<script src="jspm_packages/system.js"></script>' +
  '<script src="config.js"></script>' +
  '<script>' +
  '  System.import(\'app/app\')' +
  '  .then(function(){ console.log(\'loaded!\')})' +
  '  .catch(console.error.bind(console));' +
  '</script>'
 );

if ( env !== 'development' ) {

  buildTag = ( '<script src="jspm_packages/system.js"></script>' +
  '<script src="index-bundle.js" async></script>' );

}

const templateReplace = new Replace( clientTree, {
  files: [
    'index.html' // replace only html files in src
  ],
  patterns: [
    {
      match: '<!-- Broccoli Replace Tag -->',
      replacement: buildTag
    }
  ]
});

var treesToMerge = [ templateReplace ];

if ( env !== 'development' ) {

  treesToMerge.push( browserSync );

}

module.exports = new BroccoliMergeTrees( treesToMerge, { overwrite: true } );
