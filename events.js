const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('debit', () => {
  console.log('please apply debit and deduct money');
  setTimeout(() => {
      console.log("new balance")
  }, 3000);
});

console.log("check your balance")
myEmitter.emit('debit');

console.log("done")