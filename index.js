
let person = {
    name:'kai',
    age : 30
};

person.name = 'Mercy';

person['name'] = 'Jeff'
console.log(person.name)

let selecteColors = ['red', 'blue'];
selecteColors[2] = 'green';
console.log(selecteColors.length );

function square(number){
    return number * number;
}
let number = square(2);
console.log(number);


// template string
function createEmail(firstName, price){
    let shipping = 6.57;
    console.log(`Hi ${firstName}! Thanks!
    Total: ${price}
    Shipping: ${shipping}
    Grand Total: ${price + shipping}`);
}

createEmail("Kai", 456.67)

function createReceipt(firstName, price){
    let vat = 100;
     console.log(`Hello ${firstName}! Thanks for shopping with us!
     Price: ${price}
     VAT: ${vat}
     Grand total: ${price + vat}`);

}

createReceipt("Jeff", 2000)


// Mappingclear

let course = new Map();

course.set("react", {description: "ui"});
course.set("jest", {description: "testing" });

console.log(course);
console.log(course.react);
console.log(course.get("react"));

let details = new Map([
    [new Date(), "today"],
    [2, {javascript: ["js", "node", "react"]}],
    ["items", [1,2]]
]);

console.log(details);


let unit = new Map();

console.log(course);
console.log(course.python);
console.log(course.get("python"));

let description = new Map([
    [new Date(), "Monday"],
    [3, {django: [["programming", "scripting", "backend"]]}],
    ["items", [1,2]]
]);

console.log(description);



















