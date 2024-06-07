let current_users: string[] =  ["ali", "alia", "aqsa", "ayesha", "areeba"];

let new_users: string[] = ["humna", "hina", "huma", "aqsa", "konain"];

new_Users.forEach((newuser) => {
    if (
        current_Users.some(
            (currentuser) => currentuser.toLowerCase() === newuser.toLowerCase()
        )
) {
    console.log(`${newuser}  will need to enter a new username.`);
} else {
    console.log(`${newuser} is available.`);
}
});
