// put the value in a Array
var friends = ["Ablaj", "Muneeb", "Zawyar", "Usman"];
// return value one at a time
var res = friends.forEach(function (elem) {
    console.log("Hello ".concat(elem, ", How are you ")); // print one message for each person
});
