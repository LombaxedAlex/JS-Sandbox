console.log('Hello from script!');

const name = 'Aleksei Manohhin';
const age = 23;
const job = 'Blogger';
const city = 'Piter';
const gender = 'Different';

console.log(typeof(name));
console.log(typeof(age));

function Hello(){
    return 'Hello';
}

const today = new Date();
let options = {weekday: "long", year: 'numeric', month: 'long', day: 'numeric'};
let fullDate = today.toLocaleDateString("en-US", options);

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