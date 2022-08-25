var socket = io();

var CrashAposta = false;

$(document).on('click', '#btn__start', function(e){

    if(CrashAposta == false){
        CrashAposta = true;
        $(this).text('Cancelar')
    }else{
        CrashAposta = false;
        $(this).text('Começar o jogo')
    }
  
})

    
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
            // console.log(timer)
            
            
        }, 100);
    }



    socket.on('start_crash', function(msg) {
        $('.crash_display').css('display', 'none');
        $('.multiplicador').css('display', 'none');
        $('.multiplicador').css('background-color', '#1a252f');
        
        $('#valor_aposta').attr('disabled', true);
        $('#btn__start').attr('disabled', true);
        $('.multiplicador').css('display', 'block');
        $('.multiplicador').text(msg.multiplicador+'X')
        if(CrashAposta == true){
            $('#btn__start').css('display', 'none');
            $('#btn__stop').css('display', 'block');
            var valor_aposta = $('#valor_aposta').val() 
           $('#btn__stop').text('Retirar R$'+(valor_aposta*msg.multiplicador).toFixed(2))
            
        }

       
        
        // console.log(msg)
    })

    socket.on('start_end', function(msg) {
        CrashAposta = false;
        $('#valor_aposta').attr('disabled', false);
        $('.multiplicador').css('display', 'block');
        $('#btn__start').attr('disabled', false);
        $('#btn__start').css('display', 'block');
        $('#btn__start').text('Começar o jogo')
        $('#btn__stop').css('display', 'none');
        $('.multiplicador').css('background-color', '#f12c4c');
        $('.crash_display').css('display', 'block');

    })

