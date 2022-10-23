// Check phase callbacks

const fs = require('fs');

const ITERATIONS_MAX = 1;
let iteration = 0;
console.log('START', 'MAINLINE');
const timeout = setInterval(() => {
    console.log('START: setInterval', 'TIMERS PHASE');
    if (iteration < ITERATIONS_MAX) {
        setTimeout(() => {
            console.log('setInterval.setTimeout', 'TIMERS PHASE');
        });
        fs.readdir('../tasks', (err, files) => {
            if (err) throw err;
            console.log('fs.readdir() callback: Directory contains: ' + files.length + ' files', 'POLL PHASE');
        });
        setImmediate(() => {
            console.log('setInterval.setImmediate', 'CHECK PHASE');
        });
    } else {
        console.log('Max interval count exceeded. Goodbye.', 'TIMERS PHASE');
        clearInterval(timeout);
    }
    iteration++;
    console.log('END: setInterval', 'TIMERS PHASE');
}, 0);
console.log('END', 'MAINLINE');
