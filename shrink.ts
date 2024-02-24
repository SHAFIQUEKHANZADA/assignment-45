let guest_list: string[] = ["Zayan", "Tanzeel", "Aoun"];

for(let i=0; i<guest_list.length; i++) {
         console.log(`Dear ${guest_list},\n\nYou are cordially invited to dinner. It would be an honor to have your company.\n\nThank you`);
         }
         
console.log("\nGood news! A bigger dinner table is now available.\n");

console.log("Unfortunately, the new dinner table won’t arrive in time, and I can only invite two people for dinner.\n");

while (guest_list.length > 2) {
    let removedGuest = guest_list.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

for (let remainingGuest of guest_list) {
        console.log(`Dear ${remainingGuest},\n\nYou are still invited to dinner. Please join us!\n\nThank you`);
    }


// Remove the last two names from the list to have an empty list
guest_list.pop();
guest_list.pop();

// Print the empty list
console.log("\nAfter the dinner, the guest list is empty:", guest_list);