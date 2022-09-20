History
Long time ago there used to be blocking threads paradigm on the server. For each request to the server a dedicated thread was created that was working on it from start to finish. For example parsing -> request DB=> forming response and only then that thread could be re-used. That approach had limitations, main being bad scalability with number of requests. IF we get 1kk requests we need 1kk threads, and threads are not for free. They eat memory and as we are switching between them processing cost as well. 
Later we moved away from that paradigm and started using one non-blocking async thread that is processing all our incoming requests. For some especially heavy operations we do create and assign threads, and we call it Worker Threads.
NodeJS is written in C/C++ for performance reasons. It utilizes google's V8 JS engine and libuv. JS engine is responsible for JS and libuv does organizational stuff, such as thread-pools, event loop and async I/O. Besides that it has a standart library that is similar but different to web api you might've worked with as a frontend dev.


TODO: Event queue, callstack and worker threads in node