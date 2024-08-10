// console.log("Hello world");

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ========= Variables =========
// const
// let
// var

// {
//   const a = 10; // let
//   // console.log(a);
// }
// console.log(a);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ========= Data types =========
// string , number , boolean , undefined , null , object

// object - array , object , date

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ========= operators =========
// ========= Arithmetic operators =========
// const a = 10;
// const b = 5;

// console.log(a + b); // Addition
// console.log(a - b); // Subtraction
// console.log(a * b); // Multiplication
// console.log(a / b); // Division
// console.log(a % b); // Modulus (remainder)

// ========= Comparison operators =========
console.log(a > b); // Greater than
console.log(a < b); // Less than
console.log(a >= b); // Greater than or equal to
console.log(a <= b); // Less than or equal to
console.log(a == b); // Equal to
console.log(a === b); // Equal to (strict equality)
console.log(a !== b); // Not equal to (strict inequality)

// a = 10;
// b = "10";
// console.log(a == b);

// ========= Assignment operators =========
// let c = 15;

// c += 3; // c = c + 3
// console.log(c);

// c -= 2; // c = c - 2
// console.log(c);

// c *= 4; // c = c * 4
// console.log(c);

// c /= 2; // c = c / 2
// console.log(c);

// c %= 5; // c = c % 5
// console.log(c);

// ========= Logical operators =========
// const isTrue = true;
// const isFalse = false;

// console.log(isTrue && isFalse); // Logical AND
// console.log(isTrue || isFalse); // Logical OR
// console.log(!isTrue); // Logical NOT

// ========= String concatenation operator =========
// const firstName = "marcello";
// const lastName = "tech";
// console.log(firstName + " " + lastName);

// ========= typeof operator =========
// console.log(typeof firstName); // "string"
// console.log(typeof a); // "number"
// console.log(typeof isTrue); // "boolean"

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ========= conditional statements =========
// ========= Using if, else if, and else statements =========

// const examScore = 75;

// if (examScore >= 90) {
//     console.log("Grade: A");
// }

// // Example of if-else statement
// if (examScore >= 90) {
//     console.log("Grade: A");
// } else {
//     console.log("Grade: B or below");
// }

// // Example of if-else if-else statement
// if (examScore >= 90) {
//   console.log("Grade: A");
// } else if (examScore >= 80) {
//   console.log("Grade: B");
// } else if (examScore >= 70) {
//   console.log("Grade: C");
// } else {
//   console.log("Grade: D or below");
// }

// -----------------------------------------------------------------------------

// const age = 20;

// if (age < 18) {
//   console.log("You are a minor.");
// } else if (age >= 18 && age < 60) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a senior citizen.");
// }

// ========= Conditional (Ternary) operator =========
// let n = 7;
// let result = n % 2 === 0 ? "Even" :  "Odd" ;
// console.log(result);

// ========= Using the switch statement =========
// const dayOfWeek = "Monday";

// switch (dayOfWeek) {
//   case "Monday":
//     console.log("It's the start of the week.");
//     break;
//   case "Tuesday":
//   case "Wednesday":
//   case "Thursday":
//     console.log("It's a regular workday.");
//     break;
//   case "Friday":
//     console.log("It's almost the weekend.");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("It's the weekend!");
//     break;
//   default:
//     console.log("Invalid day of the week.");
//     break;
// }

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ========= loops =========
// ========= Using while loop =========
// let count = 0;

// while (count < 5) {
//   console.log("Count:", count);
//   count++;
// }

// ========= Using do-while loop =========
// let num = 6;

// do {
//   console.log("Number:", num);
//   num++;
// } while (num < 5);

// ------------------------------------------------------------
// let count = 0;
// while (count > 5) {
//   console.log(count)
//   count++;
// };

// do{
//   console.log(count)
//   count++
// } while(count > 5)

// --------------------------------------------------------------------
// ========= Using for loop =========
// for (let i = 0; i < 5; i++) {
//   console.log("Index:", i);
// }

// ==================  example ===================================
// ========= do while =========
// let password = prompt('Enter Your Password')
// while(password !== 'marcello'){
//     password = prompt('plz Enter Your correct Password')
// }
// alert('Go to home page')
// ----------------------------------------------------
// const setPassword = prompt('Set your password')
// let password = prompt('Enter Your Password')

// while(password !== setPassword){
//     password = prompt('plz Enter Your correct Password')
// }
// alert('Go to home page')

// ========= do while =========
// const setPassword = prompt('Set your password');
// let password = prompt('Enter Your Password')

// do {
//   password = prompt('plz Enter Your correct Password');
// } while (password !== setPassword);

// alert('Go to home page');

// ========= for loop =========
// const setPassword = prompt('Set your password');
// let password = prompt('Enter Your Password')

// for (; password !== setPassword;) {
//   password = prompt('plz Enter Your correct Password')
// }

// alert('Go to home page');

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// // functions

// ========= regular function =========
// function marcello(a,b) {
//   console.log(a+b);
//   console.log("Marcello Tech");
// }
// marcello();

// ========= return function =========
// function add(a, b) {
//   return a + b;
// }
// console.log(add(3, 5)); // Outputs: 8

// ========= expression =========
// const add = function (a,b){
//   return a+b;
// }
// console.log(add(3, 5));

// ========= callback function  =========
// function operate(a, b, callback) {
//     callback(a, b);
// }

// function add(a, b) {
//     console.log('Add :', a + b);
// }
// function sub(a, b) {
//     console.log('Sub :', a - b);
// }

// operate(4, 5, add);

// ========= Arrow function =========
// const subtract = (a, b) => a - b;

// console.log(subtract(10, 3)); // Outputs: 7

// ========= exmaple =========
// const average = (tamil,english,maths,science,socialscience) => (tamil+english+maths+science+socialscience) / 5
// console.log(average(89,71,85,100,96))

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ========= Creating an array =========
// let fruits = ["apple", "banana", "orange", "grape"];

//  Accessing elements by index
// console.log(fruits[0]); // Outputs: "apple"
// console.log(fruits[2]); // Outputs: "orange"

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// // String methods

//  Length
//  replace
//  replaceAll
//  toUpperCase
//  toLowerCase
//  trim
//  padStart
//  padEnd
//  split
//  slice
//  charAt

// const str = "Hello, World!";

// ========= Length of the string =========
// console.log(str.length); // Outputs: 13

// const str = "Hello, world!";
// const char = str.charAt(0); // Gets the character at index 0, which is 'H'
// console.log(char); // Outputs: H

// ========= Convert to uppercase and lowercase =========
// console.log(str.toUpperCase()); // Outputs: HELLO, WORLD!
// console.log(str.toLowerCase()); // Outputs: hello, world!

// ========= Extracting substrings =========
// console.log(str.slice(7, -1)); // Outputs: World!

// ========= Splitting a string into an array =========
// console.log(str.split(",")); // Outputs: ["Hello", "World!"]

// ========= Replacing a substring =========
// console.log(str.replace("Hello", "Hi")); // Outputs: Hi, World!

// ========= Removing whitespace from the beginning and end =========
// const whitespaceStr = "   Hello, World!   ";
// console.log(whitespaceStr.trim()); // Outputs: Hello, World!

// ========= Repeating a string =========
// console.log(str.repeat(3)); // Outputs: Hello, World!Hello, World!Hello, World!

// const number = "42";
// const paddedNumberStart = number.padStart(10, "*");
// const paddedNumberEnd = number.padEnd(5, "*");

// console.log("Padded Number (Start):", paddedNumberStart); // Outputs: "00042"
// console.log("Padded Number (End):", paddedNumberEnd); // Outputs: "42***"

// ========= create secret number =========
// function createSecretnumber(phoneNo) {
//   const number = phoneNo + "";

//   const first2number = number.slice(0, 2); // 98
//   const last2number = number.slice(-2); // 10

//   const secretNumber =
//     first2number.padEnd(number.length - 2, "x") + last2number;
//   console.log(secretNumber);
// }

// createSecretnumber("9876543210");
// createSecretnumber(9876543210);

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// // Math methods

// Math.random
// Math.round
// Math.ceil
// Math.floor
// Math.trunc
// Math.abs
// Math.pow
// Math.sqrt
// Math.min
// Math.max

//  ========= Generating a random number between 0 (inclusive) and 1 (exclusive) =========
// const randomNum = Math.random();
// console.log("Random Number:", randomNum);

// ========= Rounding a number to the nearest integer =========
// const roundedNum = Math.round(4.5);
// console.log("Rounded Number:", roundedNum);

// ========= Ceil value of a number (smallest integer greater than or equal to the number) =========
// const ceilValue = Math.ceil(3.2);
// console.log("Ceil Value:", ceilValue);

// ========= Floor value of a number (largest integer less than or equal to the number) =========
// const floorValue = Math.floor(-5.4);
// console.log("Floor Value:", floorValue);

// ========= Truncate the decimal part of a number
// const truncatedNum = Math.trunc(-5.8);
// console.log("Truncated Number:", truncatedNum);

// ========= Absolute value of a number =========
// const absoluteValue = Math.abs(-7);
// console.log("Absolute Value:", absoluteValue);

// ========= Power of a number =========
// const powerValue = Math.pow(2, 3);
// console.log("Power Value:", powerValue);

// ========= Square root of a number =========
// const sqrtValue = Math.sqrt(25);
// console.log("Square Root Value:", sqrtValue);

// // Minimum value among multiple numbers
// const array = [10, 54, 1, 54, 54, 87, 3, 6];
// const minValue = Math.min(10, 5, 8, 12, 3);
// const minValue1 = Math.min(...array);
// console.log(minValue1);
// console.log("Minimum Value:", minValue);

// // Maximum value among multiple numbers
// let maxValue = Math.max(15, 20, 7, 30, 25);
// console.log("Maximum Value:", maxValue);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ========= Dates =========

// ========= Get the current date =========
// const currentDate = new Date();

// console.log("Current Date:", currentDate);

// ========= Get specific components of the date =========
// const year = currentDate.getFullYear();
// const month = currentDate.getMonth() + 1; // Note: months are 0-based
// const day = currentDate.getDate();
// const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();
// const seconds = currentDate.getSeconds();

// console.log(`Year: ${year}`);
// console.log(`Month: ${month}`);
// console.log(`Day: ${day}`);
// console.log(`Hours: ${hours}`);
// console.log(`Minutes: ${minutes}`);
// console.log(`Seconds: ${seconds}`);

// ========= Manipulating dates =========
// const tomorrow = new Date();
// tomorrow.setDate(currentDate.getDate() + 1);

// console.log("Tomorrow's Date:", tomorrow);

// const nextWeek = new Date();
// nextWeek.setDate(currentDate.getDate() + 7);

// console.log("Date after one week:", nextWeek);

//  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ========= Array methods =========

// length
// toString
// pop
// push
// shift
// unshift
// join
// concat
// splice
// slice
// reverse
// sort

// ========= Creating an array =========
// const fruits = ["apple", "banana", "orange", "grape"];

// ========= Accessing elements by index =========
// console.log(fruits[0]); // Outputs: "apple"
// console.log(fruits[2]); // Outputs: "orange"

// ========= Modifying an element =========
// fruits[1] = "kiwi";
// console.log(fruits); // Outputs: ["apple", "kiwi", "orange", "grape"]

// const numbers = [4, 2, 7, 1, 9];

// ========= Getting the length of the array =========
// console.log(numbers.length); // Outputs: 5

// ========= Converting the array to a string =========
// const numbersString = numbers.toString();
// console.log(numbersString); // Outputs: "4,2,7,1,9"

// ========= Removing the last element =========
// const poppedElement = numbers.pop();
// console.log(numbers); // Outputs: [4, 2, 7, 1]
// console.log(poppedElement); // Outputs: 9

// ========= Adding elements to the end =========
// numbers.push(6, 8);
// console.log(numbers); // Outputs: [4, 2, 7, 1, 6, 8]

// ========= Removing the first element =========
// const shiftedElement = numbers.shift();
// console.log(numbers); // Outputs: [2, 7, 1, 6, 8]
// console.log(shiftedElement); // Outputs: 4

// ========= Adding elements to the beginning =========
// numbers.unshift(5, 3);
// console.log(numbers); // Outputs: [5, 3, 2, 7, 1, 6, 8]

// ========= Joining array elements into a string =========
// const joinedString = numbers.join("-");
// console.log(joinedString); // Outputs: "5-3-2-7-1-6-8"

// ========= Concatenating arrays =========
// const moreNumbers = [10, 11, 12];
// const num = [21, 22, 23];
// const combinedNumbers = numbers.concat(moreNumbers, num);
// console.log(combinedNumbers); // Outputs: [4, 2, 7, 1, 9, 10, 11, 12, 21, 22 ,23]

// ========= Splicing an array (adding and removing elements) =========
// const numbers = [4, 2, 7, 1, 9];
// const n1 = numbers.splice(2);
// console.log(n1);
// console.log(numbers);

// ========= Creating a new array by slicing =========
// const slicedArray = numbers.slice(2, 5);
// console.log(slicedArray); //

// ========= Reversing the array =========
// numbers.reverse();
// console.log(numbers); // [9, 1, 7, 2, 4]

// ========= Sorting the array =========
// numbers.sort();
// console.log(numbers); // Outputs: [ 1, 2, 4, 7, 9 ]

// sort - numbers
// numbers.sort((a,b)=>{
//     if(a>b) return 1;
//     if(b>a) return -1;
// })

// numbers.sort((a,b)=>a-b)
// numbers.sort((a,b)=>a+b)

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ========= DOM =========
// ========= Get elements by ID =========
// const head = document.getElementById("head");
// head.innerHTML = "hi";

// ========= Get elements by tag name =========
// const h2 = document.getElementsByTagName("h2");
// h2[0].innerHTML = "Document object model";

// ========= Get elements by class name =========
// const para1 = document.getElementsByClassName("para");
// para1[0].innerHTML = "hello";

// ========= Use querySelector to get elements by CSS selector =========
// const button = document.querySelector(".button");
// const container = document.querySelector(".container");

// ========= Add event listener to the button =========
// button.addEventListener("click", function () {
//   head.textContent = "Heading Changed!";
//   container.style.backgroundColor = "blue";
//   container.style.color = "white";
// });

// ========= Create a new element and append it to the container =========
// const newPara = document.createElement("p");
// newPara.textContent = "This is a new paragraph.";
// container.appendChild(newPara);

// -------------------------------------------------------------

// const input = document.querySelector('.input')
// const btn = document.querySelector('.btn')
// const para = document.querySelector('.para')
// const para1 = document.querySelector('.para1')

// btn.addEventListener('click',()=>{
//     const value = input.value
//     para.innerHTML = `<h1>innerHTML : ${value}</h1>`
//     para1.textContent = `<h1>textContent : ${value}</h1>`
// })

// ================== create element - example ==================
// const container = document.getElementById("container");
// const paragraph = document.createElement("p");
// paragraph.textContent = "This is a dynamically created paragraph.";

// container.append(paragraph);

// ================== Dark theme ==================
// const theme = document.querySelector(".dark");

// theme.addEventListener("click", function () {
//   document.body.classList.toggle("body");
// });

// ================== whatapp like - code ==================
// const btn = document.getElementById('send-button')
//     const messageInput = document.getElementById('message-input');
//     const messageList = document.getElementById('message-list');

//     function sendMessage() {
//         const message = messageInput.value;

//         const newMessage = document.createElement('p');
//         newMessage.textContent = message;
//         messageList.appendChild(newMessage);

//         messageInput.value = '';
//     }

//     btn.addEventListener('click',sendMessage)

// ================== add image - code ==================
// const fileInp = document.querySelector("#file-input");
// const imageContainer = document.querySelector(".imageContainer");

// fileInp.addEventListener("change", function () {
//   const img = document.createElement("img");
//   const file = fileInp.files[0];
//   if (file) {
//     const imageURL = URL.createObjectURL(file);
//     img.src = imageURL;
//   }

//   imageContainer.appendChild(img);
});
// ====================== Image Slider ===========================
//  <div class="slider">
//      <img id="sliderImage" src="image1.jpg" alt="Image Slider">
//      <button id="prevButton">Previous</button>
//      <button id="nextButton">Next</button>
//  </div>
//-----------------------------------------------------------------
// const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
// let currentIndex = 0;

// const sliderImage = document.getElementById("sliderImage");
// const prevButton = document.getElementById("prevButton");
// const nextButton = document.getElementById("nextButton");

// function showImage(index) {
//   sliderImage.src = images[index];
// }

// prevButton.addEventListener("click", () => {
//   currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
//   showImage(currentIndex);
// });

// nextButton.addEventListener("click", () => {
//   currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
//   showImage(currentIndex);
// });

// // Initialize the slider
// showImage(currentIndex);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ========= objects =========

// ========= Creating an object using object literal syntax =========
// const person = {
//   firstName: "Marcello",
//   lastName: "tech",
//   age: 30,
//   isStudent: false,
//   sayHello: function () {
//     console.log(this);
//     console.log("Hello, I'm " + this.firstName + " " + this.lastName);
//   },
// };
// console.log(this);
// ========= Accessing object properties =========
// console.log(person.firstName); // Outputs: "Marcello"
// console.log(person["lastName"]); // Outputs: "tech"

// ========= Modifying object properties =========
// person.age = 31;
// person.isStudent = true;

// ========= Calling object methods =========
// person.sayHello(); // Outputs: "Hello, I'm Marcello tech"

// ========= Adding new properties to the object =========
// person.nationality = "USA";

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ========= optional Chaning =========
// const hotel = {
//   openHours: {
//     mon: {
//       open: "9.00 am",
//       close: "8.30 pm",
//     },
//     fri: {
//       open: "10.00 am",
//       close: "7.30 pm",
//     },
//   },
// };

// ========= 1
// if (hotel.openHours.wed) {
//   console.log(hotel.openHours.wed.open);
// } else {
//   console.log(hotel.openHours.wed);
// }
// ========= 2
// console.log(hotel.openHours.wed?.open);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ========= Destructuring =========
// ========= Array
// ========= object

// ========= Destructuring an array =========
// const numbers = [1, 2, 3, 4, 5];

// const [first, second,,third] = numbers;

// console.log(first);    // Outputs: 1
// console.log(second);   // Outputs: 2
// console.log(third);
// console.log(rest);     // Outputs: [3, 4, 5]

// ========= Destructuring an object =========
// const person = {
//   firstName: "Marcello",
//   lastName: "tech",
//   age: 30,
//   country: "India",
// };

// const { firstName, age } = person;

// console.log(firstName); // Outputs: "Marcello"
// console.log(age); // Outputs: 30

// ========= Destructuring with renaming =========
// const { firstName : fName, lastName: lName } = person;

// console.log(fName); // Outputs: "Marcello"
// console.log(lName); // Outputs: "tech"

// ========= Destructuring with default values =========
// const { job = "Unknown" } = person;

// console.log(job); // Outputs: "Unknown"

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ========= Array Iteration =========

// // forEach
// // map
// // filter
// // reduce
// // find
// // every
// // some
// // includes
// // indexOf
// // findIndexOf
// // flat

// const numbers = [1, 2, 3, 4, 5, 6];

// ========= Using forEach to iterate over array elements =========
// console.log("forEach:");
// numbers.forEach((num) => console.log(num));

// ========= Using map to create a new array by doubling each element =========
// console.log("\map:");
// const doubledNumbers = numbers.map((num) => num * 2); // [ 2, 4, 6, 8, 10, 12 ]
// console.log(doubledNumbers);
// console.log(numbers);

// ========= Using filter to create a new array with even numbers =========
// console.log("\nfilter:");
// const filter = numbers.filter((num) => num > 3); // [4, 5, 6]
// console.log(filter);

// ========= Using reduce to calculate the sum of all numbers =========
// console.log("\nreduce:");
// const sum = numbers.reduce((acc, num) => acc + num, 0); 6
// console.log(sum);

// ========= Using find to get the first even number =========
// console.log("\nfind:");
// const find = numbers.find((num) => num === 3);
// console.log(find);

// ========= Using every to check if all numbers are even =========
// console.log("\nevery:");
// const allEven = numbers.every((num) => 0 < num);
// console.log(allEven);

// ========= Using some to check if there's at least one even number =========
// console.log("\nsome:");
// const hasEven = numbers.some((num) => num % 2 === 0);
// console.log(hasEven);

// ========= Using includes to check if a specific value is in the array =========
// console.log("\nincludes:");
// const includesThree = numbers.includes(3);
// console.log(includesThree);

// ========= Using indexOf to find the index of a specific value =========
// console.log("\nindexOf:");
// const index = numbers.indexOf(4);
// console.log(index);

// ========= Using findIndex to find the index of the first even number =========
// console.log("\nfindIndex:");
// const findIndex = numbers.findIndex((num) => num > 3);
// console.log(findIndex);

// ========= Using flat to flatten a nested array =========
// console.log("\nflat:");
// const nestedArray = [
//   [1, 2, [7, 8]],
//   [3, 4],
//   [5, 6],
// ];
// const flattenedArray = nestedArray.flat(2);
// console.log(flattenedArray);

// ============================= map - exmaple =============================
// const cities = [
//   "trichy",
//   "chennai",
//   "madhurai",
//   "thoothukudi",
//   "pudukkottai",
//   "tirunelveli",
// ];

// const allCity = cities.map((city) => `${city.toUpperCase()}`);

// console.log(allCity);

// ------------------------------------------

// const products = [
//   { name: "iphone", price: 100000 },
//   { name: "samsung", price: 60000 },
//   { name: "vivo", price: 50000 },
//   { name: "oppo", price: 55000 },
//   { name: "redmi", price: 70000 },
// ];

// const totalProductsName = products.map((product) => `${product.name}`);

// const totalPrice = products.reduce(
//   (accumulator, product) => accumulator + product.price,
//   0
// );

// console.log("ProductsName:", totalProductsName);
// console.log("Total Price:", totalPrice);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ========= setTimeout  & clearTimeout =========

// const delay = () => {
//   console.log('delayed content');
// };
// const setTime = setTimeout(delay, 2000);

// const stop = () => {
//   clearTimeout(setTime);
// };

// --------------------------------------------------------------------
// ========= setInterval  & clearInterval =========

// let no = 0;
// const delay = () => {
//   console.log(`delayed content : ${no++}`);
// };
// const setTime = setInterval(delay, 2000);

// const stop = () => {
//   clearInterval(setTime);
// };

// ----------------------- example ---------------------------
// <p class="time">12 : 12 : 12</p>

// const time = document.querySelector(".time");

// setInterval(function () {
//   const now = new Date();
//   const hour = now.getHours();
//   const min = now.getMinutes();
//   const sec = now.getSeconds();

//   // const hour = String(now.getHours()).padStart(2, "0");
//   // const min = String(now.getMinutes()).padStart(2, "0");
//   // const sec = String(now.getSeconds()).padStart(2, "0");

//   // if (hour > 12) {
//   //   time.textContent = `${String(hour - 12).padStart(
//   //     2,
//   //     "0"
//   //   )} : ${min} : ${sec}`;
//   // } else {
//   //   time.textContent = `${hour} : ${min} : ${sec}`;
//   // }
//   console.log(`${hour} : ${min} : ${sec}`);
// }, 1000);
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ================== try Catch ==================

// try {
//   let x = 1;
//   const y = 2;
//   y = 3;
// } catch (error) {
//   console.log(error);
// }

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ========= Promise =========

// Simulating an asynchronous operation with a Promise
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     const a = false;
//     if (a) {
//       resolve("hello from resolve");
//     } else {
//       reject("hello from reject");
//     }
//   });
// }

// // Using the Promise
// console.log("Fetching data...");

// fetchData()
//   .then((response) => {
//     console.log("Success :", response);
//   })
//   .catch((error) => {
//     console.error("Something error :", error);
//   })
//   .finally(() => {
//     console.log("Promise completed.");
//   });

// -----------------------------------------------------------------------------------------
// ================== Promise Methods ==================

// ================== Promise All ==================
// const promise1 = Promise.resolve("Hello");
// const promise2 = Promise.resolve("World");

// Promise.all([promise1, promise2])
//   .then((values) => {
//     console.log(values); // Output: ["Hello", "World"]
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// ================== Promise Race ==================
// const promise1 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve("Fast"), 1000)
// );
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve("Slow"), 1100)
// );

// Promise.race([promise1, promise2])
//   .then((result) => {
//     console.log(result); // Output: "Fast"
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// ================== Promise allsettled ==================
// const promise1 = Promise.resolve("Resolved");
// const promise2 = Promise.reject("Rejected");

// Promise.allSettled([promise1, promise2])
// .then((results) => {
//   console.log(results);
//   // Output: [{ status: "fulfilled", value: "Resolved" },
//   //          { status: "rejected", reason: "Rejected" }]
// });

// ================== Promise any ==================
// const promise1 = new Promise((resolve, reject) =>
//   setTimeout(() => reject("Promise 1 Failed"), 1000)
// );
// const promise2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Promise 2 Resolved"), 1500)
// );

// Promise.any([promise1, promise2])
//   .then((result) => {
//     console.log(result); // Output: "Promise 2 Resolved"
//   })
//   .catch((errors) => {
//     console.error(errors); // Output if all promises are rejected: ["Promise 1 Failed"]
//   });

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ========= async & await =========
// ========= Define an asynchronous function =========

// async function fetchData() {
//   console.log("Before");
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   console.log("after");
//   const data = { id: 1, name: "John Doe", age: 30 };
//   return data;
// }

// fetchData()
//   .then((data) => {
//     console.log("Data fetched:", data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ========= API =========
// Define the URL of the API you want to request
// const apiUrl = "https://official-joke-api.appspot.com/random_joke";

// ========= Make a GET request to the API using fetch =========
// fetch(apiUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json(); // Parse the JSON response
//   })
//   .then((data) => {
//     console.log("API Response:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// ------------------------------------------------------------------

// const apiUrl = "https://v2.jokeapi.dev/joke/Dark?type=single";

// function createJoke() {
//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       head.textContent = data.joke;
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }

// btn.addEventListener("click", createJoke);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// ================== PROMISE ==================
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved!");
//   }, 2000);
// });

// myPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// ================== ASYNC / AWAIT ==================

// const myAsyncFunction = async () => {
//     try {
//         const message = await myPromise;
//         console.log(message);
//     } catch (error) {
//         console.error(error);
//     }
// };

// myAsyncFunction();
