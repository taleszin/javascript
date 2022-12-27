function carregar(){
var msg = window.document.querySelector("#msg")
var img = window.document.querySelector("#imagem")
var data = new Date()
var hora = data.getHours ()
var minuto = data.getMinutes ()
var segundo = data.getSeconds()
//var hora = 21

msg.innerHTML = `Agora são ${hora} horas ${minuto} minutos e ${segundo} segundos`
setTimeout('carregar(), 500') // para recarregar a cada 500 ms, tornando assim o tempo da página em tempo real.
if (hora >= 0 && hora <= 12){
    //BOM DIA
document.body.style.background = '#e2cd9f'
img.src = 'imagens/manha.png'
}
else if (hora >12 && hora <18){
    //boa tarde
   document.body.style.background = '#b9846f'
   img.src = 'imagens/tarde.png'
}
else {
    // boa noite
    document.body.style.background = '#515154'
 img.src = 'imagens/noite.png'
}
}