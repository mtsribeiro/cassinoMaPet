carregamentoStatico('../assets/html/barraTopo.html', '#MenuTop')
carregamentoStatico('../assets/html/barraLateral.html', '#MenuLateral')
carregamentoStatico('../assets/html/formularioLogin.html', '#MenuLogin')

if (localStorage.getItem('infologin')) {

  var infoUser = JSON.parse(localStorage.getItem('infologin'));
  $('#MenuLogin').css('display', 'none');

  setTimeout(() => {
    $('#monitoramentoLogin').append(`<div class="col-3">
    <div class="dropdown">
      <button class="dropdown-toggle btn" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="bi bi-person-fill text-white fs-3 mb-4"></i>
      </button>
      <ul class="dropdown-menu menuPerfil">
        <li><a class="dropdown-item itensMenuPerfil" href="#"><i class="bi bi-cart-plus-fill iconeMenuPerfil"></i> Depositar</a></li>
        <li><a class="dropdown-item itensMenuPerfil" href="#"><i class="bi bi-plus-square-fill iconeMenuPerfil"></i> Saque</a></li>
        <li><a class="dropdown-item itensMenuPerfil" href="#"><i class="bi bi-envelope-plus-fill iconeMenuPerfil"></i> Indique um amigo</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item itensMenuPerfil" style="color: #dc3545;" id="deslogarLogin" href="#">Deslogar</a></li>
      </ul>
    </div>
  </div>
    <div class="col-5 fs-3 mb-4">
      <button class="btn btn-dark btn-exibeMoney" disabled><i class="bi bi-gem" style="color: #b9f2ff; margin-right: 12px;"></i> ${infoUser[0].money}</button>
    </div>
    <div class="col-4 fs-3 mb-4">
      <button class="btn btn-danger">Depositar</button>
    </div>`)
  }, 50);

} else {

  setTimeout(() => {
    $('#monitoramentoLogin').append(`<div class="col-4">
      <button class="btn" id="OpenLogarUser" style="color: #fff; font-weight: bold">Login</button>
      </div>
      <div class="col-8">
      <button class="btn btn-danger">Registre-se</button>
      </div>`)
  }, 50);
}

// setTimeout(() => {
//   localStorage.removeItem('infologin');
  
// }, 5000);

function carregamentoStatico(arquivo, local){
      fetch(arquivo)
    .then(response => response.text())
    .then(text => {
      $(local).html(text)
  })
}