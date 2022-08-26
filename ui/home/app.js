$(document).on('click', '#OpenLogarUser', function(e){
    e.preventDefault()
    $('#MenuLogin').css('display', 'flex');
    $('#MenuLogin').css('opacity', '1')
  })

  $(document).on('click', '#cancelaLogin', function(e){
    e.preventDefault()
    $('#MenuLogin').css('opacity', '0')
    $('#MenuLogin').css('display', 'none');
  })

$(document).on('click', '#checaLogin', function(e){
  e.preventDefault()

  const emailLogin = document.getElementById('emailLogin').value
  const senhaLogin = document.getElementById('senhaLogin').value

   $.ajax({
    url : "/consultaLogin",
    type : 'post',
    data : {
         email: emailLogin,
         password: senhaLogin
    }
})
.done(function(msg){
    if (msg != 'semLogin') {

      localStorage.setItem('infologin', JSON.stringify(msg))

      $('#MenuLogin').css('display', 'none');
      $('#ColunaBatePapo').css('display', 'block');
      document.location.reload(true);

    } else {

      $('#avisoToast').text('Usuário ou senha não conferem.')
      $('.toast').toast('show');

      setTimeout(() => {
        $('.toast').toast('hide');
      }, 5000);
    }
})
})

$(document).on('click', '#OpenRegistroUser', function(e){
  e.preventDefault()
  $('#MenuRegistro').css('display', 'flex');
  $('#MenuRegistro').css('opacity', '1')
})

$(document).on('click', '#cancelaRegistro', function(e){
  e.preventDefault()
  $('#MenuRegistro').css('opacity', '0')
  $('#MenuRegistro').css('display', 'none');
})

$(document).on('click', '#deslogarLogin', function(e){
  e.preventDefault()
  localStorage.removeItem('infologin');
  $('#ColunaBatePapo').css('display', 'none');
  $('#MenuRegistro').css('display', 'none');
  document.location.reload(true);
})



$(document).on('click', '#checaRegistro', function(e){
  e.preventDefault()

  const emailRegistro = document.getElementById('emailRegistroLogin').value
  const senhaRegistro = document.getElementById('senhaRegistroLogin').value
  const nomeRegistro = document.getElementById('nomeRegistroExibicao').value

   $.ajax({
    url : "/consultaRegistroUsuario",
    type : 'post',
    data : {
         email: emailRegistro,
         password: senhaRegistro,
         nome: nomeRegistro
    }
})
.done(function(msg){
  if (msg == 'emailRepetido') {
    $('#avisoToast').text('Email já utilizado para cadastro')
    $('.toast').toast('show');

    setTimeout(() => {
      $('.toast').toast('hide');
    }, 5000);

  } else {
    if (msg != 'semRegistro') {

      $('#MenuRegistro').css('display', 'none');
      $('#avisoToast').text('Usuário cadastrado com sucesso.')
      $('.toast').toast('show');

      $('#emailRegistroLogin').val('');
      $('#senhaRegistroLogin').val('');
      $('#nomeRegistroExibicao').val('');

      setTimeout(() => {
        $('.toast').toast('hide');
      }, 5000);

    } else {
      $('#avisoToast').text('Erro ao inserir cadastro.')
      $('.toast').toast('show');

      setTimeout(() => {
        $('.toast').toast('hide');
      }, 5000);
    }
}
})
})

$(document).on('click', '#fechaBatePapo', function(e){
  $('#batepapoLateral').css('display', 'none')
  $('#ReabreBatePapo').css('display', 'block')
})

$(document).on('click', '#ReabreBatePapo', function(e){
  $('#batepapoLateral').css('display', 'block')
  $('#ReabreBatePapo').css('display', 'none')
})