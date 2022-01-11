document.addEventListener('DOMContentLoaded', function() {
	/*HEADER ROLLING IN*/
	let header = document.querySelector('.header');

	function headerRoll() {
		header.classList.remove('roll-right')
	}

	setInterval(headerRoll, 1000);

	/*INTRO ANIMATION*/
	let h1 = document.querySelector('.info-first__title'),
		 introText = document.querySelector('.info-first__text'),
		 buttons = document.querySelectorAll('.info-first__button'),
		 introButton = buttons[0];
		 console.log(introButton);


	function removeBlurH1() {
		h1.classList.remove('blur');
	}

	function removeBlurIntroText() {
		introText.classList.remove('blur');
	}

	function removeScaleIntroButton() {
		introButton.classList.remove('scale-in');
	}
	
	setInterval (removeBlurH1, 1000);
	setInterval (removeBlurIntroText, 3000);
	setInterval (removeScaleIntroButton, 6000);

	/*BURGER MENU SHOW/HIDE*/
	let burgerIcon = document.querySelector('.burger-menu'),
		 burgerMenu = document.querySelector('.burger-nav');

	burgerIcon.addEventListener('click', function() {
		if (!burgerIcon.classList.contains('active')) {
			burgerIcon.classList.add('active');
			burgerMenu.classList.remove('hidden');
		} else {
			burgerIcon.classList.remove('active');
			burgerMenu.classList.add('hidden');
		}
	});

	/*SLIDERS/TABS*/ 
	let sliderMenu = document.querySelector('.slider-menu'),
		 sliderName = document.querySelectorAll('.slider-menu__item'),
		 sliderContent = document.querySelectorAll('.slider-content');

	function hideSliderContent(a) {
		for (let i = a; i < sliderContent.length; i++) {
			sliderContent[i].classList.remove('visible');
			sliderContent[i].classList.add('hidden');
			sliderContent[i].classList.add('none');
		}
	}

	hideSliderContent(1);

	function showSliderContent(b) {
		if (sliderContent[b].classList.contains('none')) {
			sliderContent[b].classList.remove('none');
			sliderContent[b].classList.remove('hidden');
			sliderContent[b].classList.add('visible');
		}
	}

	sliderMenu.addEventListener('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('slider-menu__item')) {
			for (let i = 0; i < sliderName.length; i++) {
				if (target == sliderName[i]) {
					hideSliderContent(0);
					showSliderContent(i);
					sliderName[0].classList.remove('selected');
					sliderName[1].classList.remove('selected');
					sliderName[2].classList.remove('selected');
					sliderName[3].classList.remove('selected');
					sliderName[i].classList.add('selected');
					break;
				}
			}
		}
	});


});