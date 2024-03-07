let fvtPlace: string[] = ["Kashmir", "switzerland", "Ukraine", "Austria"];

//In orignal order
console.log("Orignal order:", fvtPlace)

//In alphabatical order
let order_place: string[] = [...fvtPlace].sort();
console.log("Alphabatic order:", order_place)

// Show that the original array is still in its original order
console.log("Original Order (unchanged):", fvtPlace)

// in reverse alphabetical order
let rev_ord: string[] = [...fvtPlace].sort().reverse()
console.log("Reverse alphabetical order:", rev_ord)

// Show that the original array is still in its original order
console.log("Original Order (unchanged):", fvtPlace)

fvtPlace.reverse()
console.log("Reversed Order:", fvtPlace)

console.log([...fvtPlace].sort())
console.log([...fvtPlace].sort().reverse())
