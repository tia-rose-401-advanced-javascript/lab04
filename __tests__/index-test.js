'use strict';

jest.mock('fs');

const reader = require('../index.js');

describe('Using Buffer Function', () => {

  it('should return error when given a bad file', done => {
    let files = ['bad.txt'];
    reader.fileWriter(files, (error, data) => {
      expect(error).toBeDefined();
      done();
    });
  });  
});