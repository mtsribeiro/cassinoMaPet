$(document).on('click', '#btn__start', function(e){

    var d = Math.random();
    if (d <= 0.5){
    /* 50% */
       var time = getRandom(0, 50)
       console.log('50%')
    }else if (d <= 0.8){
    /* 20% */
        var time = getRandom(0, 100)
       console.log('20%')
    }else if (d <= 0.1){
        var time = getRandom(0, 1000)
        console.log('deu liga')
    }else{
        var time = getRandom(0, 20)
    }
    
     var duration = time; // Converter para segundos
            display = document.querySelector('.multiplicador'); // selecionando o timer
        startTimer(duration, display); // iniciando o timer
    })
    
    
    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }
    
    
        
    
    
    function startTimer(duration, display) {
        $('.multiplicador').css('display', 'block');
        $('#btn__stop').css('display', 'block');
        $('#btn__start').attr('disabled', true);
        $('#btn__start').css('display', 'none');

            var contagem = 1
            var minuto = 0
        
        var timer = duration, minuto, seconds;
    var contagem_tempo = setInterval(function () {
                    
                    contagem = contagem+0.01
                    contagem_geral = contagem.toFixed(2);
                    display.textContent = contagem_geral+'x';

                    var valor_aposta = $('#valor_aposta').val() 
                  
                    $('#btn__stop').text('Retirar R$'+(valor_aposta*contagem_geral).toFixed(2))
                    
    
        
            seconds = parseInt(timer % 60, 10);
            /* display.textContent = seconds; */
            if (--timer < 0) {
                contagem=0
               /*  timer = duration; */
                clearInterval(contagem_tempo)
                $('#btn__start').attr('disabled', false);
                $('#btn__start').css('display', 'block');

                $('#btn__stop').css('display', 'none');
               
                $('.multiplicador').css('background-color', '#f12c4c');
                $('.crash_display').css('display', 'block');
                
                setTimeout(() => {
                    
                    $('.crash_display').css('display', 'none');
                    $('.multiplicador').css('display', 'none');
                    $('.multiplicador').css('background-color', '#1a252f');
                    
                }, 2000);
                return false
            }
            console.log(timer)
            
            
        }, 100);
    }