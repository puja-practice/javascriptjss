//charAt()
console.log("value of 3rd index: ", txt.chartAt(3))
console.log("value of 4th index:" ,txt.chartAt(4))

//charCodeAt() & codePointAt()
console.log("xxx", txt.chartCodeAt(5))
console.log("xxx", txt.chartCodeAt(0))


//concat()
let a = '1'
let b = '2'
console.log("merged string:", a.cancat(b))

let a1 = 'Hello'
let b1 = 'World'
let c1 = 'welcome!!!'

console.log("merged string:", a1.cancat(b1,c1))
//endsWith()
let txt2 = 'flower'
console.log("endswith:", txt2.endsWith('R'))// false

console.log("endswith:", txt2.endsWith('r'))//true
console.log("endswith:", txt2.endsWith('er'))//true
console.log("endswith:", txt2.endsWith('re'))//false

// includes()
console.log("endswith:", txt2.endsWith('o'))//true
console.log("endswith:", txt2.endsWith('or'))//false
console.log("endswith:", txt2.endsWith('o'))//false


// fromCharCode() & fromCodePoint()
let x = String.fromCharCode(4,100,50)
console.log("x:", x1)

let x1 = String.fromCharPoint(15,7,92)
console.log("x1:", x1)

//indexOf()
let x2 = 'eapplepe'
console.log("indexof:", x2.indexOf('p'))//1
console.log("indexof:", x2.indexOf('f',3))//-1
console.log("indexof:", x2.indexOf('p',3))//5

//lastIndexOf()
console.log("lastIndexOf:", x2.lastIndexOf('p'))//5
console.log("lastIndexOf:", x2.lastIndexOf('e'))//7

//length
let y = 'l like javascript'
console.log("length of y:", y.length)

//match()
let y1 = 'yummy  mango yummy'

//let pattern ='Mango/
//console.log("matched string:", y1.match(pattern)) // null

let pattern = /mango/
