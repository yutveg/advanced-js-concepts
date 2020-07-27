### Basic notes on JS

- single-threaded language
- uses callback queue
- "interpreted" language

- many JS engines
- 2008 - V8 was release by Google
- was built to solve the slow google map performance problem
- Brendan Eich created JS (1995) and what is now known as - Spider Monkey (used by Mozilla firefox)
- ECMAScript is overarching standard for JS
- WebAssembly = standard binary executable format

### How the V8 engine works:

1.) Parses the code into an abstract syntax tree
2.) AST goes through interpreter
3.a) (Ignition) Interpreter runs through AST line-by-line spits out Bytecode
3.b) Profiler monitors and watches code as it runs, and notes how it can be optimized.
4.) If code can be optimized, Profiler passes the code to the JIT (Turbo-Fan) compiler and returns the optimized machine code in place of slower Bytecode

### Pros And Cons With Interpreters/Compiler

=================================================
Pro: Interpreters are quick to get up and running. Because: No language conversion needed. Simply interprets and runs commands.

Con: When running same code more than once, can become quite slow. Compiler deals with loops by simplifying code, doesn't call function multiple times, optimizing.

### Notes on Turbo Fan Compiler

- Can try to optimize code, realize it is making a mistake, and deoptimize code which is slower

### Is Javascript an Interpreted Language?

- partially, yes
- but depends on implementation of the JS engine
- could make a JS engine that only compiles
