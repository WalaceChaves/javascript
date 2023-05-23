function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value < 1900 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/crianca_menino.jpg');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem_homem.jpg');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto_homem.jpg');
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/crianca_mulher.jpg');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem_mulher.jpg');
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src', 'imagens/mulher_adulta.jpg');
            } else {
                //Idosa
                img.setAttribute('src', 'imagens/idosa.jpg');
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Idade: ${idade} Sexo: ${genero}`
    img.style.borderRadius = '100%'
    img.style.width = '400px'
    img.style.height = '250px'
    res.appendChild(img) // adiciona um elemento ao HTML
}