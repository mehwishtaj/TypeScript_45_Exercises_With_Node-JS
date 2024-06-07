function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nmake a sandwich with the following items:\n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("Enjoy your sandwich");
}
makeSandwich("bread", "cheese", "tomato", "mayo");
makeSandwich("bread", "cheese");
makeSandwich("bread", "butter", "egg", "cheese", "chicken");
