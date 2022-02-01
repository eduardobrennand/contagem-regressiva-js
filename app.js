document.addEventListener('DOMContentLoaded', function() {
    var botao = document.querySelector('.desafio-button');

    botao.addEventListener('click', converteHoras);


    function convertDateToUTC(date) { 
        return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); 
        }

    function converteHoras(){
        var getHora = document.querySelector('.desafio-contador-horas');
        var getMinuto = document.querySelector('.desafio-contador-minutos');
        var getSegundo = document.querySelector('.desafio-contador-segundos');


        
        var dataAtualTime = new Date().getTime();
        var dataInput = convertDateToUTC(new Date(document.querySelector('.desafio-input-date').value));
        var dataInputTime = dataInput.getTime();
        var diferenca = (dataInputTime - dataAtualTime) / 1000;
    
       var horas = Math.floor(diferenca / 3600);
       var minutos = Math.floor((diferenca - horas * 3600) / 60);
       var segundos = Math.floor((diferenca - (minutos * 60) - (horas * 3600)));

        getHora.innerHTML = horas + ':';
        getMinuto.innerHTML = minutos + ':';
        getSegundo.innerHTML = segundos;

        timer = setInterval(converteHoras, 1000);
    }
})