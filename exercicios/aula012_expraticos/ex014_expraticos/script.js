function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 20 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        msg.innerHTML += "<p><strong>Bom dia</strong></p>"
        img.src = 'foto-manha.png'
        document.body.style.background = '#e5bb88'
    } else if(hora < 18){
        msg.innerHTML += '<p><strong>Boa tarde</strong></p>'
        img.src = 'foto-tarde.png'
        document.body.style.background = '#ee8c36'
    }else{
        msg.innerHTML += '<p><strong>Boa noite</strong></p>'
        img.src = 'foto-noite.png'
        document.body.style.background = '#1e181c'
    }
}