// store a value in a Array
var guests = ["affan", "ablaj", "zawyar"];
// return message for each person invitation 
guests.forEach(function (mess) {
    console.log("Join us for a fun-filled day of celebration and good times at ".concat(mess));
});
// guest are not attend to dinner
var unableToAttend = "affan";
console.log("\n".concat(unableToAttend, " cannot attend to dinner \n"));
// repalce the guest    
guests.splice(0, 1, "usman");
// new invitation for guest
guests.forEach(function (mess) {
    console.log("Join us for a fun-filled day of celebration and good times at ".concat(mess));
});
