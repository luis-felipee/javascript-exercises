const reverseString = function(input) {
    let splitInput = input.split("");
    let reverseInput = splitInput.reverse();
    
    let joinReverseInput = reverseInput.join("");

    return joinReverseInput;

};

// Do not edit below this line
module.exports = reverseString;
