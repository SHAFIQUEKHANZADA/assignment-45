let person_name: string = "\t Sir Zia Khan \n" //whitespace characters at the beginning and end of the name

console.log(JSON.stringify(person_name)); //JSON.stringify is used to display whitespace characters explicitly.

let striping: string = person_name.trim()
console.log(striping) //// Print the name after stripping whitespace
