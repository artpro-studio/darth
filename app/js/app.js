import $ from 'jquery'
import noUiSlider from 'nouislider';
// // Import vendor jQuery plugin example (not module)


var slider = document.getElementById('range-slider');

noUiSlider.create(slider, {
	start: [20, 80],
	connect: true,
	tooltips: true,
	range: {
		'min': 0,
		'max': 100
	}
});

$(document).ready(function () {

	$('.menu__close').on('click', function (e) {
		e.preventDefault()
		$('.content .left').removeClass('active')
	})
	$('.header__burger').on('click', function (e) {
		e.preventDefault()
		$('.content .left').addClass('active')
	})

	$('.settings__password img').on('click', function(){
		let parent = $(this).parents('.settings__password_field')
		if(parent.hasClass('hidden-pass')){
			parent.removeClass('hidden-pass')
			parent.find('input').attr('type', 'text');
			$(this).attr('src', 'images/dist/close-pass.png')
		}else{
			parent.addClass('hidden-pass')
			parent.find('input').attr('type', 'password');
			$(this).attr('src', 'images/dist/Show-pass.png')
		}
	});
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