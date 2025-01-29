"use strict";

// Binary search algorithm for numbers
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// function getNumber(array, target) {
// 	let low = 0; // Gets the index of the first number
// 	let high = array.length - 1; // Gets the index of the last number

// 	while (low <= high) {
// 		//Loops through the array until the condition is no longer satisfied
// 		let mid = Math.floor((high + low) / 2); // Gets the middle index of the array

// 		if (array[mid] === target) {
// 			// if the value of the middle index is same as the target, return the mid index
// 			return mid;
// 		} else if (array[mid] < target) {
// 			// else if the value of the middle index is less than the target, start to check from the middle + 1
// 			low = mid + 1;
// 		} else {
// 			// else if the value of the middle index is greater than the target, the check ends at middle - 1
// 			high = mid - 1;
// 		}
// 	}

// 	// If nothing is found, return -1
// 	return -1;
// }

// let result = getNumber(numbers, 15);

// if (result !== -1) {
// 	console.log(`Target found at index ${result}`);
// } else {
// 	console.log("Target not found");
// }

// Binary search algorithm for names

/* const names = [
	"Aiden",
	"Alexander",
	"Alice",
	"Amelia",
	"Andrew",
	"Anthony",
	"Aria",
	"Aubrey",
	"Austin",
	"Ava",
	"Benjamin",
	"Blake",
	"Brody",
	"Caden",
	"Caleb",
	"Cameron",
	"Charlotte",
	"Chloe",
	"Daniel",
	"David",
	"Dylan",
	"Elijah",
	"Ella",
	"Emily",
	"Emma",
	"Ethan",
	"Evan",
	"Gabriel",
	"Grace",
	"Grayson",
	"Hannah",
	"Harper",
	"Henry",
	"Isabella",
	"Isaac",
	"Jack",
	"Jackson",
	"Jacob",
	"James",
	"Jasmine",
	"Jayden",
	"Joseph",
	"Joshua",
	"Kayla",
	"Landon",
	"Layla",
	"Leah",
	"Liam",
	"Lily",
	"Logan",
	"Lucas",
	"Lucy",
	"Mason",
	"Matthew",
	"Mia",
	"Michael",
	"Mila",
	"Nathan",
	"Nicholas",
	"Noah",
	"Nora",
	"Oliver",
	"Olivia",
	"Owen",
	"Parker",
	"Penelope",
	"Riley",
	"Ryan",
	"Samuel",
	"Savannah",
	"Scarlett",
	"Sebastian",
	"Sofia",
	"Sophia",
	"Stella",
	"Theodore",
	"Thomas",
	"Victoria",
	"William",
	"Wyatt",
	"Xavier",
	"Zachary",
	"Zane",
	"Zara",
	"Zoe",
]; */

/* function searchName(array, target) {
	let low = 0;
	let high = array.length - 1;

	while (low <= high) {
		let mid = Math.floor((high + low) / 2);

		if (array[mid].toLowerCase() === target.toLowerCase()) {
			return `Target found at index ${mid}.`;
		} else if (array[mid].toLowerCase() < target.toLowerCase()) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}

	return `Target not found.`;
} */

// console.log(searchName(names, "Aiden"));

// Sorting Algorithms
// 1. Selection sort

/* const contacts = [
	{
		name: "Sophia Turner",
		phone: "555-1234",
		email: "sophia.turner@example.com",
	},
	{
		name: "Liam Smith",
		phone: "555-5678",
		email: "liam.smith@example.com",
	},
	{
		name: "Olivia Brown",
		phone: "555-8765",
		email: "olivia.brown@example.com",
	},
	{
		name: "Noah Johnson",
		phone: "555-4321",
		email: "noah.johnson@example.com",
	},
	{
		name: "Emma Davis",
		phone: "555-1111",
		email: "emma.davis@example.com",
	},
	{
		name: "Aiden Wilson",
		phone: "555-2222",
		email: "aiden.wilson@example.com",
	},
	{
		name: "Isabella Martinez",
		phone: "555-3333",
		email: "isabella.martinez@example.com",
	},
	{
		name: "Lucas Garcia",
		phone: "555-4444",
		email: "lucas.garcia@example.com",
	},
	{
		name: "Mia Taylor",
		phone: "555-5555",
		email: "mia.taylor@example.com",
	},
	{
		name: "Ethan Moore",
		phone: "555-6666",
		email: "ethan.moore@example.com",
	},
	{
		name: "Ava Anderson",
		phone: "555-7777",
		email: "ava.anderson@example.com",
	},
	{
		name: "Mason Thomas",
		phone: "555-8888",
		email: "mason.thomas@example.com",
	},
	{
		name: "Charlotte Lee",
		phone: "555-9999",
		email: "charlotte.lee@example.com",
	},
	{
		name: "Elijah Perez",
		phone: "555-1010",
		email: "elijah.perez@example.com",
	},
	{
		name: "Amelia Thompson",
		phone: "555-2020",
		email: "amelia.thompson@example.com",
	},
]; */

/* function getFirstContact(array) {
	let smallest = array[0];
	let smallestIndex = 0;
	for (let index = 1; index < array.length; index++) {
		const contact = array[index];
		if (contact.name.toLowerCase() < smallest.name.toLowerCase()) {
			smallest = contact;
			smallestIndex = index;
		}
	}
	return smallestIndex;
} */

/* function selectionSortAlgorithm(array) {
	let newArray = [];
	let size = array.length;
	console.log("size:", size);
	for (let index = 0; index < size; index++) {
		console.log(array.length);
		let smallest = getFirstContact(array);
		let [contact] = array.splice(smallest, 1);
		newArray = [...newArray, contact];
	}
	console.log("size:", size);

	return newArray;
} */

// console.log(selectionSortAlgorithm(contacts));

/* function factorial(number) {
	let least = 0;
	let numbers = [];

	while (least < number) {
		least = least + 1;
		numbers.push(least);
	}

	let total = numbers.reduce((previousValue, currentValue) => {
		return previousValue * currentValue;
	}, 1);

	return total;
} */

/* function factorial(n) {
	if (n <= 1) return 1;
	else {
		return n * factorial(n - 1);
	}
} */

// console.log(factorial(8));

// The explanation for the code above
// The code above runs as follow in the call stack
// LIFO - Last In First Out approach
/* 
	(n(1))
	function returns 1 when n <= 1
	(n(2)) * factorial(n(2) - 1) -> function call returns 2 * 1
	(n(3)) * factorial(n(3) - 1) -> function call returns 3 * 2
	(n(4)) * factorial(n(4) - 1) -> function call returns 4 * 6
	(n(5)) * factorial(n(5) - 1) -> function call returns 5 * 24
	(n(6)) * factorial(n(6) - 1) -> function call returns 6 * 120
	(n(7)) * factorial(n(7) - 1) -> function call returns 7 * 720
	(n(8)) * factorial(n(8) - 1) -> function call returns 8 * 5040 = 40,320
*/

// Recursive Function
/* function fibonnaci(n) {
	if (n == 0) return 0;
	else if (n == 1) return 1;
	else {
		return fibonnaci(n - 1) + fibonnaci(n - 2);
	}
} */

// console.log(fibonnaci(2));

// The explanation for the code above
// The code above runs as follow in the call stack
// LIFO - Last In First Out approach
/* 
	base call at index(0) -> if n == 0 return 0
	base call at index(1) -> else if n == 1 return 1
	recursive call of fibonacci(n at index(2)) -> (fibonacci((n - 1)) == index(1) 0 + fibonacci((n - 2) == index(0) 1 -> function call returns index(1) + index(0) == 0 + 1 = 1
	recursive call of fibonacci(n at index(3)) -> (fibonacci((n - 1)) == index(2) 1 + fibonacci((n - 2) == index(1) 1 -> function call returns index(2) + index(1) == 1 + 1 = 2
	recursive call of fibonacci(n at index(4)) -> (fibonacci((n - 1)) == index(3) 2 + fibonacci((n - 2) == index(2) 1 -> function call returns index(3) + index(2) == 1 + 2 = 3
	recursive call of fibonacci(n at index(5)) -> (fibonacci((n - 1)) == index(4) 3 + fibonacci((n - 2) == index(3) 2 -> function call returns index(4) + index(3) == 3 + 2 = 5
	recursive call of fibonacci(n at index(6)) -> (fibonacci((n - 1)) == index(5) 5 + fibonacci((n - 2) == index(4) 3 -> function call returns index(5) + index(4) == 5 + 3 = 8
	recursive call of fibonacci(n at index(7)) -> (fibonacci((n - 1)) == index(6) 5 + fibonacci((n - 2) == index(5) 3 -> function call returns index(6) + index(5) == 8 + 5 = 13
	recursive call of fibonacci(n at index(8)) -> (fibonacci((n - 1)) == index(7) 13 + fibonacci((n - 2) == index(6) 8 -> function call returns index(7) + index(6) == 12 + 8 = 21
	
*/

/* function sum(n) {
	if (n == 0) return 0;
	else if (n == 1) return 1;
	return;
}

let num = 1234;
num = num.toString()
console.log(num.length); */

function getBinary(input, result) {
	if (input == 0) return result;

	result = (input % 2) + result;
	return getBinary(Math.floor(input / 2), result);
}

// let result = getBinary(16, "");
// console.log(result);

function sumOfNatural(n) {
	if (n <= 1) return 1;
	return n + sumOfNatural(n - 1);
}

// let result = sumOfNatural(10);
// console.log(result);

/* function factorial(n) {
	if (n <= 1) return 1;
	return n * factorial(n - 1);
} */

/* function fibonacci(n) {
	if (n <= 2) return 1;

	return fibonacci(n - 1) + fibonacci(n - 2);
} */

/* function sumOfDigits(n) {
	if (n < 10) return n;

	return (n % 10) + sumOfDigits(Math.floor(n / 10));
} */

function countVowels(str) {
	if (str == "") return 0;

	let vowels = ["a", "e", "i", "o", "u"];
	let firstLetter = str[0].toLowerCase();
	let count = 0;
	if (vowels.includes(firstLetter)) {
		count = 1;
	}
	return count + countVowels(str.slice(1));
}
let result = countVowels("hello world");
console.log(result);
