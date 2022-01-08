$('.show-btn').click(function(){
  $('.container div').fadeIn('fast')
})
$('.hide-btn').click(function(){
  $('.container div').fadeOut('slow')
})
$('.toggle-btn').click(function(){
  $('.container div').fadeToggle()
})