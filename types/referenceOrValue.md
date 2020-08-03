### Pass By Reference Vs By Value

# Pass by value (primitive types)

- Passes the actual value via copying
- var a = 3
- a now holds the address to where 3 sits in memory
- var b = a
- b now holds a reference to the value 3
- same as, var b = 3

# Pass by reference (objects, arrays, function)

- Passes a reference, not a copy (saves memory space)
- let obj1 = {name: 'Yao', password: '123'}
- let obj2 = obj1
- obj2.password = 'easypeasy'

# To copy arrays

- var c = [1, 2, 3]
- var d = [].concat(c)

# To copy objects (shallow)

- let obj = {a: 'a', b: 'b', c: { deep: "copy me" }}
- let clone = Object.assign({}, obj)
- let clone2 = {...obj}
