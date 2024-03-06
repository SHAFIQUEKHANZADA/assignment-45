var guest_list = ["Zayan", "Tanzeel", "Aoun"];
guest_list.forEach(function (guest_list) {
    console.log("Dear ".concat(guest_list, ", would you like to join me for dinner?"));
});
//a guest who can't make it
var guest11 = guest_list[1];
console.log("\nUnfortunately, ".concat(guest11, " can't make it to the dinner.\n"));
//Replace the guest who can't make it with a new guest
var newGuest = "Talha";
guest_list[1] = newGuest;
console.log(guest_list);
// Print second set of dinner invitations
for (var _i = 0, guest_list_1 = guest_list; _i < guest_list_1.length; _i++) {
    var guest = guest_list_1[_i];
    console.log("Dear ".concat(guest, ", \n\twould you like to join me for dinner?\n\t"));
}
var newGuest1 = "Imran";
guest_list.unshift(newGuest1);
var newGuest2 = "Nasir";
guest_list.splice(Math.floor(guest_list.length / 2), 0, newGuest2);
var newGuest3 = "Ayub";
guest_list.push(newGuest3);
for (var _a = 0, guest_list_2 = guest_list; _a < guest_list_2.length; _a++) {
    var guest = guest_list_2[_a];
    console.log("Dear ".concat(guest, ",\n\twould you like to join me for dinner?\n\t"));
}
