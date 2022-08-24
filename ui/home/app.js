
  $(document).on('click', '#OpenLogarUser', function(e){
    e.preventDefault()
    $('#MenuLogin').css('opacity', '1')
  })

  $(document).on('click', '#cancelaLogin', function(e){
    e.preventDefault()
    $('#MenuLogin').css('opacity', '0')
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
      document.location.reload(true);
    } else {
      console.log('sem login');
    }
})
})