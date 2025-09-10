// let a = 10;
// let b = 100;

// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a x b =", a * b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b);

//Unary secion

// let a = 10, b =4;
// console.log("a =", a--);
// console.log(a)

//Assignment operators

// let a = 10, b =4;
// a **= 88;
// console.log("a =", a)

//Comparision operators
// let a = 10, b ="4";
// console.log("a >= b", a<=b);

//Conditional Statements

// let a = 21;

// let result =  a>=18 ? "adult" : "minor";
// console.log(result);

// let score = prompt("Enter your Score to know");
// let grade;

// if (score >= 97) {
//     grade = "A+";
// } else if  (score >90 && score <= 96){
//     grade = "A";
// }
//  else if  (score >=75 && score <=89) {
//     grade = "B";
// }  else if(score >=50 && score <=74) {
//     grade = "C";
// } else if (score >=35 && score <=49) {
//     grade = "D";
// } else if(score <=34) {
//     grade = "F";
// }
// console.log("according to your score, your grade is :", grade);

// Loops
// for (let count = 1; count<= 10; count++) {
//     console.log("Manish");
//
// console.log("Loop has ended");
// sum = 0;
// let m;
// for (m = 1; m <= 5; m++) {
//     sum = sum + m;
// }
// console.log(sum);

// for (i = 1; i<=10; i++) {
//     console.log("i = ", i);
// }

// let i = 1;
// while (i<=5) {
//     console.log("i = ",i);
//     i++;
// }

// let i = 90;
// do {
//     console.log("manish");
//     i++;
// } while (i<=5);

// For Of looop
// let str = "CHANDANA MANISH";
// let size = 0;
// for (let i of str) {
//     console.log("i=", i);
//     size++;
// }
// console.log("Sized of Str is :", size);

// for (i = 0; i<=100; i++) {
//     if (i % 2 !== 0) {
//         console.log("Odd num :", i);
//     }
//

// let num = 110724;
// let user = prompt("Guess the Right number and win :");

// while (user != num) {
//     user = prompt("you guessed wrong. Try again :");
// }
// console.log("Congratulations You Guessed right, it's 110724");

// let str = `The price of the pen is ${5}`;
// console.log(str);

// let names = ["Manish", "Chandana", "Sanjana", "Nishchitha","Vimala"];
// for (let i = 0; i< names.length; i++) {
//     console.log(names[i]);
// }

// let  marks = [95, 86, 64, 78, 59, 44];
// let sum = 0;
// for (let val of marks) {
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`The average marks of the class is ${avg}`);

// function divisionOfTwoNUm(x, y) {
//   d = x / y;
//   return d;
// }
// let result = divisionOfTwoNUm(10, 5);
// console.log(result);

// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countVowels("Manish");

// let num = [23,45,76,32,89];

// num.map((val) => {
//   console.log(val * val);
// });

// let arr = [1,2,3,4,5,6,7,8,9];

// let evenArr = arr.filter((val) => {
//   return val % 2 !==0;
// });
// console.log(evenArr);

// let num = [1,2,3,4,5,6,7,8,9,88,110724];

// let output = num.reduce((res, cur) => {
//   return res > cur ? res : cur;
// });

// console.log(output);

// let num = [83, 57, 92, 66, 74, 99, 53, 61, 88, 79];

// let sort = num.filter((val) => {
//   return val > 90;
// });

// console.log(sort);

// let num = [7, 18, 3, 22, 11, 1, 15, 20];

// let out = num.reduce((pre, cur) => {
//   return pre * cur;
// });

// console.log(out);

// let n = prompt("Enter a Number");
// let arr =[];

// for (i=1; i<=n; i++) {
//   arr[i-1] = i;
// }

// console.log(arr);

// let add = arr.reduce((pre, cur) => {
//   return pre + cur;
// })

// console.log("The sum of n' Numbers is :", add);

// let mul = arr.reduce((pre, cur) => {
//   return pre * cur;
// })

// console.log("The product of n' Numbers is :", mul);

// let head = document.querySelector("h1");

// head.style.backgroundColor = "red";

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me !";

// document.querySelector("h1").append(newBtn);

// let btn = document.querySelector(".modebtn");
// let curr = "light";

// btn.addEventListener("click", () => {
//   if (curr === "light") {
//     curr = "dark";
//     document.querySelector("body").style.backgroundColor = "black";
//   } else {
//     curr = "light";
//     document.querySelector("body").style.backgroundColor = "white";
//   }
//   console.log(curr);
// });

// function sum(a, b) {
//   console.log(a+b);
// };

// function calculator(a, b, sumCallback) {
//   sumCallback(a,b);
// };

// calculator(1,3, sum);

function getData(dataID, getNextData) {
  setTimeout(() => {
    console.log(dataID);
    if(getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, ()=> {
  getData(2);
});