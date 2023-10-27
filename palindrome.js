// JS in orderto to check string palidrome.....
let checkPalidrome = (stringg) => {
    return stringg === stringg.split("").reverse ().join("");
};
console.log ("Is Palidrome? :"+ checkPalidrome("tundeednut"));
console.log("Is Palidrome? :"+ checkPalidrome ("orange"));