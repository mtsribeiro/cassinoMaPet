carregamentoStatico('/home/barraTopo.html', '#MenuTop')
carregamentoStatico('/home/barraLateral.html', '#MenuLateral')

function carregamentoStatico(arquivo, local){
    fetch(arquivo)
  .then(response => response.text())
  .then(text => {
    $(local).html(text)
  })
}