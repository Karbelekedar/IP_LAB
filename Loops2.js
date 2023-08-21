

// Function: Console Log "Hello World!!"
document.getElementById('btnHello').addEventListener('click', function () {
    console.log("Hello World!!");
  });
  
  // Conditional statement
  document.getElementById('btnConditional').addEventListener('click', function () {
    let age = 25;
    if (age >= 18) {
      console.log("You are an adult.");
    } else {
      console.log("You are a minor.");
    }
  });
  
  // For loop
  document.getElementById('btnForLoop').addEventListener('click', function () {
    console.log("For loop:");
    for (let i = 1; i <= 5; i++) {
      console.log(i);
    }
  });
  
  // For-in loop
  document.getElementById('btnForInLoop').addEventListener('click', function () {
    const numbers2 = [1, 2, 3, 4, 5, 6];
    console.log("For-in loop:");
    for (let index in numbers2) {
      console.log(index + ": " + numbers2[index]);
    }
  });
  
  // For-of loop
  document.getElementById('btnForOfLoop').addEventListener('click', function () {
    console.log("For-of loop:");
    const numbers = [1, 2, 3, 4, 5];
    for (let num of numbers) {
      console.log(num);
    }
  });
  
  // forEach loop
  document.getElementById('btnForEachLoop').addEventListener('click', function () {
    console.log("forEach loop:");
    const numbers = [1, 2, 3, 4, 5];
    numbers.forEach((num) => {
      console.log(num);
    });
  });
  
  // Default parameter
  document.getElementById('btnDefaultParams').addEventListener('click', function () {
    console.log("Default params");
    function greet(name = "Anonymous") {
      console.log(`Hello, ${name}!`);
    }
    greet("John");
    greet();
  });
  
  // Rest parameters
  document.getElementById('btnRestParams').addEventListener('click', function () {
    console.log("Rest Params");
    const sum = (...args) => {
      let total = 0;
      for (let i = 0; i < args.length; i++) {
        total += args[i];
      }
      return total;
    };
    console.log(sum(1, 2, 3, 4,10));
  });
  
  // Anonymous function
  document.getElementById('btnAnonymousFunc').addEventListener('click', function () {
    console.log("Anonymous Functions");
    const multiply = function (a, b) {
      return a * b;
    };
    console.log(multiply(3, 4));
  });
  
  
  
  // Arrow functions
  document.getElementById('btnArrowFunc').addEventListener('click', function () {
    const multiplication = (a, b) => a * b;
    console.log(multiplication(3, 4));
  });

  // Function Constructor 
  const sum = new Function('a', 'b', 'return a + b');

  console.log(sum(2, 6));

  // Arrow with 0 args
  let zero = () => console.log("No Args");
  zero();



  // Arrow with one args
  let one = x => console.log(x);
  one("One argument")

  // Arrow as expressions
   let age = 90  
   let enter = (age < 18) ? 
   () => console.log("Not Eligible"):
   () => console.log("Eligible");
   enter();
   

   // multi line arrow functions
   let mod = (a, b) => {
        let res = a % b;
        return res;
   }

   let res1 = mod(3,10);
   console.log(res1);


   // Parameterized functions
   function myFunction(x, y = 10) {
    return console.log(x+y);

  }
  myFunction(5);

  function myFunction2(x, y) {
    return console.log(x+y);

  }
  myFunction2(5);
 

  