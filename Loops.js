console.log("Hello World!!")

// Conditional statement 
let age = 25;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// For loop 
console.log("For loop:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// For-in loop 
const numbers2 = [1, 2, 3, 4, 5, 6];

console.log("For-in loop:");
for (let index in numbers2) {
  console.log(index + ": " + numbers2[index]);
}

// For-of loop  
console.log("For-of loop:");
const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  console.log(num);
}

// forEach loop 
console.log("forEach loop:");
numbers.forEach((num) => {
  console.log(num);
});

//  default parameter
console.log("Default params");
function greet(name = "Anonymous") {
  console.log(`Hello, ${name}!`);
}

greet("John"); 
greet(); 


// rest parameters
console.log("Rest Params");
const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  };
  
  
console.log(sum(1, 2, 3, 4));

// anonymous function
console.log("Anonymous Functions");
const multiply = function(a, b) {
    return a * b;
};
  
console.log(multiply(3, 4));
  
// callback function
function greet2(name, callback) {
    console.log(`Hello, ${name}!`);
    sayGoodbye();
}
  
function sayGoodbye() {
    console.log("Goodbye!");
}
  
greet2("John", sayGoodbye);

// Arrow functions 
const multiplication = (a, b) => a * b;

console.log(multiplication(3, 4));

  
  