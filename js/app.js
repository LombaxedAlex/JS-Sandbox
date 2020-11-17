console.log('Hello from script!');

const name = 'Harry Potter';
const age = 31;
const job = 'Wizard';
const city = 'London';
const gender = 'Male';

console.log(typeof(name));
console.log(typeof(age));

function Hello(){
    return 'Hello';
}

//Arrays
const fruit = ['apple', 'banana', 'orange', 'pear'];
console.log(fruit);
//add an element to the array
fruit.push('pineapple-apple-pen');
console.log(fruit);
// sort an array
console.log(fruit.sort());
//delete the very first element
fruit.shift();
console.log(fruit);
//delete the very last element
fruit.pop();
console.log(fruit);

//loop through the array
fruit.forEach(item => {
    console.log("Fruit from array: ", item);
});

//Date and Time
const today = new Date();
let todayDate = today.getDate();
console.log(todayDate);
let todayMonth = today.getMonth();
console.log(todayMonth);
let todayYear = today.getFullYear();
console.log(todayYear);
//let fullDate = today.toLocaleDateString("en-US");                                             
let options = {weekday: "long", year: 'numeric', month: 'long', day: 'numeric'};
let fullDate = today.toLocaleDateString("en-US", options);
console.log(fullDate);

//template literate
const html = `
    <ul> ${fullDate} </ul>
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Gender: ${gender}</li>
        <li> ${name} says ${Hello()}</li>
    </ul>

`;

document.body.innerHTML = html;