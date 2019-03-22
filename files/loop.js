'use strict'

const fs = require('fs');
const os = require('os');

//names
const larryAscii= [76, 97, 114, 114, 121  ];
const curleyAscii =[67, 117, 114, 108, 101, 121];
const moeAscii= [77, 111, 101]

const Larry = new Buffer( larryAscii);
const Curley = new Buffer(curleyAscii);
const Moe = new Buffer(moeAscii);

const names = [Larry, Curley, Moe];

names.forEach((name => {
  console.log(name.toString())
}));

newcontent=arr.split(10)

for(let i=0; i<newcontent.length; i++){
  

}