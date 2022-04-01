function converter(){
    var m = Number(prompt('Digite uma distância em metros(m)'))
    var res = document.getElementById('res')

    var dam = Number(m / 10).toFixed(3)

    var hm = Number(dam / 10).toFixed(3)
    
    var km = Number(hm / 10).toFixed(3)
    
    var dm = Number(m * 10).toLocaleString('pt-br');
    
    var cm = Number( (m * 10)* 10).toLocaleString('pt-br')
    
    var mm = Number(cm * 10).toFixed(3).toLocaleString('pt-br')

    res.innerHTML = `<p><strong>A distância de ${m} metros,corresponde a...</strong></p>`
    res.innerHTML += `<p><strong>${km} quilômetros (Km)</strong><p>`
    res.innerHTML += `<p><strong>${hm} hectômetros (Hm)</strong></p>`
    res.innerHTML += `<p><strong>${dam} decâmetros (Dam)</strong></p>`
    res.innerHTML += `<p><strong>${dm} decimetros</strong> (dm)</p>`
    res.innerHTML += `<p><strong>${cm} decimetros</strong> (cm)</p>`
    res.innerHTML += `<p><strong>${mm} decimetros</strong> (mm)</p>`
}
