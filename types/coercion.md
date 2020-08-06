# Type Coercion

- converting a certain type, to another type
- == compares values, coerce types to compare
- === is strict comparison
- if(1) coerces 1 to true, if(0) coerces 0 to false

# Nuances

- -0 === +0 is true
- Object.is(-0, +0) is false
- NaN === NaN is false
- Object.is(NaN, NaN) is true
