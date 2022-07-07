# Assignment: Node.js basics

## Description

Your task is to complete several simple tasks to learn Node.js basics

Assignment contains several nested folders inside `src`. Your task is to implement necessary functionality inside them

## Technical requirements

- Any external tools and libraries are prohibited
- Use 16 LTS version of Node.js
- Don't change signature of pre-written functions (e.g. don't rename them, don't remove export, don't make them synchronous, etc.)
- Prefer asynchronous API whenever possible

## Subtasks

### Child Processes (src/cp)

You should implement several functions in dedicated files

- `cp.js` - implement function `spawnChildProcess` that receives array of arguments `args` and creates child process from file `script.js`, passing these `args` to it. This function should create IPC-channel between `stdin` and `stdout` of master process and child process:
    - child process `stdin` should receive input from master process `stdin`
    - child process `stdout` should send data to master process `stdout`
