

let personName: string = "Mehwish taj";
// lower case
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toLocaleUpperCase());
//tital case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
