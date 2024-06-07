let guestList: string[] = ["Konain","Mehwish", "Azhan", "Yaseen"];
let unableAttend: string = guestList[0];

console.log(unableAttend, "not invited for dinner");
guestList.splice(0,1, "Yaseen");
console.log("great news ! we have found a big table for dinner.");
guestList.unshift("ali");
guestList.push("Hina");
let middleIndex: number = (guestList.length / 2);
guestList.splice(middleIndex,0, "Huma");
console.log("Updated List of our guest");
guestList.forEach(oneguest => console.log(`Salam ${oneguest},would you like to dinner with me?`));
