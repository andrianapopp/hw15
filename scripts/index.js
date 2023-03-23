//1.
for (let i = 10; i <= 20; i++) {
    console.log(i + " ")
}
//2.
for (let i = 10; i <= 20; i++) {
    console.log(i * i + " ")
}
//3
for (let i = 10; i <= 20; i++){
    let multiplication = i * 7
    console.log(`${i} * 7 = ${multiplication}`)
}
//4
let sum = 0
for(let i = 1; i <= 15; i++){
    sum += i
}
console.log(sum)
5
let multi = 1
for (let i = 15; i <= 35; i++){
    multi *= i
}
console.log(multi)
6
let sum = 0
let numOfNums = 0
for (let i = 1; i <=500; i++){
    sum += i
    numOfNums ++
}
let averageArithmetic = sum / nmOfNums
console.log (averageArithmetic)
//7
let sum = 0
for (let i=30; i <=80; i++){
    if (i % 2 ===0){
        sum += i
    }
}
console.log(sum)
//8
for (let i=100; i <=200; i++){
    if (i % 3 ===0){
        console.log(i + " ")
    }
}
//9
const a = prompt(`Natural number`)
for (let i=1; i <= a; i++){
    if (a % i === 0)
        console.log(i)
}
10//11
const a = prompt(`Natural number`)

let divisors = []
let evenDivisors = 0
let sumOfEvenDivisors = 0

for (let i=1; i <= a; i++){
    if (a % i === 0)
        divisors.push(i)
    if (evenDivisors % 2 === 0){
        evenDivisors++
        sumOfEvenDivisors +=i
    }
}

console.log(divisors)
console.log(evenDivisors)
console.log(sumOfEvenDivisors)
const a = prompt(`Natural number`)

let divisors = []
for (let i=1; i <= a; i++) {
    if (a % i === 0)
        divisors.push(i)
}
console.log(divisors)

let evenDivisors = 0
let sumOfEvenDivisors = 0
for (let i=1; i <= a; i++){
    if (evenDivisors % 2 === 0) {
        evenDivisors++
        sumOfEvenDivisors += i
    }
}
console.log(evenDivisors)
console.log(sumOfEvenDivisors)
//12.
for (let i=1; i<=10; i++) {
    let j = 1
    while (j<=10) {
        console.log(i + " * " + j + " = " + i*j);
        j++;
    }
}

