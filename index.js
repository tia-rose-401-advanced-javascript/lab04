'use strict';

const fs = require ('fs');

let data = ['Johnny', 'Cow and Chicken', 'Freakazoid'];

const os = require('os');
console.log(os.endianness());


let code = '\'use strict\';\nlet people = [\'Johnny\', \'Cow and Chicken\', \'Freakazoid\'];\npeople.forEach(peeps => {\nconsole.log(peeps);\n});';

fs.writeFile('./files/loop.js', code, (error) => {
  if(error) throw error;
  console.log(`writing ${code}`);
});



let usingBuffer = (data) => {
//using buffer
};