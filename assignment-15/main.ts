// store a value in a Array

let guests : string [] = ["affan","ablaj","zawyar"]

// return message for each person invitation 

guests.forEach((mess)=>{
    console.log(`Join us for a fun-filled day of celebration and good times at ${mess}`)
});

// guest are not attend to dinner
let unableToAttend = "affan"
    console.log(`\n${unableToAttend} cannot attend to dinner \n`);

// repalce the guest    
guests.splice(0,1,"usman")

// new invitation for guest
guests.forEach((mess)=>{
    console.log(`Join us for a fun-filled day of celebration and good times at ${mess}`);
});