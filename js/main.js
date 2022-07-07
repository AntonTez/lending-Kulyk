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

