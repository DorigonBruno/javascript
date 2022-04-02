function verificar(){
   var ano = Number(prompt('Digite o ano que deseja verificar'))
   var res = document.getElementById('res')
   if(ano % 4 == 0 || ano % 400 == 0){
       res.innerHTML = `<p>Analisando o ano de ${ano}...</p>`
       res.innerHTML += `<p>O ano ${ano} <mark style><strong>É BISSEXTO &#10003;</strong></mark></p>`
   }else{
       res.innerHTML = `<p>Analisando o ano de ${ano}..</p>`
       res.innerHTML += `<p>O ano ${ano} <mark><strong>NÃO É BISSEXTO &#215;</strong></mark></p>`
   }
}