//1.
for (let i = 10; i <= 20; i++) {
    document.write(i + " ")
}
//2.
for (let i = 10; i <= 20; i++) {
    document.write(i * i + " ")
}
//3
for (let i = 10; i <= 20; i++){
    let multiplication = i * 7
    document.write(`${i} * 7 = ${multiplication}`)
}
//4
let sum = 0
for(let i = 1; i <= 15; i++){
    sum += i
}
document.write(sum)
//5
let multi = 1
for (let i = 15; i <= 35; i++){
    multi *= i
}
document.write(multi)
//6
let sum = 0
let numOfNums = 0
for (let i = 1; i <=500; i++){
    sum += i
    numOfNums ++
}
let averageArithmetic = sum / nmOfNums
document.write (averageArithmetic)
//7
let sum = 0
for (let i=30; i <=80; i++){
    if (i % 2 ===0){
        sum += i
    }
}
document.write(sum)
//8
for (let i=100; i <=200; i++){
    if (i % 3 ===0){
        document.write(i + " ")
    }
}
//9
const a = prompt(`Natural number`)
for (let i=1; i <= a; i++){
    if (a % i === 0)
        document.write(i)
}
//10//11
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

document.write(divisors)
document.write(evenDivisors)
document.write(sumOfEvenDivisors)
const a = prompt(`Natural number`)

let divisors = []
for (let i=1; i <= a; i++) {
    if (a % i === 0)
        divisors.push(i)
}
document.write(divisors)

let evenDivisors = 0
let sumOfEvenDivisors = 0
for (let i=1; i <= a; i++){
    if (evenDivisors % 2 === 0) {
        evenDivisors++
        sumOfEvenDivisors += i
    }
}
document.write(evenDivisors)
document.write(sumOfEvenDivisors)
//12.
for (let i=1; i<=10; i++) {
    let j = 1
    while (j<=10) {
        document.write(i + " * " + j + " = " + i*j);
        j++;
    }
}

