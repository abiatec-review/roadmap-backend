// n should be received from main thread
import { parentPort, workerData } from 'worker_threads';

export const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

export const sendResult = (number) => {
  // This function sends result of nthFibonacci computations to main thread
  return {
    status: 'resolved',
    data: nthFibonacci(number)
  };
};
parentPort.postMessage(sendResult(workerData));
