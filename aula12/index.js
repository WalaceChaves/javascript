var dataAtual = new Date();

var dia = dataAtual.getDate().toString().padStart(2, '0');
var mes = String(dataAtual.getMonth() + 1).padStart(2, '0')
var ano = dataAtual.getFullYear();
var horas = dataAtual.getHours().toString().padStart(2, '0');
var minutos = String(dataAtual.getMinutes()).padStart(2, '0');
var segundos = String(dataAtual.getSeconds()).padStart(2, '0')

console.log(`Data de Hoje ${dia}/${mes}/${ano}. Agora são ${horas}:${minutos}:${segundos}Hrs`)

/*
const hoje = new Date()
hoje.getDate() // O dia do mês
hoje.getDay() // O valor inteiro do dia da semana
hoje.getFullYear() // O ano com quatro dígitos
hoje.getHours() // A hora do dia
hoje.getMilliseconds() // O número de milissegundos desde o ultimo segundo
hoje.getMinutes() // O número de minutos desde a última hora
hoje.getMonth() // o mês do ano
hoje.getTime() // O número de milissegundos desde a meia noite de 1° de janeiro de 1970
hoje.TolocaleString() // A data e hora local em formato de string
 */
