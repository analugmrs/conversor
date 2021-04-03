function conversaoUSD_BRL() {
    fetch('https://economia.awesomeapi.com.br/all/USD-BRL')
    .then(function(response){
        return response.json();
    })
    .then(function(dolar){
        USD = dolar.USD.high
        var valor = document.getElementById('valor').value;
        var converte = (USD * valor).toFixed(2);
        document.getElementById("resultado").innerHTML = "R$"+converte;
    })
}
function conversaoBRL_USD() {
    fetch('https://economia.awesomeapi.com.br/all/BRL-USD')
    .then(function(response){
        return response.json();
    })
    .then(function(real_dolar){
        BRL = real_dolar.BRL.high
        var valor = document.getElementById('valor').value;
        var converte = (valor * BRL).toFixed(2);
        document.getElementById("resultado").innerHTML = "$"+converte;
    })
}
function conversaoEUR_BRL() {
    fetch('https://economia.awesomeapi.com.br/all/EUR-BRL')
    .then(function(response){
        return response.json();
    })
    .then(function(euro){
        EUR = euro.EUR.high
        var valor = document.getElementById('valor').value;
        var converte = (EUR * valor).toFixed(2);
        document.getElementById("resultado").innerHTML = "R$"+converte;
    })
}
function conversaoBRL_EUR() {
    fetch('https://economia.awesomeapi.com.br/all/BRL-EUR')
    .then(function(response){
        return response.json();
    })
    .then(function(real_euro){
        BRL = real_euro.BRL.high
        var valor = document.getElementById('valor').value;
        var converte = (valor * BRL).toFixed(2);
        document.getElementById("resultado").innerHTML = "€"+converte;
    })
}
function conversaoBTC_BRL() {
    fetch('https://economia.awesomeapi.com.br/all/BTC-BRL')
    .then(function(response){
        return response.json();
    })
    .then(function(bitcoin){
        BTC = bitcoin.BTC.high
        var valor = document.getElementById('valor').value;
        var converte = (BTC * valor).toFixed(2);
        document.getElementById("resultado").innerHTML = "R$"+converte;
    })
}