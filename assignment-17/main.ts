// store a value in a Array

let guests : string [] = ["affan","ablaj","zawyar"]

// return message for each person invitation 

guests.forEach((mess)=>{
    console.log(`Join us for a fun-filled day of celebration and good times at ${mess}`)
})
// guest are not attend to dinner
let unableToAttend = "affan"
    console.log(`\n ${unableToAttend} cannot attend to dinner \n`);

// repalce the guest    
guests.splice(0,1,"usman");

// new invitation for guest
guests.forEach((mess)=>{
    console.log(`Join us for a fun-filled day of celebration and good times at ${mess}`);
});

// message
console.log("\n finally! arrange bigger dinner table for more guests \n");

// add in beginning of array
guests.unshift("muneeb");

// add in middle of array
guests.splice(2,0,"ali");

// add in last of array
guests.push("waqas");

// new invitation for guests
guests.forEach((mess)=>{
    console.log(`Join us for a fun-filled day of celebration and good times at ${mess}`)
});

// message
console.log("\n bigger dinner table cant arrange, I have space for only two guests \n");

// shrinking guests list 
let shrinkingGuestsList = guests.splice(0,4);
    shrinkingGuestsList.forEach((mess)=>{
        console.log(`sorry ${mess} i cant invited you to dinner because dinner table cant arrange`)
    });

// whitespace
console.log('\n invited guests list \n');    

// message for guests they are still invited
guests.forEach((mess)=>{
    console.log(`${mess} you are still invited to dinner`)
});