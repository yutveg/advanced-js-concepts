### Dynamically and Statically Typed Languages

# Types (primitives)

- numbers
- booleans
- strings
- undefined
- null

# Other Types

- symbol('just me')
- object {} (arrays and functions are objects)

# Everything in Javascript is an Object

- many built in objects
- some primitive types are basically wrapped in object wrapper
- e.g; Boolean(true).toString(), String('string').toString()

# Array behavior under the hood

- var array = ['1', '2', '3']
- var array = {
  0: '1',
  1: '2',
  2: '3'
  }

- How can we tell if it's an array or object?
- Array.isArray([]) === true
