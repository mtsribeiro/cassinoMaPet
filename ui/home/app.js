
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
      document.location.reload(true);

    } else {
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
  document.location.reload(true);

  $('#MenuLogin').css('display', 'none');
})

$(document).on('click', '#deslogarLogin', function(e){
  e.preventDefault()
  $('#MenuRegistro').css('display', 'none');
  document.location.reload(true);

  
})