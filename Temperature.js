document.getElementById("convertButton").addEventListener("click", function () {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const inputUnit = document.getElementById("unitSelect").value;
    let results = [];

    if (inputUnit === "celsius") {
        const fahrenheit = (temperatureInput * 9/5) + 32;
        const kelvin = temperatureInput + 273.15;
        results.push(`You provided ${temperatureInput} Celsius.`);
        results.push(`Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}`);
        results.push(`Temperature in Kelvin: ${kelvin.toFixed(2)}`);
    } else if (inputUnit === "fahrenheit") {
        const celsius = (temperatureInput - 32) * 5/9;
        const kelvin = (temperatureInput - 32) * 5/9 + 273.15;
        results.push(`You provided ${temperatureInput} Fahrenheit.`);
        results.push(`Temperature in Celsius: ${celsius.toFixed(2)}`);
        results.push(`Temperature in Kelvin: ${kelvin.toFixed(2)}`);
    } else if (inputUnit === "kelvin") {
        const celsius = temperatureInput - 273.15;
        const fahrenheit = (temperatureInput - 273.15) * 9/5 + 32;
        results.push(`You provided ${temperatureInput} Kelvin.`);
        results.push(`Temperature in Celsius: ${celsius.toFixed(2)}`);
        results.push(`Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}`);
    }

    document.getElementById("result").innerHTML = results.join('<br>');
});
