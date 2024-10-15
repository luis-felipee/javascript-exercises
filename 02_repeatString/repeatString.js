const repeatString = function(string, number) {
    if(number < 0){
        return 'ERROR';
    }
    let results = '';
    for (let i = 0; i < number; i++) {
        
        results += string;
    }
    return results;
};

// Do not edit below this line
module.exports = repeatString;
