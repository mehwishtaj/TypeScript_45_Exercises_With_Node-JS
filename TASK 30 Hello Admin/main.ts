let UserNames = ["konain", "admin", "azhan", "huma", "ali"];

UserNames.forEach(oneuser =>{
    if(oneuser === "admin"){
        console.log(`hello ${oneuser}, would you like to see a status report?`)
    }else{
        console.log(`hello ${oneuser}, thank you for logging in again.`) 
    }
})