var guestList = ["Konain", "Mehwish", "Azhan", "Yaseen"];
var unableAttend = guestList[0];
console.log(unableAttend, "not inv;ited for dinner");
guestList.splice(0, 1, "Yaseen");
console.log("great news ! we have found a big table for dinner.");
guestList.unshift("ali");
guestList.push("Hina");
var middleIndex = (guestList.length / 2);
guestList.splice(middleIndex, 0, "Huma");
console.log("Updated List of our guest");
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ",would you like to dinner with me?")); });
