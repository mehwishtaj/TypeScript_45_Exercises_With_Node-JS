//equal and unequal
var orange = "orange";
console.log("is orange is equal to orange");
console.log(orange == "orange");
console.log("\nis orange is not equal to orange");
console.log(orange != "orange");
//lowercase function
var uppercaseorange = "orange";
console.log("\nis orange is equal to orange after converting to lowercase?");
console.log(uppercaseorange.toLowerCase() == "orange");
console.log("\nis orange is equal to orange after converting to lowercase?");
console.log(uppercaseorange.toLowerCase() !== "orange");
//Numerical test
var twenty = 20;
var thirty = 30;
console.log("\n twenty is equal to thirty?");
console.log(twenty == thirty);
console.log("\n twenty is not equal to thirty?");
console.log(twenty !== thirty);
//greater than and less than
console.log("\n twenty is greater than ten?");
console.log(twenty > 10);
console.log("\n twenty is less than five?");
console.log(twenty < 5);
//greater than or equal to and less than or equal to
console.log("\n twenty is greater than or equal to thirty?");
console.log(twenty >= 30);
console.log("\n twenty is less than or equal to thirty?");
console.log(twenty <= 30);
//"and" and "or" operators
console.log("\n thirty is not equal to twenty and thirty is greater than twenty");
console.log(thirty != 20 && thirty > 20);
console.log("\n thirty is not equal to twenty and thirty is less than twenty");
console.log(thirty != 20 && thirty < 20);
console.log("\n twenty is greater than thirty OR thirty is equal to thirty");
console.log(twenty > 30 || 30 == 30);
console.log("\n twenty is greater than thirty OR thirty is not equal to thirty");
console.log(twenty > 30 || 30 !== 30);
//item is in arry
var fruits = ["apple", "banana", "kivi"];
console.log("\nis banana include in my fruit arry");
console.log(fruits.includes("banana"));
//item is not in arry
console.log("\n banana is not include in my fruit arry");
console.log(!fruits.includes("banana"));
