function desc(){
    var res = document.getElementById('res')
    var produ = prompt('Qual o produto que está comprando ?')
    var preco = Number(prompt(`Qual é o preço de ${produ} ?`))
    var desc = Number((preco * 10) / 100 ) .toFixed(2)
    var nvalor = Number (preco - desc).toFixed(2)
    res.innerHTML = `<p>Calculando desconto de 10% para ${produ}</p>`
    res.innerHTML += `<p>O preço original era ${preco}</p>`
    res.innerHTML += `<p>Você acaba de ganhar R$ ${desc} de desconto (-10%)</p>`
    res.innerHTML += `<p>No fim,voce vai pagar R$ ${nvalor} no produto ${produ}</p>`
}