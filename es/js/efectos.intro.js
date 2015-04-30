
var introduction = $.cookie('intro');
var language = $.cookie('lang');
if (introduction === '1') {
	if (language === 'es') {
		location.href="es/index.html";
	}
	if (language === 'ca') {
		location.href="ca/index.html";
	}
	if (language === 'en') {
		location.href="en/index.html";
	}
} else {

var archivo = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
var subarchivo = window.location.href.substring(window.location.href.lastIndexOf("#") + 1);

$('.english').click(function() {
	$('.lang').removeClass("selected");
	$('.english').addClass("selected");
});

$('.spanish').click(function() {
	$('.lang').removeClass("selected");
	$('.spanish').addClass("selected");
});

$('.catalan').click(function() {
	$('.lang').removeClass("selected");
	$('.catalan').addClass("selected");
});

// Transiciones

setTimeout(function(){
	$('#bar_out').slideToggle(300);
	$('#bar').css("backgroundPosition", "20px");
},1500);
setTimeout(function(){
	$('#title').slideToggle(300);
},500);
setTimeout(function(){
	$('.lang').slideToggle(800);
},2500);
setTimeout(function(){
	$('#percent').text("Guardando cach\u00E9..");
	$('#bar').css("width", "10px");
},2000);
$(document).ready(function() {
	$.cookie('intro', '1', { expires: 1, domain: 'consultoriamassaguer.es' });
	$('.spanish').addClass("selected");
	window.idioma="es/";
	setTimeout(function(){
		$('#percent').text("Poniendo monos a trabajar..");
		$('#bar').css("width", "50px");
		$('#bar').css("backgroundPosition", "-30px");
		},3000);
	setTimeout(function(){
		$('#percent').text("Mejorando estabilidad..");
		$('#bar').css("width", "100px");
		$('#bar').css("backgroundPosition", "-60px");
		},4000);
	setTimeout(function(){
		$('#percent').text("Optimizando c\u00F3digo..");
		$('#bar').css("width", "150px");
		$('#bar').css("backgroundPosition", "-90px");
		},5000);
	setTimeout(function(){
		$('#percent').text("Descargando librer\u00EDas..");
		$('#bar').css("width", "200px");
		$('#bar').css("backgroundPosition", "-120px");
		},6000);
	setTimeout(function(){
		$('#percent').text("Actualizando informaci\u00F3n..");
		$('#bar').css("width", "250px");
		$('#bar').css("backgroundPosition", "-150px");
		},7000);
	setTimeout(function(){
		$('#percent').text("Creando objetos JavaScript..");
		$('#bar').css("width", "300px");
		$('#bar').css("backgroundPosition", "-180px");
		},8000);
	setTimeout(function(){
		$('#percent').text("Reescalando im\u00E1genes..");
		$('#bar').css("width", "350px");
		$('#bar').css("backgroundPosition", "-210px");
		},9000);
	setTimeout(function(){
		$('#percent').text("Ajustando tama\u00F1os..");
		$('#bar').css("width", "400px");
		$('#bar').css("backgroundPosition", "-240px");
		},10000);
	setTimeout(function(){
		$('#percent').text("Ajustando posiciones..");
		$('#bar').css("width", "450px");
		$('#bar').css("backgroundPosition", "-270px");
		},11000);
	setTimeout(function(){
		$('#percent').text("Listo!");
		$('#bar').css("width", "486px");
		$('#bar').css("backgroundPosition", "-300px");
		},12000);
	setTimeout(function(){
		$('#title').text("Cargando .");
		},1000);
	setTimeout(function(){
		$('#title').text("Cargando . .");
		},1500);
	setTimeout(function(){
		$('#title').text("Cargando . . .");
		},2000);
	setTimeout(function(){
		$('#title').text("Cargando");
		},2500);
	setTimeout(function(){
		$('#title').text("Cargando .");
		},3000);
	setTimeout(function(){
		$('#title').text("Cargando . .");
		},3500);
	setTimeout(function(){
		$('#title').text("Cargando . . .");
		},4000);
	setTimeout(function(){
		$('#title').text("Cargando");
		},4500);
	setTimeout(function(){
		$('#title').text("Cargando .");
		},5000);
	setTimeout(function(){
		$('#title').text("Cargando . .");
		},5500);
	setTimeout(function(){
		$('#title').text("Cargando . . .");
		},6000);
	setTimeout(function(){
		$('#title').text("Cargando");
		},6500);
	setTimeout(function(){
		$('#title').text("Cargando .");
		},7000);
	setTimeout(function(){
		$('#title').text("Cargando . .");
		},7500);
	setTimeout(function(){
		$('#title').text("Cargando . . .");
		},8000);
	setTimeout(function(){
		$('#title').text("Cargando");
		},8500);
	setTimeout(function(){
		$('#title').text("Cargando .");
		},9000);
	setTimeout(function(){
		$('#title').text("Cargando . .");
		},9500);
	setTimeout(function(){
		$('#title').text("Cargando . . .");
		},10000);
	setTimeout(function(){
		$('#title').text("Cargando");
		},10500);
	setTimeout(function(){
		$('#title').text("Cargando .");
		},11000);
	setTimeout(function(){
		$('#title').text("Cargando . .");
		},11500);
	setTimeout(function(){
		$('#title').text("Cargando . . .");
		},12000);
	setTimeout(function(){
		$('#title').text("Cargando");
		},12500);
	setTimeout(function(){
		$('#title').text("Cargando .");
		},13000);
	setTimeout(function(){
		$('#title').text("Cargando . .");
		},13500);
	setTimeout(function(){
		$('#title').text("Cargando . . .");
		},14000);
	setTimeout(function(){
		$('#title').text("Cargando");
		},14500);
});


$('.english').click(function() {
	$('.lang').removeClass("selected");
	$('.english').addClass("selected");
	window.idioma="en/";
	$.cookie('lang', 'en', { expires: 1, domain: 'consultoriamassaguer.es' });
});

$('.spanish').click(function() {
	$('.lang').removeClass("selected");
	$('.spanish').addClass("selected");
	window.idioma="es/";
	$.cookie('lang', 'es', { expires: 1, domain: 'consultoriamassaguer.es' });
});

$('.catalan').click(function() {
	$('.lang').removeClass("selected");
	$('.catalan').addClass("selected");
	window.idioma="ca/";
	$.cookie('lang', 'ca', { expires: 1, domain: 'consultoriamassaguer.es' });
});

setTimeout(function(){
	location.href = idioma + "index.html";
},14000);

}