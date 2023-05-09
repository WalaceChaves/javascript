let data_atual = new Date();

let dia = data_atual.getDay();
let mes = data_atual.getMonth();
let ano = data_atual.getFullYear();

console.log(`Hojé é dia ${String.format("%0n2", dia)}/${mes}/${ano}`)