const findTheOldest = function(arr) {
    let listOfPeople  = [];
    let listOfAges = [];
    arr.forEach((element, index) => {
        if (element.yearOfDeath == undefined) element.yearOfDeath = new Date().getFullYear();
        listOfPeople.push(element.name)
        listOfAges.push(element.yearOfDeath - element.yearOfBirth);
    });
    let biggestAge = 0;
    for (i = 0; i < listOfAges.length; i++) {
        if (listOfAges[i] > biggestAge) biggestAge = listOfAges[i];
    }
    // return listOfPeople[listOfAges.findIndex(element => element == biggestAge)]
    return arr[listOfAges.findIndex(element => element == biggestAge)]
};

// Do not edit below this line
module.exports = findTheOldest;
