let guest_list: string[] = ["Zayan", "Tanzeel", "Aoun"];

// for(let i=0; i<guest_list.length; i++) {
//     console.log(`Dear ${guest_list},\n\nYou are cordially invited to dinner. It would be an honor to have your company.\n\nThank you`);
// }

//a guest who can't make it

let guest11: string= guest_list[1];
console.log(`\nUnfortunately, ${guest11} can't make it to the dinner.\n`);

//Replace the guest who can't make it with a new guest

let newGuest: string = "Talha";
guest_list[1] = newGuest;
console.log(guest_list);

// Print second set of dinner invitations

for (let guest of  guest_list) {
    console.log(`Dear ${guest},\n\nYou are cordially invited to dinner. It would be an honor to have your company.\n\nThank you,\n[Shafique Ur Rehman]`);
}

let newGuest1: string = "Imran";
 guest_list.unshift(newGuest1);

let newGuest2: string = "Nasir";
 guest_list.splice(Math.floor(guest_list.length / 2), 0, newGuest2);

let newGuest3: string = "Ayub";
guest_list.push(newGuest3);

for (let guest of  guest_list) {
    console.log(`Dear ${guest},\n\nYou are cordially invited to dinner. It would be an honor to have your company.\n\nThank you`);
}