import os from 'os';
import { performance, PerformanceObserver } from 'perf_hooks';
import { Worker } from 'worker_threads';

const sendResult = (number) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', {
      workerData: {
        number
      }
    });

    worker.on('message', (msg) => {
      console.log(worker.threadId);
      return msg;
    });

    worker.on('error', (err) => {
      reject(err);
    });

    worker.on('exit', () => {
      console.log('Завершил работу');
    });
  });
};

const performCalculations = async () => {
  try {
    // Write your code here
    const numOfCpus = os.cpus().length;
    const measures = [];
    const obs = new PerformanceObserver((list) => {
      measures.push(...list.getEntries());
      obs.disconnect();
    });
    obs.observe({ entryTypes: ['measure'] });
    performance.mark('start');
    let resultPromises = [];
    for (let index = 0; index < numOfCpus; index++) {
      resultPromises.push(sendResult(10 + index));
    }
    Promise.all(resultPromises);

    performance.mark('end');
    performance.measure('main', 'start', 'end');

    console.log('🚀 ~ file: main.js ~ line 31 ~ performCalculations ~ measure', measures);
  } catch (error) {
    console.log(error.message);
  }
};

performCalculations();
