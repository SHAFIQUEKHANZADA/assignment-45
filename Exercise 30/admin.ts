let userNames: string[] = ["Admin", "Shahbaz", "Zayan", "Hamdan", "Talha"];

// Loop through the array and print greetings
for (let username of userNames) {
    if (username === 'Admin') {
        console.log("Hello Admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }

}