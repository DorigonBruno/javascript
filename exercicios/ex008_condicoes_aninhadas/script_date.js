var agora = new Date()
var hora = agora.getHours()
//var hora = 8
console.log(`Agora são exatamente ${hora} horas`)
if(hora < 12){
    console.log(`Bom dia`)
}else if (hora <= 18 ){
    console.log(`Boa tarde`)
} else if (hora <= 22){
    console.log(`Boa noite`)
}