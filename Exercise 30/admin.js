var userNames = ["Admin", "Shahbaz", "Zayan", "Hamdan", "Talha"];
// Loop through the array and print greetings
for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
    var username = userNames_1[_i];
    if (username === 'Admin') {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
