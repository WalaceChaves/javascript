var data_atual = new Date();

var dia = data_atual.getDate();
var mes = data_atual.getMonth() + 1;
var ano = data_atual.getFullYear();
var hora = data_atual.getHours();
var minutos = data_atual.getMinutes();
var segundos = data_atual.getSeconds();

if (hora < 5) {
    console.log(`São ${hora}Hrs, ${minutos}Min e ${segundos}Segs. Then Is Dawn. Good Dawn, Go Home!`)
} else if (hora < 12) {
    console.log(`São ${hora}Hrs, ${minutos}Min e ${segundos}Segs. Then Is Morning. Good Morning`)
} else if (hora < 18) {
    console.log(`São ${hora}Hrs, ${minutos}Min e ${segundos}Segs. Then Is Afternoon. Good Afternoon`)
} else {
    console.log(`São ${hora}Hrs, ${minutos}Min e ${segundos}Segs. Then Is Nigth. Good Nigth if you are going to sleep`)
}
