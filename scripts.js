/* o html chama o html de documento quando vai chamar ele  */

    let chave = "8312a251f2eb52f0d78ecd18763077ca"

function colocarNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo local em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "ºC"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%"
}


async function buscarCidade(cidade){
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave +
        "&lang=pt_br" + "&units=metric"
    ).then(resposta => resposta.json())

    colocarNaTela(dados)
    
}

function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}

