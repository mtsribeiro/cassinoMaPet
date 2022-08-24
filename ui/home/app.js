
  $(document).on('click', '#OpenLogarUser', function(e){
    e.preventDefault()
    $('#MenuLogin').css('opacity', '1')
  })

  $(document).on('click', '#cancelaLogin', function(e){
    e.preventDefault()
    $('#MenuLogin').css('opacity', '0')
  })