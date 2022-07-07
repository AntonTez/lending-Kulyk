window.onload = function() {
	let calc = 0;
	const windowWidth = document.documentElement.clientWidth;
	// const windowWidth = document.querySelector('html').offsetWidth;
	if(windowWidth > 884) {
		const containerWidth = document.querySelector('.container').offsetWidth - 30;
		const aboutLeftSide = document.querySelector('.about__left-side');
		calc = windowWidth - containerWidth - (windowWidth - containerWidth)/2;
		aboutLeftSide.style.marginLeft = `${calc}px`;
		// console.log(windowWidth, containerWidth, calc);
	}
	
};

var accordion = function (){
	var data = $('.accordion').attr('data-accordion');
	$('.accordion__header').on('click' , function () {
			if (data === 'close'){
					$('.accordion__body').slideUp();
					if ($(this).hasClass('active')){
							$(this).toggleClass('active');
					}
					else {
							$('.accordion__header').removeClass('active');
							$(this).toggleClass('active');
					}
			}
			else{
					$(this).toggleClass('active')
			}
			$(this).next('.accordion__body').not(':animated').slideToggle();
	});
};
	accordion();

$(document).ready(function(){
	$("[data-scroll]").on("click", function(event) {
			event.preventDefault();

			let elementId = $(this).data('scroll');
			let elementOffset = $(elementId).offset().top;


			$("html, body").animate({
					scrollTop: elementOffset - 70
			}, 700);
	});

	$('.burger').on('click' , function () {
			$(this).toggleClass('active')
			$('.nav').toggleClass('active')
	});
	

	function countdown(dateEnd) {
			var timer, days, hours, minutes, seconds;
		
			dateEnd = new Date(dateEnd);
			dateEnd = dateEnd.getTime();
		
			if (isNaN(dateEnd)) {
		
		//alert(dateEnd);
				return;
			}
		
			timer = setInterval(calculate, 1000);
		
			function calculate() {
				var dateStart = new Date();
				var dateStart = new Date(dateStart.getUTCFullYear(),
					dateStart.getUTCMonth(),
					dateStart.getUTCDate(),
					dateStart.getUTCHours(),
					dateStart.getUTCMinutes(),
					dateStart.getUTCSeconds());
				var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)
		
				if (timeRemaining >= 0) {
					days = parseInt(timeRemaining / 86400);
					timeRemaining = (timeRemaining % 86400);
					hours = parseInt(timeRemaining / 3600);
					timeRemaining = (timeRemaining % 3600);
					minutes = parseInt(timeRemaining / 60);
					timeRemaining = (timeRemaining % 60);
					seconds = parseInt(timeRemaining);
		
		//alert("Hello2");
		
		
					document.getElementById("d").innerHTML = parseInt(days, 10) + " днів";
					document.getElementById("h").innerHTML = ("0" + hours).slice(-2) + " годин";
					document.getElementById("m").innerHTML = ("0" + minutes).slice(-2) + " хвилин";
					// document.getElementById("s").innerHTML = ("0" + seconds).slice(-2);
				} else {
			
		 // alert("Hello3");
					return;
				}
			}
		
			function display(days, hours, minutes, seconds) {}
		}
		
		
		
		
		countdown (1658068638000);

});


