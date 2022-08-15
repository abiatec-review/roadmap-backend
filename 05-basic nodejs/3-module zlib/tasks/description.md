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

### Zlib (src/zip)

You should implement several functions in dedicated files

- `compress.js` - implement function that compresses file `fileToCompress.txt` to `archive.gz` using `zlib` and Streams API
- `decompress.js` - implement function that decompresses `archive.gz` back to the `fileToCompress.txt` with same content as before compression using `zlib` and Streams API
