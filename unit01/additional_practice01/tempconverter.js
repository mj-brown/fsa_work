//current outside temperature is 75 F.  I want a variable to show this.
let tempFahrenheit = 85;

//I want to convert tempFahrenheit to Celcius.
const tempCelcius = tempFahrenheit - 32 * 5 / 9;
console.log(tempCelcius);

//I want to convert tempCelcius to Kelvin.
const tempKelvin = tempCelcius + 273.15;
console.log(tempKelvin);

//I want to show today's forecast using all three temperature values printed in a string.
let todaysForecast = `The current temperature outside is ${tempFahrenheit} degrees Fahrenheit, ${Math.floor(tempCelcius)} degrees Celcius, and ${Math.floor(tempKelvin)} degrees Kelvin.`;
console.log(todaysForecast);

//I want to make reusable code by creating a function to do the same things.
const currentTemp = function (tempFahrenheit) {
    return `The current temperature outside is ${tempFahrenheit} degrees Fahrenheit, ${Math.floor(tempCelcius)} degrees Celcius, and ${Math.floor(tempKelvin)} degrees Kelvin.`
};

console.log(currentTemp(80));
