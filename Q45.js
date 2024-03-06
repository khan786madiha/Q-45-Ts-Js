"use strict";
// 45.	Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacturer, model, ...additionalInfo) {
    const carInfo = {
        manufacturer: manufacturer,
        model: model
    };
    additionalInfo.forEach(info => {
        const [key, value] = Object.entries(info)[0];
        carInfo[key] = value;
    });
    return carInfo;
}
const carDetails = storeCarInfo("Toyota", "Camry", [`color`, `blue`], [`year`, `2022`]);
console.log(carDetails);
