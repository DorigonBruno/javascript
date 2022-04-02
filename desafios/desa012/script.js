function verificar(){
    var res = document.getElementById('res')
    var produto = Number(prompt('Qual era o preço anterior do produto?')).toFixed(2)
    var preco = Number(prompt('Qual é o preço atual do produto?')).toFixed(2)
    var s = Number(preco - produto).toFixed(2)
    var porc = Number((s / produto) * 100).toFixed(1)
    var s2 = Number(produto - preco).toFixed(2)
    var porc2 = Number((s2 / produto) * 100).toFixed(2)
    if (produto < preco){
        res.innerHTML = `<p>O produto custava R$ ${produto} e agora custa R$ ${preco}</p>`
        res.innerHTML += '<p>Hoje o produto está mais caro</p>'
        res.innerHTML += `<p>O preço subiu R$ ${s} em relação ao preço anterior</p>`
        res.innerHTML += `Uma variação de ${porc}% para cima`
    }else{
        res.innerHTML = `<p>O produto custava R$ ${produto} e agora custa R$ ${preco}</p>`
        res.innerHTML += '<p>Hoje o produto está mais barato</p>'
        res.innerHTML += `<p>O preço caiu R$ ${s2} em realção ao anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${porc2}% para baixo.</p>`
    }
}