'use strict';

const fs = require ('fs');
const reader = require('readline');

let data = ['Johnny', 'Cow and Chicken', 'Freakazoid'];

const os = require('os');
console.log(os.endianness());


let code = '\'use strict\';\nlet people = [\'Johnny\', \'Cow and Chicken\', \'Freakazoid\'];\npeople.forEach(peeps => {\nconsole.log(peeps);\n});';
let str = code.split('');
let dataOne = Buffer.from('');


let writer = (source) => {
  fs.writeFile('./files/loop.js', code, (error) => {
    if(error) throw error;
    console.log('Saved file');
  });
}; 

let usingBuffer = (array) => {
  array.forEach(element => {
    dataOne = Buffer.concat([dataOne, Buffer.from(element)]);
    data.forEach(element => {
    });
  });
};
writer(str);
usingBuffer(data);


//------------
// Part 2
//-------------

//--------------Solution Code
let tags = {};
let answerArray = [];

let createTag = (tag, buffer) => {
  if(!tags[tag]){
    tags[tag] = {
      open: Buffer.from(`<${tag}>`),
      close: Buffer.from(`<${tag}>`),
    };
  }
  buffer = Buffer.concat([tags[tag].open, buffer, tags[tag].close]);
  answerArray.push(buffer);
};

let fileWriter = (file) => {
  let lineReader = reader.createInterface({
    input: fs.createReadStream(file),
  });

  lineReader.on('line', function(line){
    console.log('Making HTML tags');
    if(line.match(/^[0-9]\./)){
      createTag('h3', Buffer.from(line));
    }else if(line.match(/\./)){
      line.split('.').forEach(sentence => {
        sentence && createTag('li', Buffer.from(sentence));
      });
    }else if(line){
      createTag('h2', Buffer.from(line));
    }
  });

  lineReader.on('close', () => {
    fs.writeFile('./files/index.html', answerArray.join(' '), (error, data) => {
      console.log('File is there');
    });
  });
};

fileWriter('./files/pair-programming.txt');
module.exports = fileWriter, usingBuffer;
