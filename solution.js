// a function called sum that takes in two numbers as arguments and returns their sum.

function sum(x, y) {
    return x + y;
}

const num1 = 5;
const num2 = 3;
const result = sum(num1, num2);
console.log(`The sum of ${num1} and ${num2} is: ${result}`);


// a function called nextNumber that takes in a number as an argument, increments it by 1 to find the next number, and then returns the next number.
function nextNumber(num0) {
    return num0 + 1;
}

console.log(nextNumber(5));





// a function called rectanglePerimeter that takes in the length and width as arguments and returns the perimeter of the rectangle.

function num(length, width) {
    return 2 * (length + width); 
  }
  
  const length = 9; 
  const width = 8; 
  const perimeter = num(length, width); 
  
  console.log(`The perimeter of the rectangle is: ${perimeter}`);

// a function called returnSomethingToMe that returns the string "something" followed by a space " " followed by the string that was passed into the function.

function returnSomethingToMe(str) {
    return "something " + str;
  }
  
  // Example usage:
  const output = returnSomethingToMe("is better than nothing");
  console.log(output); 
  

//   Bob and Jane want to know who has a bigger BMI than the other. Write a function called greaterBMI that will take in as the first arguement the BMI of Bob and as the second Argument the BMI of Jane. If Bob has a bigger BMI than jane, your function should return the string "Bob", if Jane has a bigger BMI than Bob, it should return the string "Jane", if they have the same BMI, it should return the string "EqualF

function BMI(bobBMI, janeBMI) {
   
    if (bobBMI > janeBMI) {
        return "Bob";
        } else if (janeBMI > bobBMI) {
            return "Jane";
            } else {
                return "Equal";
                }
}
let bobBMI = 25;
let janeBMI = 22;
 console.log(BMI(bobBMI, janeBMI));


//  You are counting points for a basketball game, 2 points are awarded for every 2 pointer and 3 points for every 3 pointer. Write a function called basketBallPoints, the first argument should be the number of two pointers scored by the team and the second argument the number of three pointers scored by the team. This function returns the final points for the team.

function basketBallPoints(two, three) {

        return (two * twoPointers) + (three * threePointers);
        }
        
        
let twoPointers = 5;
let threePointers = 3;

 console.log(twoPointers * 2 + 3 * threePointers)

//  Given two numbers, write a function called isSumMoreThan100 return true if their sum is greater than 100 and false if their sum is less than 100.
function isSumMoreThan100(num1, num2) {
    const sum = num1 + num2;
    if (sum >= 100) {
        return true;
    } else {
        return false;
    }
}


const number1 = 60;
const number2 = 70;
console.log(isSumMoreThan100(number1, number2));

// Given that 1 minute is equal to 60 seconds. Write a function called convertToSeconds that takes in the number of minutes as an arguments and returns the seconds equivalent in the format x seconds e.g 120 seconds, 300 seconds. e.t.c. If the seconds equivalent is 0, then it should just return 0, if the seconds equivalent is 1, then it should return 1, if the seconds equivalent is more than 1, then it should return with the string "seconds"

function convertToSeconds(minutes) {
    let seconds = minutes * 60;
    if (seconds === 0) {
        return "0";
        } else if (seconds === 1) {
            return "1 * 60";
}
}
 const minutes = 1
 console.log((minutes * 60) + " " + "seconds" );

// Write a function called greater that takes in three numbers as arguments and returns the greatest number among the three. If they are all equal, it should return any of them.
 function greater() {
    let num1 = 6
    let num2 = 23
    let num3 = 40

    if (num1 >= num2 && num1 >= num3) {
        return num1;
        } else if (num2 >= num1 && num2 >= num3) {
            return num2;
            } else {
                return num3;
            }
 }
  console.log(greater())

// Write a function called least that takes in three numbers as arguments and returns the least among the three. If they are all equal, it should return any of them

function least() {
    let num1 = 6
    let num2 = 23
    let num3 = 40
    if (num1 <= num2 && num1 <= num3) {
        return num1;
        } else if (num2 <= num1 && num2 <= num3) {
            return num2;
            } else {
                return num3;
}
}
 console.log(least())

//  Write a function called footballPoints that returns the number of points a football team has obtained so far, the first argument for this function is the number of games a team has won, the second argument is the number of games the team has drawn and the third arguement is the number of times the team has lost. 3 points are awarded for every game won, 1 point for every game draw and 0 points for every game lost.

function footballPoints(win, draw, lost) {
    let winPoints = nu1 * 3
    let drawPoints = nu2 * 1
    let lostPoints = nu3 * 0

    return winPoints + drawPoints + lostPoints
    }

    const nu1 = 3;
    const nu2 = 2;
    const nu3 = 4;
   console.log (footballPoints (nu1 + nu2 + nu3));

// Write a function called isEven that takes in a number as an argument, the function returns true if a number is even and returns false if a number is odd. Use this function to log to the console all the even numbers between 0 and 101.

function isEven() {
    let num = 50
    if (num % 2 === 0) {
        return true;
        } else {
            return false;

}
}
console.log(isEven())