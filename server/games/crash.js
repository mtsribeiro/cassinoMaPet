var contagem_passagem = 0
var partidas = 0
const setIntervalAsync = (fn, ms) => {
    fn().then((e) => {
      if(e == false){
        contagem_passagem = 0
        return false
        
      }else{
        
        if(contagem_passagem == 100){
          ms = 70
        }else if(contagem_passagem == 200){
          ms = 60
        }else if(contagem_passagem == 300){
          ms = 40
        }else if(contagem_passagem == 400){
          ms = 20
        }else if(contagem_passagem == 900){
          ms = 5
        }
        contagem_passagem++

        // console.log(ms, contagem_passagem)

  
        contagem_tempo = setTimeout(() => setIntervalAsync(fn, ms), ms);

      }
  
      
   
    });
  };
  
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
  
var rolando = false;
var velocidade = 100
const start_crash = async (io) => {

  if(rolando == true){
    return false;  
  }
  console.log('Partida:', partidas)

  rolando = true;
    var d = Math.random();

    if(d <= 0.1){
      
      if(partidas > 100){
        partidas = 0
        var time = getRandom(0, 1000)
        console.log('é o bonus!')
      }else{
        var time = getRandom(0, 200)
      }
      
    }else if (d <= 0.3){
       var time = getRandom(0, 500)
       console.log('0.4')
    }else if (d <= 0.6){
        var time = getRandom(50, 250)
        console.log('0.6')
    }else if (d <= 0.8){
        var time = getRandom(0, 100)
        console.log('0.8')
    }else if (d <= 0.9){
      var time = getRandom(0, 50)
      console.log('0.9')
  }else{
      var time = getRandom(0, 10)
    }
    
  var duration = time;

  var contagem = 1
  var minuto = 0
  var seconds = 0


var timer = duration, minuto, seconds;

console.log('Dificuldade:',timer)


setIntervalAsync(async () => {
      contagem = contagem+0.01
      contagem_geral = contagem.toFixed(2);

        var teste = {
          multiplicador:contagem_geral
        }

   
        

        io.emit('start_crash', teste)
      
        // console.log(timer)
        // if(parseInt(timer)){
        //   velocidade
        // }
        

        if (--timer <= 0) {
    
          contagem = 0
          
          io.emit('start_end')
          rolando = false;
          setTimeout(() => {
            
            start_crash(io)
          }, 10000);
          partidas++
          return false;
        }

      }, velocidade);

     

}


module.exports = {
    start_crash,
  };