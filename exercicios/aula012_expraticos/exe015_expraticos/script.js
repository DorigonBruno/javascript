function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var year = document.getElementById('txtn')
    var res = document.getElementById('res')
    if(year.value.length == 0 || year.value > ano){
        alert('[ERRO] dados incorretos')
    } else{
       var fsex = document.getElementsByName('boxr')
       var idade = Number(ano - year.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if(idade >= 0 && idade < 10){
           img.setAttribute('src', 'bebe-h.png')
           //criança
       } else if(idade < 26){
            img.setAttribute('src', 'jovem-h.png')
            //jovem
       } else if(idade < 50){
            img.setAttribute('src', 'adulto-h.png')
           //adulto
       }else{
            img.setAttribute('src', 'idoso-h.png')
           //idoso
       }
       if(fsex[0].checked){
           genero = 'Homem'
    }else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            img.setAttribute('src', 'bebe-m.png')
        //criança
        } else if(idade < 26){
            img.setAttribute('src', 'jovem-m.png')
        //jovem
        } else if(idade < 50){
            img.setAttribute('src', 'adulto-m.png')
        //adulto
        }else{
            img.setAttribute('src', 'idoso-m.png')
        //idoso
        }
    }
       res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
       res.appendChild(img)
       res.style.textAlign = 'center'
    }
}