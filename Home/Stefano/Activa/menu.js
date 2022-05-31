$(document).ready(main);var contador = 1;

function main(){

	

	$('.nav-item-btn').click(function(){

		if(contador == 1){
			$('.naav').animate({
				height: '100%' 
				
			});
			$('.naav').animate({
				left: '0' 
				
			});
			
			contador = 0;
		} else {
			contador = 1;
			$('.naav').animate({
				left: '-100%'
			});
			$('.naav').animate({
				height: '0' 
				
			});
		}

	});

			$('.nav-item-btn2').click(function(){

		if(contador == 1){
			
			contador = 0;
		} else {
			contador = 1;
			$('.naav').animate({
				left: '-100%'
			});
			$('.naav').animate({
				height: '0' 
				
			});
		}

	});

};

