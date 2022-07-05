let clone1 = Object.assign({},person)
let clone2 = Object.assign({},person)
let samePerson = person
samePerson.age = age++;
samePerson.country = 'FR';