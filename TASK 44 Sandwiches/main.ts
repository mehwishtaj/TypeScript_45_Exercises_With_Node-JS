function makeSandwich(...items: string[]){
    console.log("\nmake a sandwich with the following items:\n");

    items.forEach(singleitem => console.log(singleitem));

    console.log("Enjoy your sandwich");
    
}

makeSandwich("bread", "cheese", "tomato", "mayo");

makeSandwich("bread", "cheese");

makeSandwich("bread", "butter", "egg", "cheese", "chicken");