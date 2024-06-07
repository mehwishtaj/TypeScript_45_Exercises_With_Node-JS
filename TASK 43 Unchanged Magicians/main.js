var magiciansName = ["Harry", "Hermione", "Ron"];
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var copy_magicians_name = magiciansName.slice();
var copy_great_magicians = make_great(copy_magicians_name);
console.log("orginal array\n");
show_magicians(magiciansName);
console.log("\ncopied array\n");
show_magicians(copy_great_magicians);
