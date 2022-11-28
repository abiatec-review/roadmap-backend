// process.nextTick()

const fs = require('fs');
const ITERATIONS_MAX = 1;
let iteration = 0;
process.nextTick(() => {
    console.log('process.nextTick', 'MAINLINE MICROTASK');
});
console.log('START', 'MAINLINE');
const timeout = setInterval(() => {
    console.log('START iteration ' + iteration + ': setInterval', 'TIMERS PHASE');
    if (iteration < ITERATIONS_MAX) {
        setTimeout((iteration) => {
            console.log('TIMER EXPIRED (from iteration ' + iteration + '): setInterval.setTimeout', 'TIMERS PHASE');
            process.nextTick(() => {
                console.log('setInterval.setTimeout.process.nextTick', 'TIMERS PHASE MICROTASK');
            });
        }, 0, iteration);
        fs.readdir('../tasks', (err, files) => {
            console.log('fs.readdir() callback: Directory contains: ' + files.length + ' files', 'POLL PHASE');
            process.nextTick(() => {
                console.log('setInterval.fs.readdir.process.nextTick', 'POLL PHASE MICROTASK');
            });
        });
        setImmediate(() => {
            console.log('setInterval.setImmediate', 'CHECK PHASE');
            process.nextTick(() => {
                console.log('setInterval.setTimeout.process.nextTick', 'CHECK PHASE MICROTASK');
            });
        });
    } else {
        console.log('Max interval count exceeded. Goodbye.', 'TIMERS PHASE');
        clearInterval(timeout);
    }
    console.log('END iteration ' + iteration + ': setInterval', 'TIMERS PHASE');
    iteration++;
}, 0);
console.log('MAINLINE: END');
