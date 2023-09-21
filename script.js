// 1.

// Write a function that takes in a number as a parameter and returns
// "Odd" if the number received is an odd number and "Even" if the number
// received is even. Use arrow function syntax.

// Console log the function call a few times with both even and odd numbers to
// show that it's working.

// Oppgave: 1
let number = Math.round(Math.random() * 10000)
console.log(number)
const oddOrEven = (number) => {
    if (number % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}
console.log(oddOrEven(number))

// 2.

// Make a variable called userTitle and set the content equal to "Mr." if userMale is true,
// or to "Mrs." if userMale is false. Use the TERNARY conditional to do this:

// const variable = statement ? "this if true" : "this if not true"

// Try changing userMale to both true and false and console.log your new variable,
// to see that your conditional is working.

// Oppgave: 2
const userTitle = () => {
    üserMale = true
    userMale = false
    userMale == true ? console.log("Mr") : console.log("Mrs")
    return userMale
}
userTitle()

// 3.

// Write a function that takes in 2 parameters:

//  - A name (string)
//  - An hour of the day (number)

// The function should return:
// "Good night (name received)" if the hour received is 0-6
// "Good morning (name received)" if the hour received is 6-12
// "Good day (name received)" if the hour received is 12-18
// "Good evening (name received)" if the hour received is 18-24
// "Invalid time" if the hour received is greater than 24

// Use whichever function syntax you want.
// Use template literal in your return: `This is a template literal ${variable}`

// Example console.log(yourFunction("Gunnar", 19)) should console log Good evening Gunnar
// Console log the function a few times to show that it's working.

// Oppgave: 3
let hour = Math.floor(Math.random() * 24)
let minutes = Math.floor(Math.random() * 60)
const greeting = () => {
    let name = "Magnus"
    hour = hour
    hour <= 6 & hour >= 0 ? console.log(`good night ${name} `) :
        hour <= 12 & hour > 6 ? console.log(`good morning ${name} `) :
            hour <= 18 & hour > 12 ? console.log(`good day ${name} `) :
                hour <= 23 & hour > 18 ? console.log(`good evening ${name} `) :
                    console.log(`${"invalid time"} `)
    return greeting
}
greeting()

const time = () => {
    hour = hour
    minutes = minutes
    hour <= 9 & hour >= 0 & minutes >= 10 & minutes <= 59 ? console.log(`The time is 0${hour}:${minutes}`) :
        hour <= 9 & hour >= 0 & minutes <= 9 & minutes >= 0 ? console.log(`The time is 0${hour}:0${minutes}`) :
            hour >= 10 & hour <= 23 & minutes <= 9 & minutes >= 0 ? console.log(`The time is ${hour}:0${minutes}`) :
                hour >= 10 & hour <= 23 & minutes >= 10 & minutes <= 59 ? console.log(`The time is ${hour}:${minutes}`) :
                    console.log(`${"invalid time"} `)
    return time
}
time()

// 4.

// Write a function that takes in 2 numbers as parameters.

// In your function, check which of the numbers received is the largest,
// then return the sum of the largest number divided by the smaller.

// Use arrow function syntax.

// Example: your function receives 13 and 24, it should return the sum of 24/13

// Oppgve: 4
const divdeLargestNumber = () => {
    let num1 = 12470
    let num2 = 43
    num1 > num2 ? console.log(num1 / num2) : console.log(num2 / num1)
    return divdeLargestNumber
}
divdeLargestNumber()

// 5.

// Write an IF/ELSE conditional statement that checks whether username is empty,
// that the user age is 18+, and that userIsBlocked is false.

// (HINT: Use the && (logical AND) to check several things in one IF statement)

// If all of these conditions are true, change the userIsLoggedIn variable to true and
// and the goToPage variable to "/home" then console.log a welcome message.

// If any of the conditions for logging in are not met, console.log an error message.

// Try changing the values of the variables to make sure your IF/ELSE conditional
// can handle all cases correctly

// Oppgave: 5
const userName = () => {
    let userName = " "
    let age = 20
    let userIsBlocked = false
    let userIsLoggedIn = false
    goToPage = "/not home"
    userName == "" || age <= 17 || userIsBlocked == true ? userIsLoggedIn = false : userIsLoggedIn = true
    userIsLoggedIn == true ? goToPage = "/home" && console.log("Welcome") : console.log("You are not allowed to see this page")
}
userName()
// 6.

// EXTRA CHALLENGE

// This is not mandatory, only for those who want an extra challenge.

// Make a function called coolMaker that takes in 1 parameter.

// If the parameter received is a string:
// Return the string with "😎" added to the beginning and end

// If the parameter received is a number:
// Double it, convert it to a string and return it with "😎" added to the beginning and end.

// If the parameter received is a boolean:
// If the parameter received is true, return "😎Yeah😎". If the parameter received is false,
// return "😎Chill😎"

// If the parameter received is any other datatype:
// Return "😎Primitive values only😎"

// Use arrow function syntax.

// Console log the function call with a few different datatypes to show that it's working


// Oppgave: 6 EXTRA CHALLENGE

coolMaker = (param) => {
    param === true ? console.log(`😎Yeah😎`) :
        param === false ? console.log(`😎chill😎`) :
            typeof param === "string" ? console.log(`😎${param}😎`) :
                typeof param === "number" ? console.log(`😎${param *= 2}😎`) :
                    console.log(`😎Primitive values only😎`)
    return param
}
coolMaker(1.35)
coolMaker(true)
coolMaker(false)
coolMaker("Hei duuuu")
coolMaker(10)
coolMaker("20")
coolMaker("50")


function makeCool(para) {
    if (para === true) {
        console.log(`😎Yeah😎`)
    }
    else if (para === false) {
        console.log(`😎Chill😎`)
    }
    else if (typeof para === "string") {
        console.log(`😎${para}😎`)
    }
    else if (typeof para === "number") {
        console.log(`😎${para *= 2}😎`)
    }
    else (console.log(`😎Primitive values only😎`))
    return para
}
makeCool()
makeCool(true)
makeCool(false)
makeCool("Hei")
makeCool(10)
makeCool("50")