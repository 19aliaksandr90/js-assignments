'use strict';

var assert = require('assert');
var tasks = require('../task/12-katas-3-tasks');
it.optional = require('../extensions/it-optional');

describe('12-katas-3-tasks', function() {

    it.optional('findStringInSnakingPuzzle shoud return true if word occurrs in the specified puzzle', () => {
        var puzzle = [ 
            'ANGULAR',
            'REDNCAE',
            'RFIDTCL',
            'AGNEGSA',
            'YTIRTSP',
        ];
        var puzzleToString = (p) => p.map(x=>'       '+x).join('\n');
        [
            'ANGULAR', 'REACT', 'UNDEFINED', 'RED', 'STRING', 'CLASS', 'ARRAY'
        ].forEach(word => {
            assert(
                tasks.findStringInSnakingPuzzle(puzzle, word),
                `Word "${word}" occurrs in puzzle\n${puzzleToString(puzzle)}`
            );
        });

        [
            'FUNCTION', 'NULL', 'EMBER', 'HOISTING', 'GIT', 'ARENA'
        ].forEach(word => {
            assert(
                !tasks.findStringInSnakingPuzzle(puzzle, word),
                `Word "${word}" does not occurr in puzzle\n${puzzleToString(puzzle)}`
            );
        });
    });

});
