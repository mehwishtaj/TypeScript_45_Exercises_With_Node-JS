function make_Shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love typescript"; }
    console.log("making a ".concat(size, " t_shirt with the message \"").concat(message, "\" printed on it"));
}
make_Shirt();
make_Shirt("medium");
make_Shirt("small", "I love my shirt");
