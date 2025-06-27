// ES6
// const EventEmitter = require('node:events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// myEmitter.emit('event');


// ES5
// var events = require("events");

// // Create an eventEmitter object
// var myEmitter = new events.EventEmitter();

// // Setting up the event handler
// myEmitter.on("someEvent", function (msg) {
//   console.log("an event occurred: " + msg);
// });

// // Firing the event
// myEmitter.emit("someEvent", "Hello World");


// ES5
// var events = require("events");
// var util = require("util");

// var Person = function (name) {
//   this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// var xiaoming = new Person("Xiao Ming");
// var lilei = new Person("Li Lei");

// var person = [xiaoming, lilei];

// person.forEach(function (p) {
//   p.on("speak", function (msg) {
//     console.log(this.name + " said: " + msg); // p.name also works 
//   });
// });

// xiaoming.emit("speak", "Hello");
// lilei.emit("speak", "Hi");


let events = require("events");
let util = require("util");

class Person extends events.EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

let xiaoming = new Person("Xiao Ming");
let lilei = new Person("Li Lei");

let person = [xiaoming, lilei];

person.forEach(function (p) {
  p.on("speak", function (msg) {
    console.log(this.name + " said: " + msg); // p.name also works 
  });
});

xiaoming.emit("speak", "Hello");
lilei.emit("speak", "Hi");
