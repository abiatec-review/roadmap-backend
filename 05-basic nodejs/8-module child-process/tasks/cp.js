import { fork, spawn } from 'child_process';

export const spawnChildProcess = async (args) => {
  // Write your code here
  const forkProcess = fork('./files/script.js', args);

  forkProcess.on('error', (error) => {
    console.error(`error: ${error.message}`);
  });

  forkProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
};
spawnChildProcess(['Hello world', 'Close']);
