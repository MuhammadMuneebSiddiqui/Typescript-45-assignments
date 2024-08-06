// store a value in variable
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Dubai", "Malyshia", "Austraila", "China", "Korea"];
// Original Array
console.log("Original Array: ", places);
// Alphabetical Order
console.log("Alphabetical Order: ", __spreadArray([], places, true).sort());
// Original Array
console.log("Original Array: ", places);
// Reverse Alphabetical Order
console.log("Reverse Alphabetical Order: ", __spreadArray([], places, true).sort().reverse());
// Original Array 
console.log("Original Array: ", places);
// Reverse Array
places.reverse();
console.log("Reverse Array: ", places);
// Again Reverse Array
places.reverse();
console.log("Original Array: ", places);
// Alphabetical Array 
places.sort();
console.log("Alphabetical Array: ", places);
// Reverse Alphabetical Order
places.sort().reverse();
console.log("Reverse Alphabetical Order: ", places);
