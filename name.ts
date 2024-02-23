let personName: string = "Kamran khan tessori"

//LowerCase
console.log("Lowercase: ", personName.toLowerCase());

//UpperCase
console.log("Uppercase: ", personName.toUpperCase());

//TitleCase
console.log("Titlecase: ", personName.replace(/\bw/g,c => c.toUpperCase()));