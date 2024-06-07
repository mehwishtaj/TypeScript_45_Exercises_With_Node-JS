//EXERCISE 12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them.
//The text of each message should be the same, but each message should be personalized with the person’s name.

let names: string[] = ["Mehwish", "Hina", "Saima", "Faiqa","Habiba",]; 
let message: string = ` Are you ready for a birthday party?`;
names.forEach(friend => console.log(`Hi, ${friend}! Are you ready for a birthday party?`));