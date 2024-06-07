//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them.
//The text of each message should be the same, but each message should be personalized with the person’s name.
var names = ["Mehwish", "Hina", "Saima", "Faiqa", "Habiba",];
var message = " Are you ready for a birthday party?";
names.forEach(function (friend) { return console.log("Hi, ".concat(friend, "! Are you ready for a birthday party?")); });
