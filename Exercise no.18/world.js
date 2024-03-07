var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fvtPlace = ["Kashmir", "switzerland", "Ukraine", "Austria"];
//In orignal order
console.log("Orignal order:", fvtPlace);
//In alphabatical order
var order_place = __spreadArray([], fvtPlace, true).sort();
console.log("Alphabatic order:", order_place);
// Show that the original array is still in its original order
console.log("Original Order (unchanged):", fvtPlace);
// in reverse alphabetical order
var rev_ord = __spreadArray([], fvtPlace, true).sort().reverse();
console.log("Reverse alphabetical order:", rev_ord);
// Show that the original array is still in its original order
console.log("Original Order (unchanged):", fvtPlace);
fvtPlace.reverse();
console.log("Reversed Order:", fvtPlace);
console.log(__spreadArray([], fvtPlace, true).sort());
console.log(__spreadArray([], fvtPlace, true).sort().reverse());
