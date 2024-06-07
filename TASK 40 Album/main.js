function make_album(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = make_album("Hina", "rang_e_mohabat");
var album2 = make_album("Huma", "rang_e_mehal");
var album3 = make_album("Humna", "rang_e_roson");
console.log(album1);
console.log(album2);
console.log(album3);
function make_album1(artistName, albumTitle, numberoftracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberoftracks: numberoftracks };
}
var album4 = make_album1("aliha", "mohabat", 25);
var album5 = make_album1("ali", "rogan", 44);
var album6 = make_album1("areesha", "javascript", 55);
console.log(album4);
console.log(album5);
console.log(album6);
