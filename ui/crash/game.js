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
    }else{
    
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
        $('#btn__start').attr('disabled', true);
            var contagem = 1
        
        var timer = duration, minutes, seconds;
    var contagem_tempo = setInterval(function () {
                    
                    contagem = contagem+0.05
                    display.textContent = contagem.toFixed(2)+'x';
    
        
            seconds = parseInt(timer % 60, 10);
            /* display.textContent = seconds; */
            if (--timer < 0) {
                contagem=0
               /*  timer = duration; */
                clearInterval(contagem_tempo)
                $('#btn__start').attr('disabled', false);
                $('.multiplicador').css('background-color', '#f12c4c');
                $('.crash_display').css('display', 'block');
                
                setTimeout(() => {
                    $('.multiplicador').css('display', 'none');
                    $('.crash_display').css('display', 'none');
                }, 1000);
                return false
            }
            console.log(seconds)
            
            
        }, 100);
    }