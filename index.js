const app = require('express');
const log=require('./logger.js');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
const emitter = new EventEmitter;
const salePulseraRoja = require('./prices.js');

let Roja = 2;
salePulseraRoja(Roja);

//making a noise or creating a signal

const files = fs.readdir('./',function(err,files){
    if(err) console.log('Error',err);
    else console.log('Result',files);
});

const Testing = true;

emitter.on('Test', ()  =>{
    if(Testing == true) console.log('true');
    else console.log('false');
});

emitter.emit('Test');


///////////////////////////////// 
var TotMem = os.totalmem();
var FreMem = os.freemem();
TotMem = TotMem/10e8;
FreMem = FreMem/10e8;

//log(files);
log(`Total memory in System is ${TotMem.toFixed(2)} GB`);
log(`Free Memory in System is: ${FreMem.toFixed(2)} GB`);