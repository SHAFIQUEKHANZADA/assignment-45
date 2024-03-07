var guest_list = ["Zayan", "Tanzeel", "Aoun"];
guest_list.forEach(function (guest_list) {
    console.log("Dear ".concat(guest_list, ", would you like to join me for dinner?"));
});
console.log(" \nSorry, the dinner table can only accommodate two guests.");
//Removing guest
while (guest_list.length > 2) {
    var removedGuest = guest_list.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest, ", you can't be invited to dinne"));
    }
}
//print a message to remain guest
guest_list.forEach(function (remainingGuest) {
    console.log("".concat(remainingGuest, ", you're still invited to dinner."));
});
guest_list.slice(0, 2);
console.log(guest_list);
