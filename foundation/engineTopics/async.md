### Single Threaded

- only one set of instructions executed at a time
- one call stack = single thread
- syncronous

### Web API

- DOM
- fetch()
- setTimeout()

### Browsers

- use low level lang like C++ to perform background operations
- add asyncronous functionality

### Runtime

- web API handles async stuff
- call back queue stores async callbacks
- event loop feeds callback into call stack when empty
