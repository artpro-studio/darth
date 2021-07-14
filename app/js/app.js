import $ from 'jquery'

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')


$(document).ready(function () {
	$('.menu__close').on('click', function (e) {
		e.preventDefault()
		$('.content .left').removeClass('active')
	})
	$('.header__burger').on('click', function (e) {
		e.preventDefault()
		$('.content .left').addClass('active')
	})
})

$('body').on('click', '.password-control', function(){
	debugger;
	if ($('#password-input').attr('type') == 'password'){
		$(this).addClass('view');
		$('#password-input').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#password-input').attr('type', 'password');
	}
	return false;
});