function contar() {
    let ini = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam Dados!')
        res.innerHTML += `Impossível Contar!`
    } else {

        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p <= 0) {
            window.alert('Passo Inválido Considerando PASSO 1')
            p = 1;
        }

        res.innerHTML += '<br> Contando... <br>'
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c}`
            }
        }
    }
}