carregamentoStatico('/crash/teste.html', '#MenuTop')
carregamentoStatico('/crash/teste.html', '#MenuLateral')

function carregamentoStatico(arquivo, local){
    fetch(arquivo)
  .then(response => response.text())
  .then(text => {
    $(local).html(text)
  })
}