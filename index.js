'use strict'

const fs = require('fs');
const os = require('os')

fs.readFile('./files/pair-programming.txt',(err, data) =>{if(err) throw err;
  let arr = data;
  let newarr = [];
  while(arr.includes(10)){ 
    newarr.push(arr.slice(0,arr.indexOf(10)));
    arr = arr.slice(arr.indexOf(10)+1,arr.length);
  }
  newarr.push(arr);
  for(let i=0; i<newarr.length; i++){
    //check for length of header
    if(newarr[i].length<33 && newarr[i].length>0){
      //ones with number and .
      if(arr[i][1]===46){
        //<h3>
        newarr[i].unshift(60);
        newarr[i].unshift(103);
        newarr[i].unshift(51);
        newarr[i].unshift(62);
        //</h3>
        newarr[i].push(60);
        newarr[i].push(47);
        newarr[i].push(103);
        newarr[i].push(51);
        newarr[i].push(62);
      } 
      //ones without numbers and .
      else {
        // <h2>
        newarr[i].unshift(60);
        newarr[i].unshift(103);
        newarr[i].unshift(50);
        newarr[i].unshift(62);
        // </h2>
        newarr[i].push(60);
        newarr[i].push(47);
        newarr[i].push(103);
        newarr[i].push(50);
        newarr[i].push(62);
      }
    
    if(newarr[i].length>33){
      let temparr= [];
      while (newarr[i].includes(46)){
        temparr.push(newarr[i].slice(0,newarr[i].indexOf(46)))
      }
      temparr.push(newarr[i]);
      temparr.forEach((array)=>{
        array.unshift(60);
        array.unshift(108);
        array.unshift(105);
        array.unshift(62);

        array.push(60);
        array.push(47)
        array.push(108);
        array.push(105);
        array.push(62);      

        })
      ///need to concat newarr[i] to recieve changes
      }
    //need to concat newarr to put all the portions together
    }
  // fs.writeFile('./files/pair-programming.html', content, function(err){
  //   if(err) throw err;
  //   console.log('created file')
  // })
  }
})

