var magiciansName = ["Harry", "Hermione", "Ron"];
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//  let magiciansName: string[] = ["Harry", "Hermione", "Ron"];
var great_magicians = make_great(magiciansName);
show_magicians(great_magicians);
