function verificar(){
    // window.alert('Teste')
    var inf_ano = window.document.getElementById('ano')
    var img = window.document.getElementById('foto')
    var info = window.document.getElementById('informacao')

    var agora = new Date()
    var ano_agora = agora.getFullYear()

    if (inf_ano.value.length == 0 || inf_ano.value > ano_agora) {
        window.alert('error')

    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano_agora - Number(inf_ano.value)
        var genero = ''

        if (fsex[0].checked){

            genero = 'Homem'

            if (idade < 2) {

                img.src = './imagens/bebe.jpg'
                info.innerHTML = `Você é ${genero} e tem ${idade} anos `

            } else if (idade >= 2 && idade < 12) {

                img.src = './imagens/criaM.jpg'
                info.innerHTML = `Você é ${genero} e tem ${idade} anos `

            } else if (idade >= 12 && idade < 18 ) {

                img.src = './imagens/adoM.jpg'
                info.innerHTML = `Você é ${genero} e tem ${idade} anos `
            
            } else if (idade >= 18  && idade < 60) {

                img.src = './imagens/aduM.jpg'
                info.innerHTML = `Você é ${genero} e tem ${idade} anos `
                
            } else {
                img.src = './imagens/idoM.jpg'
                info.innerHTML = `Você é ${genero} e tem ${idade} anos `
            }
        } else {
            genero = 'Mulher'

            if (idade < 2) {

                img.src = './imagens/bebe.jpg'
                info.innerHTML = `Você é ${genero} e tem ${idade} anos `

            } else if (idade >= 2 && idade < 12) {

                img.src = './imagens/criaF.jpg'
                info.innerHTML = `Você é ${genero} e tem ${idade} anos `

            } else if (idade >= 12 && idade < 18 ) {

                img.src = './imagens/adoF.jpg'
                info.innerHTML = `Você é ${genero} e tem ${idade} anos `
            
            } else if (idade >= 18  && idade < 60) {

                img.src = './imagens/aduF.jpg'
                info.innerHTML = `Você é ${genero} e tem ${idade} anos `
                
            } else {
                img.src = './imagens/idoF.jpg'
                info.innerHTML = `Você é ${genero} e tem ${idade} anos `
            }
        } 
        

    }
}