function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Bom dia!
        img.src = 'imagens/manha1.png'
        document.body.style.background = '#f0cc94'
    } else if(hora >= 12 && hora <= 18){
        //Boa tarde!
        img.src = 'imagens/tarde3.png'
        document.body.style.background = '#946152'
    } else{
        //Boa noite!
        img.src = 'imagens/noite1.png'
        document.body.style.background = '#0a191c'
    }
}
