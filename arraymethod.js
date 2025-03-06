// let arr = ['hello', 65, 53, 98, false]
// console.log("arr",arr,"datatype:", typeof(arr))

// another way of creating arrray
// let arr1 = neew Array ('hi', 'bye', 54, 67, 23, true)
// console.log("arr", arr1, "datatype:", typeof(arr1))

// how to iterate an Array
// for(let i=0; i<arr.length; i++){
//     console.log("value:", arr[i], "index:", i)//hello 65 53.98 false
// }


// array methods
let color =['red', 'white', 'blue', 'black']
console.log("color", color, "length:", color.length)

//push() unshift()
color.push('brown')
console.log("color",color,"length:", color.length)

color.unshift('purple')
console.log("color",color,"length:", color.length)

//pop & shift()
color.pop()
console.log("color", color,"length:", color.length)


/color.shift()
color.log("color", color,"length:",color.length)

//splice
x = color.splice(1,2,'yellow', 'green')
console.log("x",x)
console.log("color",color)

//sort()
let num = [67,89,50,42]

 console.log("sorted", num.sort())// by default asscending
 console.log("sort:", num.sort((a,b) => b-a))


 // reverse()
 console.log("reverse", num.reverse())

 // spilt() & reverse() & joiin()

 let x1 = 'apple'
 let y = x1.split('')//['a','p','p','l','e']
 let z = y.reverse('')//['e','l','p','p','a']
 let z1  = z.join('') // 'elppa
 console.log("z1:", z1) // 'elppa'

 // reduce()
 let num1 = [4,5,6,3]
 console.log("reduced:", num1.reduce((acc,item) => acc + item, 0)) 

 //set()
 let dup = [67,54,67,43,53,2,9,2,6,9,2]
 console.log("duplicate:",[...new Set(dup)])

 //filter()
 let even = [5,6,4,3]
 console.log("even number", even.filter((a) => a % 2 === 0))
 console.log("odd number", even.filter((a) => a % 2 !== 0))

 // map() & foreach()
 even.map((Data, index) => console.log("map data:", Data,"index:", index))
 even.forEach((Data, index) => console.log("forEach data:", Data,"index:", index))