const getTheTitles = function(arr) {
    return arr.reduce((accumulator, book) => {
    accumulator.push(book['title']);
    return accumulator;},
    []);
};

// Do not edit below this line
module.exports = getTheTitles;
