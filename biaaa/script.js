function verificar() {
    let inp = document.getElementById('txtbia')
    let res = document.getElementById('res')
    let img = document.createElement('img')
    img.setAttribute('src', 'foto')
    res.innerHTML = ''
    if(inp.value.length == 0) {
        alert('[ERRO] Preencha os dados da bianca!')
    } else {
        if(inp.value == 'Bianca') {
            img.setAttribute('src', 'aja.jfif')
            res.innerHTML += '<h2> Toda mandraka, esquece!!! 🤡'
        } else if(inp.value == 'BIANCA') {
            img.setAttribute('src', 'prima.jfif')
            res.innerHTML += '<h2> PERFEITA NÉ? 🥵'
        }
        if(inp.value == 'Renan') {
            img.setAttribute('src', 'titi.jfif')
            res.innerHTML += '<h2> Prazer, neguin rico 🤑🤑🤑'
        }
    }
    res.appendChild(img)
}