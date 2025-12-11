const reverseString = function(string) {
    return string
            .split("") // becomes array of characters e.g. "Hello" -> ['H', 'e', 'l', 'l', 'o'];
            .reverse()
            .join("");
};

// Do not edit below this line
module.exports = reverseString;
