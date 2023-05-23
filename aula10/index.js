let data = new Date();
var dia = data.getDate().toString().padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();

var hora = data.getHours().toString().padStart(2, '0');
var minuto = data.getMinutes().toString().padStart(2, '0');
var segundos = String(data.getSeconds()).padStart(2, '0');


