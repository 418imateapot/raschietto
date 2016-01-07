// Canonical path provides a consistent path (i.e. always forward slashes) across different OSes
var STATIC_DIR = '../static';
var MODULES_DIR = STATIC_DIR + '/node_modules/';

var path = require(MODULES_DIR + 'canonical-path');
var Package = require(MODULES_DIR + 'dgeni').Package;

module.exports = new Package('dgeni-raschietto', [
    require(MODULES_DIR + 'dgeni-packages/base'),
    require(MODULES_DIR + 'dgeni-packages/ngdoc'),
    require(MODULES_DIR + 'dgeni-packages/jsdoc'),
    require(MODULES_DIR + 'dgeni-packages/nunjucks')
])

.config(function(log, readFilesProcessor, writeFilesProcessor) {


    // Set logging level
    log.level = 'debug';

    // Specify the base path used when resolving relative paths to source and output files
    readFilesProcessor.basePath = path.resolve(__dirname, STATIC_DIR);

    // Specify collections of source files that should contain the documentation to extract
    readFilesProcessor.sourceFiles = [{
        // Process all js files in `src` and its subfolders ...
        include: 'client/**/*.js',
        // When calculating the relative path to these files use this as the base path.
        // So `src/foo/bar.js` will have relative path of `foo/bar.js`
        basePath: STATIC_DIR
    }, {
        include: '../doc/index.ngdoc',

        basePath: __dirname
    }];

    writeFilesProcessor.outputFolder = __dirname + '/client';

})

.config(function(templateFinder, templateEngine) {

    // Nunjucks and Angular conflict in their template bindings so change the Nunjucks
    templateEngine.config.tags = {
        variableStart: '{$',
        variableEnd: '$}'
    };

    templateFinder.templateFolders
        .unshift(path.resolve(__dirname, 'templates'));

})


.config(function(computePathsProcessor, computeIdsProcessor) {

    computePathsProcessor.pathTemplates.push({
        docTypes: ['overview', 'tutorial'],
        getPath: function(doc) {
            var docPath = path.dirname(doc.fileInfo.relativePath);
            if (doc.fileInfo.baseName !== 'index') {
                docPath = path.join(docPath, doc.fileInfo.baseName);
            }
            return docPath;
        },
        outputPathTemplate: 'partials/${path}.html'
    });

    computeIdsProcessor.idTemplates.push({
        docTypes: ['overview', 'tutorial', 'e2e-test', 'indexPage'],
        getId: function(doc) {
            return doc.fileInfo.baseName;
        },
        getAliases: function(doc) {
            return [doc.id];
        }
    });

})



.config(function(getLinkInfo) {
    getLinkInfo.relativeLinks = true;
});
