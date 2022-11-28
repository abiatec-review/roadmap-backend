// Promise.resolve().then()

const fs = require('fs');

const ITERATIONS_MAX = 1;
let iteration = 0;
Promise.resolve().then(() => {
    console.log('Promise.resolve.then', 'MAINLINE MICROTASK');
});
console.log('START', 'MAINLINE');
const timeout = setInterval(() => {
    console.log('START iteration ' + iteration + ': setInterval', 'TIMERS PHASE');
    if (iteration < ITERATIONS_MAX) {
        setTimeout((iteration) => {
            console.log('TIMER EXPIRED (from iteration ' + iteration + '): setInterval.setTimeout', 'TIMERS PHASE');
            Promise.resolve().then(() => {
                console.log('setInterval.setTimeout.Promise.resolve.then', 'TIMERS PHASE MICROTASK');
            });
        }, 0, iteration);
        fs.readdir('../tasks', (err, files) => {
            if (err) throw err;
            console.log('fs.readdir() callback: Directory contains: ' + files.length + ' files', 'POLL PHASE');
            Promise.resolve().then(() => {
                console.log('setInterval.fs.readdir.Promise.resolve.then', 'POLL PHASE MICROTASK');
            });
        });
        setImmediate(() => {
            console.log('setInterval.setImmediate', 'CHECK PHASE');
            Promise.resolve().then(() => {
                console.log('setInterval.setTimeout.Promise.resolve.then', 'CHECK PHASE MICROTASK');
            });
        });
    } else {
        console.log('Max interval count exceeded. Goodbye.', 'TIMERS PHASE');
        clearInterval(timeout);
    }
    console.log('END iteration ' + iteration + ': setInterval', 'TIMERS PHASE');
    iteration++;
}, 0);
console.log('END', 'MAINLINE');
