var imgItems = $('.grid-main-area').length;
var imgPos = 1;

for(i = 1; i <= imgItems; i++) {
	$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
}

$('.grid-main-area').hide();
$('.grid-main-area:first').show();
$('.pagination li:first').css({'color': '#CD6E2E'});
$('.pagination li:not(:first)').css({'color': '#ababab'});

$('.pagination li').click(pagination);
$('.arrow-right span').click(nextSlider);
$('.arrow-left span').click(prevSlider);



$('.grid-main-area').mouseenter(function(){clearInterval(timer);});
$('.grid-main-area').mouseleave(function(){setTimeout(function(){ timer = setInterval(function(){
	nextSlider();
		}, 3000); }, 0);});

var timer = setInterval(function(){
	nextSlider();
},3000);




function pagination(){

	var paginationPos = $(this).index() + 1;

	$('.grid-main-area').hide();
	$('.grid-main-area:nth-child('+ paginationPos +')').show();

	$('.pagination li').css({'color': '#ababab'});
	$('.pagination li:nth-child('+ paginationPos +')').css({'color': '#CD6E2E'});

	imgPos = paginationPos;


		clearInterval(timer);
	setTimeout(function(){ timer = setInterval(function(){
	nextSlider();
		}, 3000); }, 0);



}

function nextSlider(){
	if( imgPos >= imgItems){imgPos = 1;} 
	else{imgPos++;}


	$('.pagination li').css({'color': '#ababab'});
	$('.pagination li:nth-child('+ imgPos +')').css({'color': '#CD6E2E'});


	$('.grid-main-area').hide();
	$('.grid-main-area:nth-child('+ imgPos +')').show();

	clearInterval(timer);
	setTimeout(function(){ timer = setInterval(function(){
	nextSlider();
		}, 3000); }, 0);

}

function prevSlider(){
	if( imgPos <= 1){imgPos = imgItems;} 
	else{imgPos--;}


	$('.pagination li').css({'color': '#ababab'});
	$('.pagination li:nth-child('+ imgPos +')').css({'color': '#CD6E2E'});


	$('.grid-main-area').hide();
	$('.grid-main-area:nth-child('+ imgPos +')').show();

		clearInterval(timer);
	setTimeout(function(){ timer = setInterval(function(){
	nextSlider();
		}, 3000); }, 0);

}




 

window.onscroll = function() {
var coordenadas = $('.act-in').offset().top;
  var coordenadas2 = $('.nav').offset().top;

  /*var y = window.scrollY;*/

  if(coordenadas < coordenadas2){
				$('.nav').css({'background-color': '#041322'});
				$('.nav-item3').css({'color': 'white'});
				$('.fa-sign-in').css({'color': '#ababab'});

  			}else{
  				$('.nav').css({'background-color': 'transparent'});
  				$('.nav-item3').css({'color': 'transparent'});
  				$('.fa-sign-in').css({'color': 'black'});

  			}

};




var imgItems2 = $('.serv-slider').length;
var imgPos2 = 1;
var imgPos3 = 2;
var imgPos4 = 3;




$('.serv-slider').hide();
$('.serv-slider:first').show();
$('.serv-slider:nth-child('+ 2 + ')').show();
$('.serv-slider:nth-child('+ 3 + ')').show();
 

$('.serv-slider:nth-child('+ imgPos2 +')').css({'filter': 'blur(1.5px) brightness(0.4)'});
$('.serv-slider:nth-child('+ imgPos3 +')').css({'filter': 'brightness(1)'});
$('.serv-slider:nth-child('+ imgPos4 + ')').css({'filter': 'blur(1.5px) brightness(0.4)'});


$('.arrow-right2 span').click(nextSlider2);
$('.arrow-left2 span').click(prevSlider2);

$('.serv-slider').mouseenter(function(){clearInterval(timer2);});
$('.serv-slider').mouseleave(function(){setTimeout(function(){ timer2 = setInterval(function(){
	nextSlider2();
		}, 3000); }, 0);});




var timer2 = setInterval(function(){
	nextSlider2();
},3000);



function nextSlider2(){
	
	if( imgPos2 >= imgItems2){
		imgPos2 = 1; imgPos3 = 2; imgPos4 = 3;
	} 
	else{
		imgPos2++; imgPos3++; imgPos4++;
	}	

	if(imgPos2 == 11 ){

	imgPos2 = 1; imgPos3 = 2; imgPos4 = 3;
	}
	
	$('.serv-slider').hide();
	$('.serv-slider:nth-child('+ imgPos2 +')').show();
	$('.serv-slider:nth-child('+ imgPos3 + ')').show();
	$('.serv-slider:nth-child('+ imgPos4 + ')').show();

	$('.serv-slider:nth-child('+ imgPos2 +')').css({'filter': 'blur(1.5px) brightness(0.4)'});
	$('.serv-slider:nth-child('+ imgPos3 +')').css({'filter': 'brightness(1)'});
	$('.serv-slider:nth-child('+ imgPos4 + ')').css({'filter': 'blur(1.5px) brightness(0.4)'});
	
	clearInterval(timer2);
	setTimeout(function(){ timer2 = setInterval(function(){
	nextSlider2();
		}, 3000); }, 0);
	}



function prevSlider2(){
	if( imgPos2 <= 1){imgPos2 = 10; imgPos3 = 11; imgPos4 = 12;} 
	else{imgPos2--; imgPos3--; imgPos4--;}
	

	$('.serv-slider').hide();
	$('.serv-slider:nth-child('+ imgPos2 +')').show();
	$('.serv-slider:nth-child('+ imgPos3 + ')').show();
	$('.serv-slider:nth-child('+ imgPos4 + ')').show();

	$('.serv-slider:nth-child('+ imgPos2 +')').css({'filter': 'blur(1.5px) brightness(0.4)'});
	$('.serv-slider:nth-child('+ imgPos3 +')').css({'filter': 'brightness(1)'});
	$('.serv-slider:nth-child('+ imgPos4 + ')').css({'filter': 'blur(1.5px) brightness(0.4)'});
	
	clearInterval(timer2);
	setTimeout(function(){ timer2 = setInterval(function(){
	nextSlider2();
		}, 3000); }, 0);

}

