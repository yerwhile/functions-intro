// const fillGasTank = (gallons) => {
//     console.log(`I filled the tank with ${gallons} gallons of gas`)
// }

// fillGasTank(10);

const fillGasTank = (gallons) => {
    if(gallons > 15) {
        console.log("You cannot add this much gas to the tank");
    } else{
    console.log(`I filled the tank with ${gallons} gallons of gas`);
    }
}

fillGasTank(16);