$(document).ready(main);var contador = 1;

function main(){

	

	$('.vermas2').click(function(){

		if(contador == 1){
			
			$('.vermenos').animate({
				left: '10%' 

			});
			$('.contenedor').css({'filter': 'brightness(0.1)'});
			
			contador = 0;
		} else {
			contador = 1;
			$('.vermenos').animate({
				left: '-100%'
			});
			
			$('.contenedor').css({'filter': 'brightness(1)'});
		}

	});



};

