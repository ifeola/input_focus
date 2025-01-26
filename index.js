// Binary search algorithm for numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let start = new Date();
console.log(start.getTime());

function getNumber(array, target) {
	let low = 0; // Gets the index of the first number
	let high = array.length - 1; // Gets the index of the last number

	while (low <= high) {
		//Loops through the array until the condition is no longer satisfied
		let mid = Math.floor((high + low) / 2); // Gets the middle index of the array

		if (array[mid] === target) {
			// if the value of the middle index is same as the target, return the mid index
			return mid;
		} else if (array[mid] < target) {
			// else if the value of the middle index is less than the target, start to check from the middle + 1
			low = mid + 1;
		} else {
			// else if the value of the middle index is greater than the target, the check ends at middle - 1
			high = mid - 1;
		}
	}

	// If nothing is found, return -1
	return -1;
}

let result = getNumber(numbers, 15);

// if (result !== -1) {
// 	console.log(`Target found at index ${result}`);
// } else {
// 	console.log("Target not found");
// }

// Binary search algorithm for names

const names = [
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
];

function searchName(array, target) {
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
}

// console.log(searchName(names, "Aiden"));

// Sorting Algorithms
// 1. Selection sort

const contacts = [
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
];

// const newArray = [];
// function selectionSortAlgorithm(array) {
// 	for (let index = 0; index < array.length; index++) {
// 		let previousContact = array[index];
// 		for (let contact = 0; contact < array.length; contact++) {
// 			if (
// 				previousContact.name.toLowerCase() > array[contact].name.toLowerCase()
// 			) {
// 				previousContact = array[contact];
// 			} else {
// 				continue;
// 			}
// 		}
// 		let contactElemenr = array.splice(index, 1);
// 		console.log(contactElemenr);
// 	}

// 	console.log(newArray);
// }

// selectionSortAlgorithm(contacts);

// function getFirstContact(array) {
// 	for (let index = 0; index < array.length; index++) {
// 		let firstContact = array[index];

// 		for (let contact = 0; contact < array.length; contact++) {
// 			if (firstContact.name.toLowerCase() < array[contact].name.toLowerCase()) {
// 				continue;
// 			} else {
// 				firstContact = array[contact];
// 			}
// 		}
// 	}
// }

function getFirstContact(array) {
	let smallest = array[0];
	let smallestIndex = 0;

	for (let index = 1; index < array.length; index++) {
		if (array[index].name.toLowerCase() < smallest.name.toLowerCase()) {
			smallest = array[index];
			smallestIndex = index;
		}
	}

	return smallestIndex;
}

function selectionSortAlgorithm(array) {
	let newArray = [];

	for (let index = 0; index < array.length; array++) {
		let smallest = getFirstContact(array);
		let contact = array.splice(smallest, 1);
		newArray = [...newArray, contact];
	}

	return newArray;
}

console.log(selectionSortAlgorithm(contacts));
