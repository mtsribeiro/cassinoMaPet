var socket = io();

var CrashAposta = false;
var logado = false;
if (localStorage.getItem('infologin')) {
    logado = true;
}else{
    $('#valor_aposta').attr('disabled', true);
    $('#btn__start').attr('disabled', true);
    $('#valor_aposta').attr('disabled', true);
}

$(document).on('click', '#btn__start', function(e){

    if(logado == true){
        if(CrashAposta == false){
            CrashAposta = true;
            $('#valor_aposta').attr('disabled', true);
            $(this).text('Cancelar')
        }else{
            CrashAposta = false;
            $('#valor_aposta').attr('disabled', false);
            $(this).text('Começar o jogo')
        }
    }else{
        $('#valor_aposta').attr('disabled', true);
        $('#btn__start').attr('disabled', true);
        
        
    }
    
  
})

    
    socket.on('crash_carregamento', function(msg) {
        // console.log(msg)



        if(msg < 100){
            $('.crash_display').css('display', 'none');
            $('.multiplicador').css('display', 'none');
            $('.loading_game').css('display', 'block')

            // new_msg = msg+20;
            console.log(msg)
            $('#barra_carregamento').css('width', `calc(${msg}% - 66px)`)
        }else{
            
        }
        
        
    })

    socket.on('start_crash', function(msg) {
        $('.loading_game').css('display', 'none')
        $('.crash_display').css('display', 'none');
        $('.multiplicador').css('display', 'none');
        $('.multiplicador').css('background-color', '#1a252f');
        
        if(logado == true){
            $('#valor_aposta').attr('disabled', true);
            $('#btn__start').attr('disabled', true);
        }
        
        $('.multiplicador').css('display', 'block');
        $('.multiplicador').text(msg.multiplicador+'X')
        if(CrashAposta == true){
            
            if(logado == true){
                $('#btn__start').css('display', 'none');
                $('#btn__stop').css('display', 'block');
                var valor_aposta = $('#valor_aposta').val() 
                $('#btn__stop').text('Retirar R$'+(valor_aposta*msg.multiplicador).toFixed(2))
            }
        
           
            
        }

        
        
        // console.log(msg)
    })

    socket.on('start_end', function(msg) {
        
        CrashAposta = false;
        $('#valor_aposta').attr('disabled', false);
        $('.multiplicador').css('display', 'block');

        if(logado == true){
            $('#btn__start').attr('disabled', false);
            $('#btn__start').css('display', 'block');
            $('#btn__start').text('Começar o jogo')
            $('#btn__stop').css('display', 'none');
        }
        

        $('.multiplicador').css('background-color', '#f12c4c');
        $('.crash_display').css('display', 'block');
        
    })

