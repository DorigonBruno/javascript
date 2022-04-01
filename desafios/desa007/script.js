var dolar = Number(prompt('Antes de mais nada.Quanto está a cotação do dolar?'))
function converter(){
    var res = document.getElementById('res')
    var real = Number(prompt('Quantos R$ você tem na carteira?'))
    var conv = Number(real / dolar).toFixed(2)
    res.innerHTML = `<p>Na cotação atual do dolar vai dar ${conv} US$</p>`
}