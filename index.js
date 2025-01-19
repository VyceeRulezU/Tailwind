

// 1. Create a variable to store your name and log it to the console.
const myName = "Victor Ironali";
console.log(myName);

// 2. Declare a variable to store your age and another for your favorite color. Print a sentence using both variables.
const age = 25;
const favoriteColor = "blue";
console.log(`I am ${age} years old and my favorite color is ${favoriteColor}.`);

// 3. Write a program to check if a number is even or odd.
function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(7));

// 4. Convert a string to uppercase and lowercase and log both results.
const sampleString = "Hello World";
console.log(sampleString.toUpperCase());
console.log(sampleString.toLowerCase());

// 5. Use typeof to determine the type of five different variables and print the results.
const variables = [42, "hello", true, null, { name: "John" }];
variables.forEach((v) => console.log(typeof v));

// 6. Write a function to calculate the square of a number.
function square(num) {
  return num * num;
}
console.log(square(5));

// 7. Create a function that takes two numbers and returns their sum.
function sum(a, b) {
  return a + b;
}
console.log(sum(3, 4));

// 8. Write a function that greets a user with "Hello, [Name of user]!".
function greetUser(name) {
  return `Hello, ${name}!`;
}
console.log(greetUser("Victor Ironali"));

// 9. Create a function that takes a number and returns true if it is divisible by 5.
function isDivisibleBy5(num) {
  return num % 5 === 0;
}
console.log(isDivisibleBy5(10));

// 10. Write a function that converts Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(0));

// 11. Create an object to represent a book with properties like title, author, and year.
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};
console.log(book);

// 12. Write a function that takes a car object and logs "The car is a [make] [model]."
function describeCar(car) {
  console.log(`The car is a ${car.make} ${car.model}.`);
}
describeCar({ make: "Toyota", model: "Camry" });

// 13. Add a method to an object that prints all its properties and values.
book.printDetails = function () {
  for (const key in this) {
    if (typeof this[key] !== "function") {
      console.log(`${key}: ${this[key]}`);
    }
  }
};
book.printDetails();

// 14. Update a property in an object and log the updated object.
book.year = 2023;
console.log(book);

// 15. Create an array of your five favorite foods and log the second item.
const favoriteFoods = ["Pizza", "Burger", "Pasta", "Ice Cream", "Sushi"];
console.log(favoriteFoods[1]);

// 16. Add a new item to the end of an array and log the updated array.
favoriteFoods.push("Steak");
console.log(favoriteFoods);

// 17. Remove the first item from an array and log the updated array.
favoriteFoods.shift();
console.log(favoriteFoods);

// 18. Use indexOf to find the position of an item in an array and log the result.
console.log(favoriteFoods.indexOf("Sushi"));

// 19. Combine two arrays into one using the spread operator.
const drinks = ["Coke", "Pepsi"];
const combinedArray = [...favoriteFoods, ...drinks];
console.log(combinedArray);

// 20. Write a for loop to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 21. Use a for-of loop to iterate through an array of colors and log each one.
const colors = ["Red", "Green", "Blue"];
for (const color of colors) {
  console.log(color);
}

// 22. Print the sum of numbers from 1 to 50 using a loop.
let sumOfNumbers = 0;
for (let i = 1; i <= 50; i++) {
  sumOfNumbers += i;
}
console.log(sumOfNumbers);

// 23. Create a loop that prints every second item in an array.
for (let i = 1; i < favoriteFoods.length; i += 2) {
  console.log(favoriteFoods[i]);
}

// 24. Nested loop to create a multiplication table for numbers 1–5.
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// 25. Use forEach to log each item in an array of numbers.
[1, 2, 3, 4, 5].forEach((num) => console.log(num));

// 26. Use map to create a new array with all numbers doubled.
const doubled = [1, 2, 3].map((num) => num * 2);
console.log(doubled);

// 27. Use filter to create a new array of numbers greater than 10 from an array.
const filtered = [5, 15, 20, 2].filter((num) => num > 10);
console.log(filtered);

// 28. Sort an array of strings alphabetically.
const fruits = ["Banana", "Apple", "Cherry"];
console.log(fruits.sort());

// 29. Use reduce to find the total of all numbers in an array.
const total = [1, 2, 3].reduce((acc, curr) => acc + curr, 0);
console.log(total);

// 30. Join two arrays and remove duplicates using filter.
const unique = [...new Set([...colors, ...fruits])];
console.log(unique);

// 31. Use join to create a string from an array of words.
console.log(["I", "love", "coding"].join(" "));

// 32. Map to create an array of object names from an array of objects.
const items = [{ name: "Table" }, { name: "Chair" }];
console.log(items.map((item) => item.name));

// 33. Filter to get all even numbers from an array.
console.log([1, 2, 3, 4, 5].filter((num) => num % 2 === 0));

// 34. Sort an array of objects by a numeric property.
const people = [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }];
console.log(people.sort((a, b) => a.age - b.age));

// 35. Write a function that takes a number and returns its factorial.
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5));

// 36. Create a function that reverses a string.
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// 37. Count the number of vowels in a sentence.
function countVowels(sentence) {
  return (sentence.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("hello world"));

// 38. Check if a string is a palindrome.
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam"));

// 39. Calculate the greatest common divisor (GCD) of two numbers.
function gcd(a, b) {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}
console.log(gcd(20, 8));

// 40. Filter out students with scores less than 50.
const students = [
  { name: "Alice", score: 45 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 65 },
  { name: "Diana", score: 30 },
];
console.log(students.filter((student) => student.score >= 50));

// 41. Write a function that takes an array of numbers and returns the largest number.
function findLargest(arr) {
  return Math.max(...arr);
}
console.log(findLargest([1, 5, 3, 9]));

// 42. Find all prime numbers in an array.
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log([1, 2, 3, 4, 5].filter(isPrime));

// 43. Find the word with the most letters in a sentence.
function longestWord(sentence) {
  return sentence.split(" ").reduce((longest, current) =>
    current.length > longest.length ? current : longest
  );
}
console.log(longestWord("I love JavaScript programming"));

// 44. Count the frequency of each character in a string.
function charFrequency(str) {
  return str.split("").reduce((freq, char) => {
    freq[char] = (freq[char] || 0) + 1;
    return freq;
  }, {});
}
console.log(charFrequency("hello world"));

// 45. Shopping cart with methods to calculate total cost and add/remove items.
const cart = {
  items: [],
  addItem(item, price) {
    this.items.push({ item, price });
  },
  removeItem(item) {
    this.items = this.items.filter((i) => i.item !== item);
  },
  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  },
};
cart.addItem("Apple", 1);
cart.addItem("Banana", 2);
cart.removeItem("Apple");
console.log(cart.calculateTotal());

// 46. Find the second largest number in an array.
function secondLargest(arr) {
  const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
  return uniqueSorted[1];
}
console.log(secondLargest([10, 20, 20, 30]));

// 47. Generate a random password with specified length and characters.
function generatePassword(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  return Array.from({ length }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join("");
}
console.log(generatePassword(8));

// 48. Group an array of strings by their first letter.
function groupByFirstLetter(arr) {
  return arr.reduce((grouped, str) => {
    const firstLetter = str[0].toLowerCase();
    grouped[firstLetter] = grouped[firstLetter] || [];
    grouped[firstLetter].push(str);
    return grouped;
  }, {});
}
console.log(groupByFirstLetter(["Apple", "Banana", "Cherry", "Avocado"]));

// 49. Console.log your experience at the Dev and Design Bootcamp.
console.log("It was an enriching experience that honed my coding and design skills.");

// 50. Return students who scored 50 or above.
function getPassingStudents(students) {
  return students.filter((student) => student.score >= 50);
}
console.log(getPassingStudents(students));
