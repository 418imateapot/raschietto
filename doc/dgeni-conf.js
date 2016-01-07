// Canonical path provides a consistent path (i.e. always forward slashes) across different OSes
var path = require('canonical-path');
var Package = require('dgeni').Package;
var node_dir = '../../static/node_modules/';

module.exports = new Package('dgeni-raschietto', [
    require(node_dir + 'dgeni-packages/angularjs'),
    require(node_dir + 'dgeni-packages/jsdoc'),
    require(node_dir + 'dgeni-packages/nunjucks')
])

.config(function(log, readFilesProcessor, writeFilesProcessor) {


    // Set logging level
    log.level = 'debug';

    // Specify the base path used when resolving relative paths to source and output files
    readFilesProcessor.basePath = path.resolve(__dirname, '../static');

    // Specify collections of source files that should contain the documentation to extract
    readFilesProcessor.sourceFiles = [{
        // Process all js files in `src` and its subfolders ...
        include: '../../static/build/js/app.js',
        // When calculating the relative path to these files use this as the base path.
        // So `src/foo/bar.js` will have relative path of `foo/bar.js`
        basePath: '../../static'
    }];

    writeFilesProcessor.outputFolder = '.';

})

.config(function(templateFinder, templateEngine) {

    // Nunjucks and Angular conflict in their template bindings so change the Nunjucks
    templateEngine.config.tags = {
        variableStart: '{$',
        variableEnd: '$}'
    };

    templateFinder.templateFolders
        .unshift(path.resolve(__dirname, 'templates'));

    templateFinder.templatePatterns = [
        '${ doc.template }',
        '${ doc.id }.${ doc.docType }.template.html',
        '${ doc.id }.template.html',
        '${ doc.docType }.template.html',
        'common.template.html'
    ];
})

.config(function(getLinkInfo) {
    getLinkInfo.relativeLinks = true;
});
