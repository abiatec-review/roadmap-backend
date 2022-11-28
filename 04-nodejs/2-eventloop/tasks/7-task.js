// Event: simpleEvent

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

console.log('START', 'MAINLINE');
console.log('Registering simpleEvent handler', 'MAINLINE');
eventEmitter.on('simpleEvent', (eventName, message, source, timestamp) => {
    console.log('Received event: ' + timestamp + ': ' + source + ':[' + eventName + ']: ' + message, 'EventEmitter.on()');
});

let hrtime = process.hrtime();
eventEmitter.emit('simpleEvent', 'simpleEvent', 'Custom event says what?', 'MAINLINE', (hrtime[0] * 1e9 + hrtime[1] ) / 1e6);

console.log('END', 'MAINLINE');
