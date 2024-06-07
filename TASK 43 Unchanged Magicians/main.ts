let magiciansName: string[] = ["Harry", "Hermione", "Ron"];
 

function show_magicians(magicians: string[]) {
   magicians.forEach(name => console.log(name));
    
}
function make_great(magicians: string[]) {
     return magicians.map(name => `The Great ${name}`);
} 

let copy_magicians_name = magiciansName.slice()

let copy_great_magicians = make_great(copy_magicians_name);

console.log("orginal array\n");

show_magicians(magiciansName);

console.log("\ncopied array\n");

show_magicians(copy_great_magicians);