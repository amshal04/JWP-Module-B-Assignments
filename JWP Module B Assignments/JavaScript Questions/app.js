// Global Scope

// ● Declare a variable using var outside of any function or block.
var globalVar = "I am a global scoped var";

// ● Declare a variable using let outside of any function or block.
let globalLet = "I am a global scoped let";

// ● Declare a variable using const outside of any function or block.
const globalConst = "I am a global scoped const";

// ● Log all three variables to the console.
console.log(globalVar);     
console.log(globalLet);     
console.log(globalConst); 

// ● Are they accessible globally?
Yes, all three are accessible globally when declared outside any function or block.

// Function Scope

// ● Create a function and declare a variable using var inside the function.
function functionScope() {
    var functionVar = "I am a function scoped var";

// ● Declare a variable using let inside the function.
    let functionLet = "I am a function scoped let";

// ● Declare a variable using const inside the function.
    const functionConst = "I am a function scoped const";

}

functionScope();

// ● Try to log all three variables to the console outside the function.
console.log(functionVar);    
console.log(functionLet);    
console.log(functionConst); 

// ● What do you observe?
Variables declared inside a function using var, let, or const are not accessible outside the function. They're
function-scoped and only exist during the function’s execution.




// Block Scope

// ● Use an if statement and declare a variable using var inside the block.
if (true) {
    var blockVar = "I am a block scoped var";

// ● Declare a variable using let inside the block.
    let blockLet = "I am a block scoped let";

// ● Declare a variable using const inside the block.
    const blockConst = "I am a block scoped const";
}

// ● Try to log all three variables to the console outside the block.
console.log(blockVar);
console.log(blockLet);
console.log(blockConst);

// ● What do you observe?
var is not block-scoped, so it's accessible outside the block. let and const are block-scoped, so they are not accessible outside the block.


// Hoisting with var

// ● Write code where you log a var variable before it is declared.
console.log(hoistedVar);
var hoistedVar = "Hoisted var variable";

// ● What value do you get?
Output is undefined due to hoisting var is hoisted and initialized as undefined.


// Hoisting with let and const

// ● Write code where you log a let variable before it is declared.
console.log(hoistedLet);
let hoistedLet = "Hoisted let variable";

// ● Write code where you log a const variable before it is declared.
console.log(hoistedConst);
const hoistedConst = "Hoisted const variable";

// ● What kind of error do you get?
Both cause a ReferenceError because let and const are hoisted but not initialized.

// Re-declaration

// ● Try to declare the same variable name twice using var.
var redeclareVar = "First var declaration";
var redeclareVar = "Second var declaration";
console.log(redeclareVar);

// ● Try to declare the same variable name twice using let.
let redeclareLet = "First let declaration";
let redeclareLet = "Second let declaration"; 

// ● Try to declare the same variable name twice using const.
const redeclareConst = "First const declaration";
const redeclareConst = "Second const declaration";

// ● What happens in each case?
var Allowed latest value because overwrites previous value. let & const SyntaxError when re-declared in same scope.

// Re-assignment

// ● Declare a variable using var and assign it a value. Then reassign it a new value.
var reassignVar = "Old var value";
reassignVar = "New var value"; 
console.log(reassignVar);

// ● Declare a variable using let and assign it a value. Then reassign it a new value.
let reassignLet = "Old let value";
reassignLet = "New let value";
console.log(reassignLet);

// ● Declare a variable using const and assign it a value. Then reassign it a new value.
const reassignConst = "Old const value";
reassignConst = "New const value";
console.log(reassignConst);

// ● What happens in each case?
var re-assignment allowed, let re-assignment allowed & const re-assignment not allowed causes TypeError.

// Temporal Dead Zone (TDZ)

// ● Declare a let variable inside a block but try to log it before the declaration.
{
    console.log(tdzLet);
    let tdzLet = "TDZ Let variable";

// ● Declare a const variable inside a block but try to log it before the declaration.
   console.log(tdzConst);
    const tdzConst = "TDZ Const variable";
}

// ● What error do you get? Why?
Variables declared with let and const are hoisted but not initialized. Accessing them before the declaration
causes a ReferenceError this is the Temporal Dead Zone (TDZ).

// When to use var, let, and const

// ● Write a piece of code to demonstrate a good use case for var.
function showMessage() {
  if (true) {
    var message = "Hello World";
  }
  console.log(message);
}

showMessage();

// ● Write a piece of code to demonstrate a good use case for let.
for (let j = 0; j < 3; j++) {
    console.log(j);
}

// ● Write a piece of code to demonstrate a good use case for const.
const API_KEY = "1234-SECRET-KEY";
console.log(API_KEY);


// String Interpolation

// ● Create variables for a person's first name and last name.
let firstName = "Amshal";
let lastName = "Tariq";

// ● Use a template literal to create a full name string and log it to the console.
let fullName = `${firstName} ${lastName}`;
console.log(fullName);


// Multi-line Strings

// ● Use a template literal to create a multi-line string (e.g., an address) and log it to the console.
let addres = `
Amshal Tariq
D-20 Block 6 Federal B
Area, Karachi`;

console.log(addres);


// Simple Expressions

// ● Create variables for two numbers.
let num1 = 30;
let num2 = 65;

// ● Use a template literal to create a string that includes the sum of the numbers.
let sums = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;

// ● Log the string to the console.
console.log(sums);


// Function Calls

// ● Create a function that takes two numbers and returns their product.
function multiply(num1, num2) {
  return num1 * num2;
}


// ● Use a template literal to call this function inside a string and log the result to the console.
let result = `The product of 7 and 9 is ${multiply(7, 9)}.`;
console.log(result);


// Creating a Tagged Template

// ● Write a simple tag function that takes a template string and logs it.
function tag(strings, ...logs) {
    console.log(strings);
    console.log(logs);
}

// ● Use this tag function with a template literal.
tag`Hello, ${"world"}! Today is ${"great"}`;


// Formatting

// ● Write a tag function that formats a string by making it uppercase.
function upper(strings, ...values) {
    return strings.map((str, i) => str + (values[i]?.toUpperCase() || '')).join('');
}

// ● Use this tag function with a template literal and log the result.
let names = "Alishba";
console.log(upper`Hello, ${name}!`);


// Conditional Logic

// ● Create a variable for the current hour.
let hour = new Date().getHours();

// ● Use a template literal to display a different message depending on whether it's morning (before 12 PM) or afternoon (after 12 PM).
let greeting = `${hour < 12 ? "Good morning" : "Good afternoon"}, the time is ${hour} o'clock.`;
console.log(greeting);


// Loops within Template Literals

// ● Create an array of items (e.g., a shopping list).
let shoppingList = ["Milk", "Bread", "Eggs"];

// ● Use a template literal to generate an HTML list (<ul> and <li> elements) from the array and log it to the console.
let htmlList = `<ul>
    ${shoppingList.map(item => `<li>${item}</li>`).join('\n')}
</ul>`;
console.log(htmlList);


// Escaping Backticks

// ● Create a string that includes a backtick character using a template literal.
let message = `Here is a backtick \``;

// ● Log the string to the console.
console.log(message);


// Nested Template Literals

// ● Create nested template literals to build a more complex string, such as a nested HTML structure (e.g., a table with rows and cells).
let table = `
<table>
  ${[1, 2, 3].map(row => `
    <tr>
      ${[1, 2, 3].map(col => `<td>Row ${row}, Col ${col}</td>`).join('')}
    </tr>`).join('')}
</table>`;

// ● Log the result to the console.
console.log(table);


// Simple Condition:

// ● Create a variable age.
let ages = 20;

// ● Use the ternary operator to assign a variable canVote the value "Yes" if age is 18 or older, and "No" otherwise.
let canVote = age >= 18 ? "Yes" : "No";

//  ● Log canVote to the console.
console.log(canVote);


// Even or Odd:

// ● Create a variable number.
let number = 7;

// ● Use the ternary operator to assign a variable evenOrOdd the value "Even" if number is even, and "Odd" if it's odd.
let evenOrOdd = number % 2 === 0 ? "Even" : "Odd";

// ● Log evenOrOdd to the console.
console.log("The number is:", evenOrOdd);


// Grade Evaluation:

// Create a variable score.
let score = 82;

// Use the ternary operator to assign a variable grade based on the following conditions:
// ● "A" if score is 90 or above.
// ● "B" if score is 80 or above.
// ● "C" if score is 70 or above.
// ● "D" if score is 60 or above.
// ● "F" otherwise.
let grade = score >= 90 ? "A" 
            :score >= 80 ? "B" 
            :score >= 70 ? "C" 
            :score >= 60 ? "D" 
            : "F";
// Log grade to the console.
console.log("Grade", grade);


// Login Status:

// ● Create a variable isLoggedIn.
let isLoggedIn = false;

// ● Use the ternary operator and logical operators to assign a variable statusMessage the value "Welcome back!" if isLoggedIn is true, and "Please log in" if isLoggedIn is false.
let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";

// ● Log statusMessage to the console.
console.log(statusMessage);


// Discount Eligibility:

// ● Create variables isMember and purchaseAmount.
let isMember = true;
let purchaseAmount = 150;

// ● Use the ternary operator and logical operators to assign a variable discount the value 10% of purchaseAmount if isMember is true and purchaseAmount is greater than 100, and 0 otherwise.
let discount = (isMember && purchaseAmount > 100) ? purchaseAmount * 0.10 : 0;

// ● Log discount to the console.
console.log("Discount", discount);

// Determine Max Value:

// ● Create a function maxValue(a, b) that returns the larger of the two numbers using the ternary operator.
function maxValue(a, b) {
  return a > b ? a : b;
}

// ● Call the function with two numbers and log the result.
let maxValue = maxValue(10, 25);

console.log("Maximum value is:", result);

// Greeting Message:

// ● Create a function greet(name) that returns a greeting message. If name is not provided (or is an empty string), it should return "Hello, guest!", otherwise, it should return "Hello, [name]!".
function greet(name) {
  return name ? `Hello, ${name}!` : "Hello, guest!";
}

// ● Call the function with and without a name and log the result.
console.log(greet("Amshal")); 

console.log(greet(""));  

// Mapping Values:

// ● Create an array of numbers.
let num = [1, 2, 3, 4, 5, 6];

// ● Use the map method with a ternary operator to create a new array where each number is doubled if it is even and tripled if it is odd.
let transformed = num.map(num => num % 2 === 0 ? num * 2 : num * 3);

// ● Log the new array to the console.
console.log(transformed);


// Filtering Values:

// ● Create an array of strings.
const word = ["cat", "lion", "tiger", "hi", "hello"];

// ● Use the filter method with a ternary operator to create a new array that only includes strings with a length greater than 3.
const filteredWords = word.filter(word => word.length > 3 ? true : false);

// ● Log the new array to the console.
console.log(filteredWords);


// Copying an Array:

// ● Create an array originalArray with some elements.
const originalArray = [1, 2, 3, 4];

// ● Use the spread operator to create a copy of originalArray called copiedArray.
const copieArray = [...originalArray];

// ● Log both arrays to the console to verify they are the same but not the same reference.
console.log( originalArray);
console.log(copieArray);
console.log(originalArray === copieArray); 


// Merging Arrays:

// ● Create two arrays array1 and array2.
const array1 = [1, 2];
const array2 = [3, 4];

// ● Use the spread operator to create a new array mergedArray that combines the elements of array1 and array2.
const mergedArray = [...array1, ...array2];

// ● Log mergedArray to the console.
console.log(mergedArray);


// Adding Elements to an Array:

// ● Create an array numbers with some elements.
const numb = [2, 3, 4];

// ● Use the spread operator to add a new element at the beginning and at the end of the numbers array.
const updatedNumbers = [1, ...numb, 5];

// ● Log the updated array to the console.
console.log(updatedNumbers);


// Copying an Object:

// ● Create an object originalObject with some key-value pairs.
const originalObject = { name: "Ali", age: 10 };

// ● Use the spread operator to create a copy of originalObject called copiedObject.
const copiedObject = { ...originalObject };

// ● Log both objects to the console to verify they are the same but not the same reference.
console.log(originalObject);
console.log(copiedObject);
console.log(originalObject === copiedObject); 


// Merging Objects:

// ● Create two objects object1 and object2 with some overlapping keys.
const object1 = { name: "Umar", age: 18 };
const object2 = { age: 30, email: "umar@example.com" };

// ● Use the spread operator to create a new object mergedObject that combines the properties of object1 and object2.
const mergedObject = { ...object1, ...object2 };

// ● Log mergedObject to the console and note which values are retained for the overlapping keys.
console.log(mergedObject); 


// Updating Object Properties:

// ● Create an object user with properties name, age, and email.
const users = { name: "Ali", age: 35, email: "ali@oldmail.com" };

// ● Use the spread operator to create a new object updatedUser that updates the email property and adds a new address property.
const updatedUser = { ...users, email: "ali@newmail.com", address: "Karachi" };

// ● Log the updatedUser object to the console.
console.log(updatedUser);


// Passing Array Elements as Arguments:

// ● Create a function sum(a, b, c) that returns the sum of three numbers.
function sum(a, b, c) {
  return a + b + c;
}

// ● Create an array numbers with three elements.
const numbersArray = [10, 20, 30];

// ● Use the spread operator to pass the elements of numbers as arguments to the sum function.
const totals = sum(...numbersArray);

// ● Log the result to the console.
console.log(totals);


// Combining Multiple Arrays:

// ● Create a function combineArrays that takes any number of arrays as arguments and returns a single array containing all elements.
function combineArrays(...arrays) {
  return [].concat(...arrays);
}

// ● Use the spread operator inside the function to combine the arrays.
const combine = combineArrays([1, 2], [3, 4], [5, 6]);

// ● Call the function with multiple arrays and log the result.
console.log(combine);


// Rest Parameter with Spread Operator:

// ● Create a function multiply that takes a number and any number of additional arguments.
// ● Use the rest parameter to gather the additional arguments into an array and multiply each by the first argument.
// ● Return an array of the results.
// ● Call the function with appropriate arguments and log the result.


function multiply(factor, ...nums) {
  return nums.map(num => num * factor);
}

console.log("Multiply Result", multiply(2, 1, 2, 3)); 



// Spread Operator with Nested Structures:

// ● Create a nested array nestedArray and use the spread operator to create a shallow copy.
const nesteArray = [[1, 2], [3, 4]];
const copiedArray = [...nesteArray];

// ● Modify the inner arrays in the copied array.
copiedArray[0][0] = 99;

// ● Log both the original and copied arrays to observe the effect of shallow copying.
console.log(nesteArray);
console.log(copiedArray);


// Sum Function:

// ● Create a function sum that uses the rest operator to take any number of arguments.
function sum(...nums) {

// ● The function should return the sum of all its arguments.
  return nums.reduce((total, num) => total + num, 0);
}
// ● Call the function with different numbers of arguments and log the results.
console.log("Sum", sum(1, 2, 3, 4)); 


// Average Function:

// ● Create a function average that uses the rest operator to take any number of arguments.
function average(...nums) {
  if (nums.length === 0) return 0;

// ● The function should return the average of all its arguments.
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

// ● Call the function with different numbers of arguments and log the results.
console.log(average(10, 20, 30));


// First and Rest:

// ● Create an array numbers with at least 5 elements.
const numbers = [10, 20, 30, 40, 50];

// ● Use array destructuring with the rest operator to assign the first element to a variable first and the remaining elements to a variable rest.
const [first, ...rest] = numbers;

// ● Log first and rest to the console.
console.log("First", first);
console.log("Rest", rest);


// Skip and Rest:

// ● Create an array colors with at least 5 elements.
const colors = ["red", "green", "blue", "yellow", "purple"];

// ● Use array destructuring with the rest operator to skip the first two elements and assign the remaining elements to a variable remainingColors.
const [ , , ...remainingColors] = colors;

// ● Log remainingColors to the console.
console.log("Remaining Colors", remainingColors);


// Basic Destructuring:

// ● Create an object person with properties name, age, email, and address.
const persons = {
  name: "Zuhair",
  age: 25,
  email: "Zuhair@example.com",
  address: "Lahore"
};
// ● Use object destructuring with the rest operator to assign name and email to individual variables, and the remaining properties to a variable rest.
const { name, email, ...rest } = persons;

// ● Log the variables to the console.
console.log("Name", name); 
console.log("Email", email);     
console.log("Rest", rest);       


// Nested Destructuring:

// ● Create an object student with properties id, name, grades, and info (where info is another object with properties age and major).
const student = {
  id: 1,
  name: "Sara",
  grades: [90, 85, 88],
  info: {
    age: 20,
    major: "Computer Science"
  }
};

// ● Use nested destructuring with the rest operator to extract id, name, and major to individual variables, and the remaining properties to a variable rest.
const { id, name: studentName, info: { major }, ...rest } = student;

// ● Log the variables to the console.
console.log("ID", id);
console.log("Name", studentName);
console.log("Major", major);
console.log("Rest", rest);


// Filter Even Numbers:

// ● Create a function filterEven that uses the rest operator to take any number of arguments.
function filterEven(...nums) {

// ● The function should return a new array containing only the even numbers.
  return nums.filter(num => num % 2 === 0);
}

// ● Call the function with different numbers of arguments and log the results.
console.log("Even Numbers", filterEven(1, 2, 3, 4, 5, 6)); 


// Combine and Sort Arrays:

// ● Create a function combineAndSort that uses the rest operator to take any number of arrays.
function combineAndSort(...arrays) {

// ● The function should combine all the arrays into one and return the sorted result.
  return [].concat(...arrays).sort((a, b) => a - b);
}
// ● Call the function with different arrays and log the results.
console.log("Combined and Sorted", combineAndSort([3, 1], [5, 2], [4]));


// Basic Destructuring:

// ● Create an array fruits with the elements "apple", "banana", and "cherry".
const fruits = ["apple", "banana", "cherry"];

// ● Use destructuring to assign the first element to a variable firstFruit, the second to secondFruit, and the third to thirdFruit.
const [firstFruit, secondFruit, thirdFruit] = fruits;

// ● Log the variables to the console.
console.log("First Fruit", firstFruit);
console.log("Second Fruit", secondFruit); 
console.log("Third Fruit", thirdFruit);


// Skipping Elements:

// ● Create an array colors with the elements "red", "green", "blue", "yellow".
const colorsArray = ["red", "green", "blue", "yellow"];

// ● Use destructuring to assign the first element to primaryColor and the third element to tertiaryColor.
const [primaryColor, , tertiaryColor] = colorsArray;

// ● Log the variables to the console.
console.log("Primary Color:", primaryColor);
console.log("Tertiary Color:", tertiaryColor);


// Rest Operator:

// ● Create an array numbers with the elements 1 through 5.
const numberList = [1, 2, 3, 4, 5];

// ● Use destructuring to assign the first element to firstNumber and the rest of the elements to remainingNumbers.
const [firstNumber, ...remainingNumbers] = numberList;

// ● Log the variables to the console.
console.log("First Number", firstNumber);
console.log("Remaining Numbers", remainingNumbers);


// Basic Destructuring:

// ● Create an object person with properties name, age, and city.
const person = { name: "Ali", age: 30, city: "Lahore" };

// ● Use destructuring to assign the properties to variables name, age, and city.
const { name, age, city } = person;

// ● Log the variables to the console.
console.log(name, age, city);


// Renaming Variables:

// ● Create an object car with properties make, model, and year.
const car = { make: "Toyota", model: "Corolla", year: 2022 };

// ● Use destructuring to assign the properties to variables carMake, carModel, and carYear.
const { make: carMake, model: carModel, year: carYear } = car;

// ● Log the variables to the console.
console.log(carMake, carModel, carYear);


// Default Values:

// ● Create an object settings with properties theme and language.
const settings = { theme: "dark" };

// ● Use destructuring to assign the properties to variables theme and language, and provide a default value of "English" for language.
const { theme, language = "English" } = settings;

// ● Log the variables to the console.
console.log(theme, language);


// Array of Arrays:

// ● Create an array nestedArray with the elements [1, 2], [3, 4], and [5, 6].
const nestedArray = [[1, 2], [3, 4], [5, 6]];

// ● Use nested destructuring to assign the first elements of each sub-array to variables a, b, and c.
const [[a], [b], [c]] = nestedArray;

// ● Log the variables to the console.
console.log(a, b, c);


// Object within an Object:

// ● Create an object profile with properties username, details (which is another object with properties email and address).
const profile = { username: "john123", details: { email: "john@example.com", address: "Karachi" } };

// ● Use nested destructuring to assign username, email, and address to variables.
const { username, details: { email, address } } = profile;

// ● Log the variables to the console.
console.log(username, email, address);


// Mix of Arrays and Objects:

// ● Create an object data with properties id, info (which is an array with elements {name: "Alice"} and {age: 25}).
const data = { id: 101, info: [{ name: "Alice" }, { age: 25 }] };

// ● Use nested destructuring to assign id, name, and age to variables.
const { id, info: [{ name: infoName }, { age: infoAge }] } = data;

// ● Log the variables to the console.
console.log(id, infoName, infoAge);

// Array Parameters:

// ● Create a function printCoordinates that takes an array [x, y] as a parameter.
// ● Use destructuring in the function parameter to extract x and y.
// ● Log x and y inside the function.
// ● Call the function with different coordinates.

function printCoordinates([x, y]) {
  console.log("X:", x, "Y:", y);
}
printCoordinates([10, 20]);


// Object Parameters:

// ● Create a function displayUser that takes an object {name, age} as a parameter.
// ● Use destructuring in the function parameter to extract name and age.
// ● Log name and age inside the function.
// ● Call the function with different user objects.

function displayUser({ name, age }) {
  console.log("Name:", name, "Age:", age);
}
displayUser({ name: "Sara", age: 22 });


// List Property Names:

// ● Create an object book with properties title, author, and year.
const book = {
  title: "JS Basics",
  author: "A. Khan",
  year: 2020
};

// ● Use Object.keys() to get an array of the property names of the book object.
const propertyNames = Object.keys(book);

// ● Log the array to the console.
console.log(propertyNames);


// Count Properties:

// ● Create an object student with properties name, age, grade, and school.
const student = {
  name: "Ali",
  age: 20,
  grade: "A",
  school: "ABC High"
};

// ● Use Object.keys() to get an array of the property names and determine the number of properties in the student object.
const propertyCount = Object.keys(student).length;

// ● Log the number of properties to the console.
console.log(propertyCount); 

// Iterate Over Keys:

// ● Create an object product with properties name, price, and category.
const product = {
  name: "Phone",
  price: 500,
  category: "Electronics"
};

// ● Use Object.keys() to get an array of the property names and iterate over this array to log each property name and its corresponding value.
Object.keys(product).forEach(key => {
  console.log(key, ":", product[key]);
});


// List Property Values:

// ● Create an object movie with properties title, director, year, and genre.
const movie = {
  title: "Inception",
  director: "Nolan",
  year: 2010,
  genre: "Sci-Fi"
};

// ● Use Object.values() to get an array of the property values of the movie object.
const values = Object.values(movie);

// ● Log the array to the console.
console.log(values);


// Sum Values:

// ● Create an object scores with properties math, science, and english, each with numeric values.
const scores = { math: 90, science: 85, english: 88 };

// ● Use Object.values() to get an array of the property values and calculate the total sum of the values.
const total = Object.values(scores).reduce((sum, val) => sum + val, 0);

// ● Log the sum to the console.
console.log("Total Score", total);


// Iterate Over Values:

// ● Create an object user with properties username, email, and location.
const user = { username: "jdoe", email: "jdoe@mail.com", location: "Islamabad" };

// ● Use Object.values() to get an array of the property values and iterate over this array to log each value.
Object.values(user).forEach(value => console.log(value));


// List Entries:

// ● Create an object car with properties make, model, and year.
const car = {
  make: "Honda",
  model: "Civic",
  year: 2021
};

// ● Use Object.entries() to get an array of the key-value pairs of the car object.
const entries = Object.entries(car);

// ● Log the array to the console.
console.log(entries);











// Convert Object to Array:

// ● Create an object person with properties firstName, lastName, and age.
const person = {
  firstName: "Huma",
  lastName: "Haseeb",
  age: 28
};

// ● Use Object.entries() to convert the person object into an array of key-value pairs.
const personArray = Object.entries(person);

// ● Log the array to the console.
console.log(personArray);


// Iterate Over Entries:

// ● Create an object settings with properties theme, notifications, and privacy.
const config = { theme: "light", notifications: true, privacy: "high" };

// ● Use Object.entries() to get an array of the key-value pairs and iterate over this array to log each key and value.


Object.entries(config).forEach(([key, value]) => {
    console.log(key, ":", value);
});


// Filter Keys:

// ● Create an object inventory with properties apples, bananas, oranges, and grapes, each with numeric values.
const inventory = { apples: 5, bananas: 12, oranges: 20, grapes: 8 };

// ● Use Object.keys() and filter() to get an array of keys where the value is greater than 10.
const filteredKeys = Object.keys(inventory).filter(key => inventory[key] > 10);

// ● Log the array to the console.
console.log("Filtered Keys", filteredKeys);


// Transform Values:

// ● Create an object temperatures with properties morning, afternoon, and evening, each with numeric values.
const temperatures = { morning: 24, afternoon: 35, evening: 27 };

// ● Use Object.entries() to get an array of key-value pairs, then use map() to convert the temperatures from Celsius to Fahrenheit.
const tempInFahrenheit = Object.entries(temperatures).map(
  ([key, value]) => [key, (value * 9/5) + 32]
);

// ● Convert the transformed array back to an object.
const fahrenheitTemps = Object.fromEntries(tempInFahrenheit);

// ● Log the new object to the console.
console.log("Fahrenheit Temps", fahrenheitTemps);


// Key-Value Swap:

// ● Create an object roles with properties admin, editor, and viewer, each with string values.
const roles = { admin: "A1", editor: "E1", viewer: "V1" };

// ● Use Object.entries() to get an array of key-value pairs, then use map() to swap the keys and values.
const swappedArray = Object.entries(roles).map(
  ([key, value]) => [value, key]
);

// ● Convert the transformed array back to an object.
const swappedRoles = Object.fromEntries(swappedArray);

// ● Log the new object to the console.
console.log("Swapped Roles", swappedRoles);


// Filter and Map:

// ● Create an array numbers with values from 1 to 10.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ● Write a higher-order function filterAndMap that takes an array, a filter function, and a map function.
function filterAndMap(arr, filterFn, mapFn) {
  return arr.filter(filterFn).map(mapFn);
}

// ● Use this function to filter out even numbers and then square the remaining numbers.
const results = filterAndMap(numbers, n => n % 2 !== 0, n => n * n);

// ● Log the resulting array to the console.
console.log("Filtered and Mapped", result);


// Sort and Reduce:

// ● Create an array words with the values "apple", "banana", "cherry", "date".
const words = ["apple", "banana", "cherry", "date"];

// ● Write a higher-order function sortAndReduce that takes an array, asort function, and a reduce function.
function sortAndReduce(arr, sortFn, reduceFn) {
  return arr.sort(sortFn).reduce(reduceFn);
}

// ● Use this function to sort the words alphabetically and then concatenate them into a single string.
const result = sortAndReduce(
  words,
  (a, b) => a.localeCompare(b),        // Sort alphabetically
  (acc, val) => acc + val              // Concatenate strings
);

// ● Log the resulting string to the console.
console.log("Sorted & Reduced", result);



// Simple Callback:

// ● Write a function greet that takes a name and a callback function.
function greet(name, callback) {
  const message = `Hello, ${name}!`;
  callback(message);
}

// ● The greet function should call the callback function with a greeting message.
function printGreeting(msg) {

// ● Write a callback function printGreeting that logs the message to the console.
 console.log(msg);
}
// ● Call the greet function with a name and the printGreeting callback.
greet("Ali", printGreeting);


// Asynchronous Callback:

// ● Write a function fetchData that simulates fetching data from a server (use setTimeout to delay execution).
function fetchData(callback) {
  setTimeout(() => {
    const data = "Server data received!";
    callback(data);
  }, 1000);
}

// ● The fetchData function should take a callback function and call it with the data after a delay.
function displayData(data) {

// ● Write a callback function displayData that logs the data to the console.
 console.log(data);
}
// ● Call the fetchData function with the displayData callback.
fetchData(displayData);


// Simple Arrow Function:

// ● Convert the following function to an arrow function:

// function add(a, b) {
// return a + b;
// }
const add = (a, b) => a + b;

// ● Log the result of calling the arrow function with arguments 3 and 5.
console.log("Arrow Add", add(33, 35));


// Arrow Function with Array Methods:

// ● Create an array numbers with values from 1 to 5.
const numbers1 = [1, 2, 3, 4, 5];

// ● Use the map method and an arrow function to create a new array with each number squared.
const squared = numbers1.map(num => num * num);

// ● Log the resulting array to the console.
console.log("Squared:", squared);


// Variable Scope:

// ● Write a function outer that declares a variable x and assigns it a value.
function outer() {
  let x = 10;

// ● Inside outer, write another function inner that logs x to the console.
  function inner() {
    console.log("Inner x", x);
  }


// ● Call the inner function from within outer.
  inner();
}

// ● Call the outer function to see the result.
outer(); 


// Closure:

// ● Write a function createCounter that returns another function.
function createCounter() {
  let count = 0;
  return function () {
 


// ● The returned function should increment and log a counter variable that is declared in createCounter.
    count++;
    console.log("Count:", count);
  };
}

// ● Create two counters and demonstrate that they maintain independent state.
const counter1 = createCounter();
const counter2 = createCounter();

counter1(); 
counter1();

counter2(); 


// Simple Default Parameters:

// ● Write a function greet that takes a name and a greeting message with a default value of "Hello".
function greetUser(name, greeting = "Hello") {

// ● The function should log the greeting message and the name to the console.
  console.log(`${greeting}, ${name}`);
}

// ● Call the function with and without the greeting message to see both cases.
greetUser("Ali");
greetUser("Sara", "Hi");


// Default Parameters with Other Arguments:

// ● Write a function calculateArea that takes width and height with default values of 10 and 5, respectively.
function calculateArea(width = 10, height = 5) {

// ● The function should return the area.
  return width * height;
}
// ● Call the function with and without arguments and log the results.
console.log("Area 1", calculateArea());
console.log("Area 2", calculateArea(4, 6));


// Square Numbers:

// ● Create an array numbers with values [1, 2, 3, 4, 5].
const nums = [1, 2, 3, 4, 5];

// ● Use map to create a new array where each number is squared.
const squares = nums.map(n => n ** 2);

// ● Log the resulting array to the console.
console.log("Squares", squares);


// Convert to Uppercase:

// ● Create an array words with values ["apple", "banana", "cherry"].
const words1 = ["apple", "banana", "cherry"];

// ● Use map to create a new array where each word is converted to uppercase.
const upperWords = words1.map(w => w.toUpperCase());

// ● Log the resulting array to the console.
console.log("Uppercase", upperWords);


// Filter Even Numbers:

// ● Create an array numbers with values [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ● Use filter to create a new array containing only even numbers.
const evens = numList.filter(n => n % 2 === 0);

// ● Log the resulting array to the console.
console.log("Evens", evens);


// Filter Long Words:

// ● Create an array words with values ["apple", "banana", "cherry", "date"].
const wordList = ["apple", "banana", "cherry", "date"];

// ● Use filter to create a new array containing only words with more than 5 characters.
const longWords = wordList.filter(w => w.length > 5);

// ● Log the resulting array to the console.
console.log("Long Words", longWords);


// Log Numbers:

// ● Create an array numbers with values [1, 2, 3, 4, 5].
const numArray = [1, 2, 3, 4, 5];

// ● Use forEach to log each number to the console.
numArray.forEach(n => console.log("Number", n));


// Log Word Lengths:

// ● Create an array words with values ["apple", "banana", "cherry"].
const wordLengths = ["apple", "banana", "cherry"];

// ● Use forEach to log the length of each word to the console.
wordLengths.forEach(word => console.log(word, "Length", word.length));


// Sum of Numbers:

// ● Create an array numbers with values [1, 2, 3, 4, 5].
const toSum = [1, 2, 3, 4, 5];

// ● Use reduce to calculate the sum of the numbers.
const totalSum = toSum.reduce((acc, val) => acc + val, 0);

// ● Log the result to the console.
console.log("Sum", totalSum);


// Concatenate Strings:

// ● Create an array words with values ["Hello", "world", "this", "is", "JavaScript"].
const phrases = ["Hello", "world", "this", "is", "JavaScript"];

// ● Use reduce to concatenate all the words into a single string, separated by spaces.
const sentence = phrases.reduce((acc, word) => `${acc} ${word}`);

// ● Log the result to the console.
console.log("Sentence", sentence);


// Check for Even Number:

// ● Create an array numbers with values [1, 3, 5, 7, 8].
const mixNums = [1, 3, 5, 7, 8];

// ● Use some to check if there is at least one even number in the array.
const hasEven = mixNums.some(n => n % 2 === 0);

// ● Log the result to the console.
console.log("Has Even", hasEven);


// Check for Long Word:

// ● Create an array words with values ["apple", "banana", "cherry", "date"].
const wordCheck = ["apple", "banana", "cherry", "date"];

// ● Use some to check if there is at least one word with more than 5 characters.
const hasLongWord = wordCheck.some(w => w.length > 5);

// ● Log the result to the console.
console.log("Has Long Word:", hasLongWord);


// Check All Even Numbers:

// ● Create an array numbers with values [2, 4, 6, 8, 10].
const allEven = [2, 4, 6, 8, 10];

// ● Use every to check if all numbers in the array are even.
const isAllEven = allEven.every(n => n % 2 === 0);

// ● Log the result to the console.
console.log("All Even", isAllEven);


// Check All Long Words:

// ● Create an array words with values ["elephant", "giraffe", "hippopotamus"].
const animals = ["elephant", "giraffe", "hippopotamus"];

// ● Use every to check if all words in the array have more than 5 characters.
const allLong = animals.every(a => a.length > 5);

// ● Log the result to the console.
console.log("All Long Words", allLong);


// Find First Even Number:

// ● Create an array numbers with values [1, 3, 5, 7, 8].
const mixedNums = [1, 3, 5, 7, 8];

// ● Use find to get the first even number in the array.
const firstEven = mixedNums.find(n => n % 2 === 0);

// ● Log the result to the console.
console.log("First Even", firstEven);


// Find Long Word:

// ● Create an array words with values ["apple", "banana", "cherry", "date"].
const words2 = ["apple", "banana", "cherry", "date"];

// ● Use find to get the first word with more than 5 characters.
const longWord = words2.find(word => word.length > 5);

// ● Log the result to the console.
console.log("First Long Word", longWord);


// Find Index of First Even Number:

// ● Create an array numbers with values [1, 3, 5, 7, 8].
const nums2 = [1, 3, 5, 7, 8];

// ● Use findIndex to get the index of the first even number in the array.
const firstEvenIndex = nums2.findIndex(n => n % 2 === 0);

// ● Log the result to the console.
console.log("Index of First Even", firstEvenIndex);


// Find Index of Long Word:

// ● Create an array words with values ["apple", "banana", "cherry", "date"].
const letters = ["apple", "banana", "cherry", "date"];

// ● Use findIndex to get the index of the first word with more than 5 characters.
const indexLongWord = letters.findIndex(letters => letters.length > 5);

// ● Log the result to the console.
console.log("Index of Long Word", indexLongWord);


// Simple Promise:

// ● Write a function delay that returns a promise which resolves after a given number of milliseconds.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ● Use the delay function to log "Hello, world!" to the console after a delay of 2 seconds.
delay(2000).then(() => console.log("Hello, world!"));


// Promise Chain:

// ● Write a function fetchData that returns a promise which resolves with some data (e.g., a simple object).
function fetchData() {
  return Promise.resolve({ id: 1, name: "Ali" });
}
// ● Chain a .then() method to the fetchData promise to log the data to the console.
fetchData().then(data => console.log("Data:", data));


// Error Handling:

// ● Write a function fetchUserData that returns a promise which resolves with user data (e.g., an object with name and age properties).
function fetchUserData() {
  const user = { name: "Sara" }; 
  return new Promise((resolve, reject) => {
    if (!user.age) {
// ● Modify the function to reject the promise with an error message if the user data is missing an age property.
      reject("Error: Age not found in user data.");
    } else {
      resolve(user);
    }
  });
}
// ● Use a .catch() method to handle the error and log an appropriate message to the console.
fetchUserData()
  .then(data => console.log("User:", data))
  .catch(err => console.log(err));


// Simulate Network Request:

// ● Write a function getWeather that simulates a network request to fetch weather data (use setTimeout).
function getWeather(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
  

// ● The function should return a promise that resolves with weather data after 1 second.

      if (success) {
        resolve({ temp: 28, condition: "Sunny" });
      }
    

// ● Simulate an error scenario where the promise rejects with an error message.
 else {
        reject("Network error: Failed to fetch weather.");
      }
    }, 1000);
  });
}

// ● Use .then() and .catch() to handle both success and error cases, logging appropriate messages to the console.
getWeather()
  .then(data => console.log("Weather", data))
  .catch(err => console.log("Error", err));


// Simple async Function:

// ● Write an async function sayHello that uses await to call the delay function (from Task 1) and logs "Hello, world!" to the console after a delay of 2 seconds.
async function sayHello() {
  await delay(2000);
  console.log("Hello, world!");
}
sayHello();


// Fetch Data with async/await:

// ● Write an async function getUserData that uses await to call the fetchUserData function (from Task 2).
function fetchUserData() {
  const user = { name: "Sara" };
  return new Promise((resolve, reject) => {
    if (!user.age) {
      reject("Error: Age not found in user data.");
    } else {
      resolve(user);
    }
  });
}

// ● Use a try/catch block to handle potential errors and log appropriate messages to the console.
async function getUserData() {
  try {
    const user = await fetchUserData();
    console.log("User fetched", user);
  } catch (error) {
    console.log("Fetch error", error);
  }
}

getUserData();



// Fetch and Process Data:

// ● Write a function fetchUser that returns a promise which resolves with user data (e.g., an object with name and age properties).
function fetchUser() {
  return Promise.resolve({ id: 1, name: "Ahmed", age: 22 });
}

// ● Write a function fetchPosts that returns a promise which resolves with an array of posts for a given user.
function fetchPosts(user) {
  return Promise.resolve(["Post 1", "Post 2", "Post 3"]);
}

// ● Write an async function getUserAndPosts that uses await to fetch user data and then their posts, logging both to the console.
async function getUserAndPosts() {
  const user = await fetchUser();
  const posts = await fetchPosts(user);
  console.log("User:", user);
  console.log("Posts:", posts);
}
getUserAndPosts();


// Error Handling in async/await:

// ● Modify the fetchUser function to reject the promise with an error if the user data is not found.
function fetchUserWithError(found = false) {
  return new Promise((resolve, reject) => {
    if (found) {
      resolve({ id: 2, name: "Aima" });
    } else {
      reject("User not found");
    }
  });
}

// ● Write an async function getUserInfo that uses await to call the fetchUser function and handles potential errors with a try/catch block, logging appropriate messages to the console.

async function getUserInfo() {
  try {
    const user = await fetchUserWithError();
    console.log("User Info", user);
  } catch (error) {
    console.log("Error", error);
  }
}
getUserInfo();


// Simulate API Calls:

// ● Write a function apiCall that simulates an API call and returns a promise which resolves with data after a random delay (use setTimeout and Math.random()).
function apiCall(label) {
  const delay = Math.random() * 2000;
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`${label} response after ${Math.floor(delay)}ms`);
    }, delay);
  });
}

// ● Write an async function getData that uses await to call apiCall three times in sequence, logging each result to the console.
async function getData() {
  try {
    const res1 = await apiCall("Call 1");
    console.log(res1);

    const res2 = await apiCall("Call 2");
    console.log(res2);

    const res3 = await apiCall("Call 3");
    console.log(res3);
  } catch (error) {
    console.log("API Error:", error);
  }
}

// ● Use try/catch to handle any errors that may occur during the API calls.
getData();