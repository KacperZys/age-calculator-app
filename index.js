const day = document.getElementsByName('day').value;
const month = document.getElementsByName('month').value;
const year = document.getElementsByName('year').value;
const date = new Date(year, month, day);

console.log(day);

let output = new Date() - date;

console.log(output);