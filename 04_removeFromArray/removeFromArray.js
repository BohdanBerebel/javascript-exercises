const removeFromArray = function(arrayToFilter, ...whatDelete) {
    let whatMustBeDeletedArray = Array.from(whatDelete);
    let result = [];
    mainArray: for ( i = 0; i < arrayToFilter.length; i++ ) {
        for ( j = 0; j < whatMustBeDeletedArray.length; j++ ) {
            if (arrayToFilter[i] === whatMustBeDeletedArray[j]) continue mainArray;
        }
        result.push(arrayToFilter[i]);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
