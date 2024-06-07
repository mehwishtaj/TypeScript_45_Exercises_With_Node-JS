//EXERCISE 15
let guestList: string[] = ["Konain","Mehwish", "Azhan",];
let unableAttend: string = guestList[0]

console.log(unableAttend, "not inv;ited for dinner")
guestList.splice(0,1, "Yaseen");

guestList.forEach(guest =>console.log(`Salam ${guest}, would you like to dinner with me?`));