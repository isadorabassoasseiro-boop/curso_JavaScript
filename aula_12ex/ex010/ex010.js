function carregar(){

    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');
   

    agora = new Date();
    var hora = agora.getHours();
    var minutos = agora.getMinutes();
    msg.innerHTML = `Agora são ${hora}:${minutos}`;

    if (hora >= 6 && hora < 12) {

        img.src = './imagens/manha.jpg';
        document.body.style.background = 'rgb(70, 142, 241)'

    } else if ( hora >= 12 && hora <= 18) {

        img.src = './imagens/tarde.jpg';
        document.body.style.background = 'rgb(185, 129, 64)'

    } else {

        img.src = './imagens/noite.jpg';
        document.body.style.background = 'rgb(74, 84, 177)'

    }

}

