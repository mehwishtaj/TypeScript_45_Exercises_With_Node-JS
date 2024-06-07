var current_Users = ["ali", "alia", "aqsa", "ayesha", "areeba"];
var new_Users = ["humna", "hina", "huma", "aqsa", "konain"];
new_Users.forEach(function (newuser) {
    if (current_Users.some(function (currentuser) { return currentuser.toLowerCase() === newuser.toLowerCase(); })) {
        console.log("".concat(newuser, "  will need to enter a new username."));
    }
    else {
        console.log("".concat(newuser, " is available."));
    }
});
