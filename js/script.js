function media () {
    let nom = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`qual foi a primeira nota de ${nom}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi sua outra nota de ${nom}?`))
    let n3 = Number(window.prompt(`Além de ${n2}, qual foi sua outra nota de ${nom}?`))
    let n4 = Number(window.prompt(`Além de ${n3}, qual foi sua outra nota de ${nom}?`))
    
    med = (n1 + n2 + n3 + n4 )/4

    let msg
    if(med >=6) {
        msg = 'Meus parabéns!'
    } else {
        msg = 'Estude mais um pouco!'
    }
    let res = document.getElementById('situacao')
    res.innerHTML =`<p>Calculando a média final de <mark>${nom}</mark>.</p>`
    res.innerHTML += `<p>As notas obtida foram <mark>${n1}, ${n2}, ${n3}, ${n4} </mark>.</p>`
    res.innerHTML +=`<p>A média final será <mark>${med}</mark/>.<p/>`
    res.innerHTML +=`<p>A mensagem que temos é: <strong style='color; red;'>${msg}</strong></p>`
    

}