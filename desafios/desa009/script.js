function converter(){
    var res = document.getElementById('res')
    var nome = prompt('Qual é o nome do funcionário?')
    var sal = Number(prompt(`Qual é o salario de ${nome}`))
    var porc = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    var acer = Number((sal * porc) / 100)
    var nsal = Number(sal + acer).toFixed(2)
    res.innerHTML = `<p>${nome} Recebeu um aumento salarial</p>`
    res.innerHTML += `<p>O salário atual era R$ ${sal}.</p>`
    res.innerHTML += `<p>Com um aumento de  ${porc}%, o salário vai aumentar R$ ${acer} no próximo mês</p>`
    res.innerHTML += `<p>E a partir daí,${nome} vai passar a ganhar R$ ${nsal}.</p>`
}