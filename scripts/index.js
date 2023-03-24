//1.
for (let i = 10; i <= 20; i++) {
    document.write(i + " " + "<br>")
}
//2.
for (let i = 10; i <= 20; i++) {
    document.write(i * i + " " + "<br>")
}
//3
for (let i = 10; i <= 20; i++){
    let multiplication3 = i * 7
    document.write(`${i} * 7 = ${multiplication3} <br>`)
}
//4
let sum4 = 0
for(let i = 1; i <= 15; i++){
    sum4 += i
}
document.write(sum4 + "<br>")
//5
let multi5 = 1
for (let i = 15; i <= 35; i++){
    multi5 *= i
}
document.write(multi5 + "<br>")
//6
let sum6 = 0
let numOfNums6 = 0
for (let i = 1; i <=500; i++){
    sum6 += i
    numOfNums6 ++
}
let averageArithmetic6 = sum6 / numOfNums6
document.write (averageArithmetic6 + "<br>")
//7
let sum7 = 0
for (let i=30; i <=80; i++){
    if (i % 2 ===0){
        sum7 += i
    }
}
document.write(sum7 + "<br>")
//8
for (let i=100; i <=200; i++){
    if (i % 3 ===0){
        document.write(i + " " + "<br>")
    }
}
//9
const a9 = prompt(`Natural number`)
for (let i=1; i <= a9; i++){
    if (a9 % i === 0)
        document.write(i + "" + "<br>")
}
//10
const a10 = prompt(`Natural number`)

let divisors = []
let evenDivisors = 0
let sumOfEvenDivisors = 0

for (let i=1; i <= a10; i++) {
    if (a10 % i === 0)
        divisors.push(i)
}
for (let i=0; i <divisors.length; i++){
    if (divisors [i] % 2 === 0){
        evenDivisors++
        sumOfEvenDivisors += divisors [i]
    }
}

document.write(divisors)
document.write(evenDivisors)
document.write(sumOfEvenDivisors)
//11
const a11 = prompt(`Natural number`)
let divisors11 = []
for (let i=1; i <= a11; i++) {
    if (a11 % i === 0)
        divisors11.push(i)
}
document.write(divisors11 + "<br>")

let evenDivisors11 = 0
let sumOfEvenDivisors11 = 0
for (let i=1; i <= divisors11.length; i++){
    if (divisors11[i] % 2 === 0) {
        evenDivisors11++
        sumOfEvenDivisors11 += i
    }
}
document.write(evenDivisors11 + "<br>")
document.write(sumOfEvenDivisors11 + "<br>")
//12.
for (let i=1; i<=10; i++) {
    let j = 1
    while (j<=10) {
        document.write(i + " * " + j + " = " + i*j + "<br>");
        j++;
    }
}

