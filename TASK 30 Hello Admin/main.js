var usernames = ["konain", "admin", "azhan", "huma", "ali"];
usernames.forEach(function (oneuser) {
    if (oneuser === "admin") {
        console.log("hello ".concat(oneuser, ", would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneuser, ", thank you for logging in again."));
    }
});
