const palindromes = function (str) {
    let array = str.toLowerCase().split("");
    const redundantChars = ["!", ".", ",", " "];
    let clearedArray = array.filter(char => {
        for (i = 0; i < redundantChars.length; i++) {
            if (redundantChars[i] === char) return false;  
        }
    return true;
    });
    let reversedArray = clearedArray.slice().reverse();
    return clearedArray.join('') == reversedArray.join('');
}

// Do not edit below this line
module.exports = palindromes;
