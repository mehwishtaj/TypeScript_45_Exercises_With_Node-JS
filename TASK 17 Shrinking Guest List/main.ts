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

console.log("unfortunately,the new dinner table wont arrive on time, So I can only invite two Guest to donner with me");
while(guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);
}
console.log("invitations to the last 2 Guest");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));
guestList.pop();
guestList.pop();

console.log("Empty List:",guestList);