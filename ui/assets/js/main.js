carregamentoStatico('./assets/html/barraTopo.html', '#MenuTop')
carregamentoStatico('./assets/html/barraLateral.html', '#MenuLateral')

function carregamentoStatico(arquivo, local){
    fetch(arquivo)
  .then(response => response.text())
  .then(text => {
    $(local).html(text)
  })
}