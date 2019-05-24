'use strict';

const fs = require ('fs');

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
    console.log(dataOne);
    data.forEach(element => {
      console.log(element.split(','));
    });
  });
};
writer(str);
usingBuffer(data);


//------------
// Part 2
//-------------




let readerHTML = () => {

  fs.readFile('./files/pair-programming.txt',(error, contents) => {
    if(error) throw error;


    const buffContents = Buffer.from(contents);
    console.log(buffContents);
    return buffContents;
  });
};

let writerHTML = (test) => {
  fs.writeFile('./files/index.html', test, (error) => {
    if(error) throw error;
    console.log('Saved file');
  });
};

// writerHTML(readerHTML());
// readerHTML(writerHTML);

readerHTML();
writerHTML();
