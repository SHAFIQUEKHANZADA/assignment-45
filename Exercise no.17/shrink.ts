let guest_list: string[] = ["Zayan", "Tanzeel", "Aoun"];

guest_list.forEach(guest_list => {
    console.log(`Dear ${guest_list}, would you like to join me for dinner?`)})
    console.log(" \nSorry, the dinner table can only accommodate two guests.")

//Removing guest
while (guest_list.length > 2) {
    const removedGuest = guest_list.pop();
    if (removedGuest) {
      console.log(`Sorry, ${removedGuest}, you can't be invited to dinne`);
    }
}

//print a message to remain guest
guest_list.forEach((remainingGuest) => {
    console.log(`${remainingGuest}, you're still invited to dinner.`);
  });

guest_list.slice(0, 2);
console.log(guest_list)