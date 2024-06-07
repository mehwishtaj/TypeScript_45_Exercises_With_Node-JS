function make_album(artistName: string, albumTitle: string){
    return {artistName, albumTitle}
}

let album1 = make_album("Hina", "rang_e_mohabat");
let album2 = make_album("Huma", "rang_e_mehal");
let album3 = make_album("Humna", "rang_e_roson");

console.log(album1);
console.log(album2);
console.log(album3);

function make_album1(artistName: string, albumTitle: string, numberoftracks?: number){
    return {artistName, albumTitle, numberoftracks}
}

let album4 = make_album1("aliha", "mohabat",25);
let album5 = make_album1("ali", "rogan",44);
let album6 = make_album1("areesha", "javascript",55);

console.log(album4);
console.log(album5);
console.log(album6);