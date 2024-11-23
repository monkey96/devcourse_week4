function first() {
    console.log("1st");
}

function second() {
    console.log("2nd");
}

function third() {
    console.log("3rd");
}

first();
setTimeout(second, 2000);
// second();
third();