document.addEventListener('DOMContentLoaded', function() {
    var botao = document.querySelector('.desafio-button');

    botao.addEventListener('click', converteHoras);


    function converteHoras(){
        var getHora = document.querySelector('.desafio-contador-horas');
        var getMinuto = document.querySelector('.desafio-contador-minutos');
        var getSegundo = document.querySelector('.desafio-contador-segundos');


        var dataAtualTime = new Date().getTime();
        var dataInput = new Date(document.querySelector('.desafio-input-date').value);
        dataInput.setHours(0,0,0,0);
        var dataInputTime = dataInput.getTime();

        var diferenca = dataInputTime - dataAtualTime;
    
        var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        getHora.innerHTML = horas + ':';
        getMinuto.innerHTML = minutos + ':';
        getSegundo.innerHTML = segundos;

        timer = setInterval(converteHoras, 1000);
        
    }

    



    


})