var agora = new Date()
var diasem = agora.getDay()
/*
 0 = DOMNGO
 1 = SEGUNDA
 2 = TERÇA
 3 = QUARTA
 4 = QUINTA
 5 = SEXTA
 6 = SABADO
 */

 //console.log(diasem)
 
 switch(diasem){
     case 0:
         console.log(`Domingo`)
         break
    case 1:
        console.log(`Segunda-feira`)
        break
    case 2:
        console.log(`Terça-feira`)
        break
    case 3:
        console.log(`Quarta-feira`)
        break
    case 4:
        console.log(`Quinta-feira`)
        break
    case 5:
        console.log(`Sexta-feira`)
        break
    case 6:
        console.log(`Sábado`)
        break
    default:
        console.log(`[Erro] dia inválido`)
        break
 }
