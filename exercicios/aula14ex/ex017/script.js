function tabuada(){
    var num = document.getElementById('txtn')
    var res = document.getElementById('res')
    if(num.value.length == 0){
        alert('[ERRO Digite algum numero]')
    }else{
        var n = Number(num.value)
        res.innerHTML = ''
        for(var c = 1;c <= 10;c++){
            var opt = document.createElement('option')
            opt.text = `${c} x ${n} = ${n * c}`
            res.appendChild(opt)
        }
    }
}