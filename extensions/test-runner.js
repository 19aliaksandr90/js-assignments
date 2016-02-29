'use strict';

var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path'),
    process = require('process');

// Instantiate a Mocha instance.
var mocha = new Mocha({
    useColors: true
});

var testDir = 'test'
var testFile;

if (process.argv.length>2) {
    testFile = process.argv[2].replace('task','test');
    testFile = path.join(testDir,testFile);
}

//testFile = path.join('test','01-strings-tests.js');
try {
    fs.accessSync(testFile);
    mocha.addFile(testFile);
} catch (ex) {
    // Add each .js file to the mocha instance
    fs.readdirSync(testDir).filter(function (file) {
        // Only keep the .js files
        return file.substr(-3) === '.js';

    }).forEach(function (file) {
        mocha.addFile(
            path.join(testDir, file)
        );
    });
}

// Run the tests.
mocha.run(function(failures){
  process.on('exit', function () {
    process.exit(failures);
  });
});

