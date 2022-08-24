carregamentoStatico('./assets/html/barraTopo.html', '#MenuTop')
carregamentoStatico('./assets/html/barraLateral.html', '#MenuLateral')
carregamentoStatico('./assets/html/formularioLogin.html', '#MenuLogin')

if (localStorage.getItem('infologin')) {
  var infoUser = JSON.parse(localStorage.getItem('infologin'));
  console.log(infoUser);
} else {
  console.log('nunhum usuario logado');
}

setTimeout(() => {
  localStorage.removeItem('infologin');
  console.log('deslogou');
}, 5000);

function carregamentoStatico(arquivo, local){
      fetch(arquivo)
    .then(response => response.text())
    .then(text => {
      $(local).html(text)
  })
}