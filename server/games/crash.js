const setIntervalAsync = (fn, ms) => {
    fn().then((e) => {
      if(e == false){
        return false
      }else{
        contagem_tempo = setTimeout(() => setIntervalAsync(fn, ms), ms);
      }
  
      
   
    });
  };
  
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
  
var rolando = false;
const start_crash = async (io) => {
  if(rolando == true){
    return false;  
  }

  rolando = true;
    var d = Math.random();
    if (d <= 0.5){
       var time = getRandom(0, 100)
       console.log('50%')
    }else if (d <= 0.8){
        var time = getRandom(51, 500)
       console.log('20%')
    }else if (d <= 0.1){
        var time = getRandom(100, 5000)
        console.log('deu liga')
    }else{
      var time = getRandom(0, 50)
    }
    
  var duration = time;

  var contagem = 1
  var minuto = 0
  var seconds = 0


var timer = duration, minuto, seconds;

setIntervalAsync(async () => {
      contagem = contagem+0.01
      contagem_geral = contagem.toFixed(2);

        var teste = {
          multiplicador:contagem_geral
        }


        io.emit('start_crash', teste)
      
        // console.log(timer)


        if (--timer <= 0) {
    
          contagem = 0
          
          io.emit('start_end')
          rolando = false;
          setTimeout(() => {
            
            start_crash(io)
          }, 10000);

          return false;
        }

      }, 100);

     

}


module.exports = {
    start_crash,
  };