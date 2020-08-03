### Pass By Reference Vs By Value

# Pass by value (primitive types)

- Passes the actual value via copying
- var a = 3
- a now holds the address to where 3 sits in memory
- var b = a
- b now holds a reference to the value 3
- same as, var b = 3

# Pass by reference (objects)

- Passes a reference, not a copy (saves memory space)
- let obj1 = {name: 'Yao', password: '123'}
- let obj2 = obj1
- obj2.password = 'easypeasy'
