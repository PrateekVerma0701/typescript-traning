let sportOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let i = 0; i < sportOne.length; i++) {
    console.log(sportOne[i]);
}

// Let's use the simplified for loop

for (let tempSport of sportOne) {
    console.log("Sport " + tempSport);
}