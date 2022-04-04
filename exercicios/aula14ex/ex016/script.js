function contar(){
    var res = document.getElementById('res')
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        alert('[ERRO DE DADOS]')
    }else{ 
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if(p <= 0){
            alert('Passo inválido.. Considerando passo 1')
            p = 1
        }
        if(i < f){
            for(var c = i; c <= f; c += p)
            res.innerHTML += `${c} \u{1F449}`
        }else{
            for(var c = i; c >= f; c -= p)
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `Fim \u{26D4}`
    }
}

//res.innerHTML += `${c} \u{1F449}`

//res.innerHTML += `Fim \u{26D4}`