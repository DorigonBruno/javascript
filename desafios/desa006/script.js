function converter(){
    var res = document.getElementById('res')
    var c = Number(prompt('Digite a temperatura em °C (Celsius)'))
    var f = Number(c * 9/5) + 32
    var k = Number(c + 273.15).toFixed(2)
    res.innerHTML = `A temperatura de ${c}°C, corresponde a..`
    res.innerHTML += `<p>${k}°K (Kelvin)</p>`
    res.innerHTML += `<p>${f}°F (Fahrenheit)</p>`
    
}