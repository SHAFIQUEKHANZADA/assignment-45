var current_users = ['Arsalan', 'Babar', 'daoud', 'Kumail', 'Wajahat'];
var new_users = ['Arsalan', 'Talha', 'Hamdan', 'Babar', 'Wajahat'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    if (current_users.includes(new_username)) {
        console.log("The username '".concat(new_username, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_username, "' is available."));
    }
}
