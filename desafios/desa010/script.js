function calcular(){
    var a = Number(prompt('Qual é o valor de a?'))
    var b = Number(prompt('Qual é o valor de b?'))
    var c = Number(prompt('Qual é o valor de c?'))
    var delta = Number(b ** 2 - (4 * a * c))
    var res = document.getElementById('res')
    res.innerHTML = '<p><strong>Resolvendo Bhaskara</strong></p>'
    res.innerHTML += `<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `O valor calculado foi <mark><strong>&#916; = ${delta}</strong></mark>`
}