const sumAll = function(start, end) {
    let result = 0;

    if (start < 0 || end < 0) return "ERROR";
    if (!(Number.isInteger(start) && Number.isInteger(end))) return "ERROR";
    if (!(typeof start == 'number' && typeof end == 'number')) return "ERROR";
    
    if (start < end) {
        while (start <= end) {
            result += start;
            start++;
        }
    } else {
        while (end <= start) {
            result += end;
            end++;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
