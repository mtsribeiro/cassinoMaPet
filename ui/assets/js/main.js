carregamentoStatico('../assets/html/barraTopo.html', '#MenuTop')
carregamentoStatico('../assets/html/barraLateral.html', '#MenuLateral')
carregamentoStatico('../assets/html/formularioLogin.html', '#MenuLogin')

if (localStorage.getItem('infologin')) {

  var infoUser = JSON.parse(localStorage.getItem('infologin'));
  console.log(infoUser);
  $('#MenuLogin').css('display', 'none');
  
  setTimeout(() => {
    console.log('logado');
    $('#monitoramentoLogin').append(`<div class="col-4">
      <button class="btn" id="OpenLogarUser" style="color: #fff; font-weight: bold">logado</button>
      </div>
      <div class="col-8">
      <button class="btn btn-danger">Registre-se</button>
      </div>`)
  }, 50);

} else {

  setTimeout(() => {
    console.log('deslogado');
    $('#monitoramentoLogin').append(`<div class="col-4">
      <button class="btn" id="OpenLogarUser" style="color: #fff; font-weight: bold">Login</button>
      </div>
      <div class="col-8">
      <button class="btn btn-danger">Registre-se</button>
      </div>`)
  }, 50);
}

setTimeout(() => {
  localStorage.removeItem('infologin');
  
}, 5000);

function carregamentoStatico(arquivo, local){
      fetch(arquivo)
    .then(response => response.text())
    .then(text => {
      $(local).html(text)
  })
}