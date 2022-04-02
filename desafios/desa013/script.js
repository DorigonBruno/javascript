function clicar(){
    var nome = prompt('Qual é o nome do aluno?')
    var n1 = Number(prompt(`A primeira nota de ${nome}:`))
    var n2 = Number(prompt(`A segunda nota de ${nome}:`))
    var m = Number((n1 + n2) / 2)
    var res = document.getElementById('res')
    if(m <= 3){
        res.innerHTML = '<p>Aluno: <strong>Reprovado</strong></p>'
    }else if(m <= 6){
        res.innerHTML = '<p>Aluno em: <strong>Recuperação</strong></p>'
    }else{
        res.innerHTML = '<p>Aluno: <strong>Aprovado</strong></p>'
    }
}