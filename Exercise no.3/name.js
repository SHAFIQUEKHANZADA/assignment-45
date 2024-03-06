"use strict";
let personName = "Kamran khan tessori";
//LowerCase
console.log(personName.toLowerCase());
//UpperCase
console.log(personName.toUpperCase());
//TitleCase
console.log(personName.replace(/\bw/g, c => c.toUpperCase()));
