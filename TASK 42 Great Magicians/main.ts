 let magiciansName: string[] = ["Harry", "Hermione", "Ron"];
 

 function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
     
 }
 function make_great(magicians: string[]) {
      return magicians.map(name => `The Great ${name}`);
 } 
 

let great_magicians = make_great(magiciansName);

show_magicians(great_magicians)

