
var archivo = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
var subarchivo = window.location.href.substring(window.location.href.lastIndexOf("#") + 1);

// Transiciones

document.onmousedown=disableclick;
function disableclick(event){
  if(event.button==2)
   {
     return false;    
   }
}

window.onload = function transiciones() {
	$('#body_form').get(0).style.marginLeft = "-50px";
	$('#body_form').get(0).style.opacity = '1';
	$('#right_menu').get(0).style.marginTop = "50px";
	$('#main_bar').get(0).style.top = "0px";
	$('#main_bar').get(0).style.opacity = "1";
	$('#right_menu').get(0).style.opacity = "1";
	$('#container_widget').get(0).style.marginLeft = "-3px";
	$('#container_widget').get(0).style.opacity = "1";
	$('#second_content').get(0).style.marginLeft = "0px";
	$('#third_content').get(0).style.marginLeft = "0px";
	$('#help_widget').get(0).style.opacity = "1";
	setTimeout(function(){
		$('#help_widget').get(0).style.top = "500px";
		},2500);
};

setTimeout(function(){
		$('#copyright').get(0).style.opacity = "1";
		},3000);
setTimeout(function(){
		$('#projects').get(0).style.top = "0px";
		$('#container_projects').get(0).style.opacity = "1";
		},500);
setTimeout(function(){
		$('#container_projects').get(0).style.opacity = "1";
		},1500);
setTimeout(function(){
		$('#logo1').get(0).style.width = "200px";
		$('#logo1').get(0).style.height = "213.6px";
		$('#logo1').get(0).style.opacity = "1";
		},100);
setTimeout(function(){
		$('#logo1').get(0).style.width = "550px";
		$('#logo1').get(0).style.height = "213.6px";
		$('#logo1').get(0).style.opacity = "1";
		},200);
setTimeout(function(){
		$('#logo1').get(0).style.width = "515px";
		$('#logo1').get(0).style.height = "200px";
		},600);
setTimeout(function(){
		$('#cookie_warning').get(0).style.bottom = "0px";
		$('#cookie_warning').get(0).style.opacity = "0.7";
		},3000);

if (archivo === 'index.php') {
    $('#body_form').get(0).style.height = "305px";
} else {
	$('.text').get(0).style.height = "15px";
	$('.text').get(0).style.overflow = "hidden";
	setTimeout(function(){
		$('.text').get(0).style.overflow = "auto";
		$('.text').get(0).style.height = "auto";
		$('.text').get(0).style.display = "none";
		},3000);
	setTimeout(function(){
		$('.text').slideToggle(1000);
		},3001);
}

function contact(){
	alert('Se ha enviado tu consulta correctamente!');
	location.href="index.php";
}
// Selector de idioma

$('#spanish').attr("href", "../es/"+archivo+ "");
$('#catalan').attr("href", "../ca/"+archivo+ "");
$('#english').attr("href", "../en/"+archivo+ "");

// Librería Angular.js

//function mostraruser(){
//	document.getElementById('ins_user').style.display = "inline-block";
//	document.getElementById('ins_user').style.fontSize = "13px";
//	document.getElementById('fontsizelittle').style.fontSize = "13px";
//	document.getElementById('fontsizelittle').style.display = "inline-block";
//}


// Comprobar dispositivo móvil

//window.mobilecheck = function() {
//var check = false;
//(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
//return check; }
//if(window.mobilecheck()) {$('#body_form').style.marginLeft = "200px";}

// Prevenir refresco al enviar formularios

$('form').submit(function(event){
	event.preventDefault();
});

// Alerta y creación de la Cookie de usuario (Expira en 24h)

function login(){
	var usera = $('#user').get(0).value;
	$.cookie('username', usera, { expires: 1 });
	alert("Se ha logueado correctamente como "+usera+"!");
	location.reload();
};

var username = $.cookie('username');
if (typeof username === 'undefined') {
	document.getElementById('user_active').style.display = "none";
	document.getElementById('logout').style.display = "none";
}

if (typeof username !== 'undefined') {
	document.getElementById("tmp_last_li").className = "";
    $('#script').append('<li id="custom_bg" class="right"><a href="profile.html"><span id="config_span"><img alt="config-icon" src="img/nav/config.png">Detalles</span></a></li>');
	$('#script').css("width", "1026px");
	$('#script').css("marginLeft", "-60px");
	$('img[alt=youtube-icon]').css("left", "-15px");
	$('img[alt=youtube-icon]').css("top", "1px");
};

// Insertar Cookie en el campo del usuario activo

var userp = $.cookie('username');
$('#user_active').get(0).innerHTML = "<b>Usuario:</b> "+userp+ "";

// Alerta registro OK

function signup(){
	alert('Se ha registrado correctamente!');
};

// Alerta inscripción OK

function enrollok(){
	$('#ok').toggle('fast');
	alert('Inscripción enviada!');
};

// Transición del footer

$('#signup').click(function(){
	location.href="signup.html";
});

$('#go_back').click(function(){
	$('#registro').slideToggle(500);
	$('#login_layer').slideToggle(500);
	$('#copyright').get(0).style.marginTop = "0px";
	$('#login_layer').get(0).style.opacity = "1";
});

$('#accept_cookies').click(function(){
	$('#cookie_warning').toggle('fast');
	$.cookie('cookie_warning', '1', { expires: 1 });
});

// Cerrar sesión

$('#logout').click(function(){
	$.removeCookie('username');
	alert('Ha cerrado sesión correctamente!');
	location.reload()
});

// Si se le ha dado a OK el mensaje no aparecerá hasta 24h

var checkcookie = $.cookie('cookie_warning');
if (checkcookie === '1') {
    $('#cookie_warning').get(0).style.display = "none";
}

if (archivo !== 'index.php') {
    $('#right_menu').get(0).style.marginRight = "240px";
}

$('#display_gallery').click(function(){
			$('#display_gallery').slideToggle('fast');
			setTimeout(function(){$('#1').slideToggle('fast');},1000);
			setTimeout(function(){$('#2').slideToggle('fast');},1000);
			setTimeout(function(){$('#3').slideToggle('fast');},2000);
			setTimeout(function(){$('#4').slideToggle('fast');},2000);
			setTimeout(function(){$('#5').slideToggle('fast');
				window.scrollTo(0, 5000);},3000);
			setTimeout(function(){$('#6').slideToggle('fast');},3000);
			setTimeout(function(){$('#7').slideToggle('fast');},4000);
			setTimeout(function(){$('#8').slideToggle('fast');
				window.scrollTo(0, 5000);},4000);
			setTimeout(function(){$('#9').slideToggle('fast');},5000);
			setTimeout(function(){$('#10').slideToggle('fast');
				window.scrollTo(0, 5000);},5000);
			setTimeout(function(){$('#11').slideToggle('fast');},6000);
			setTimeout(function(){$('#12').slideToggle('fast');
				window.scrollTo(0, 5000);},6000);
			setTimeout(function(){$('#13').slideToggle('fast');},7000);
			setTimeout(function(){$('#14').slideToggle('fast');
				window.scrollTo(0, 5000);},7000);
			setTimeout(function(){$('#video-frame').get(0).style.display = "block";
				window.scrollTo(0, 5000);},7000);
});

$('#massaguer').hover(function(){
    $('#massaguerp').slideToggle('fast');
});

$('#plumb').hover(function(){
    $('#plumbp').slideToggle('fast');
});

if (archivo === 'config.html') {
	$('#user_profile').get(0).innerHTML = ""+userp+"";
	$('#profile_name').val(username);
}

if (archivo === 'config.html') {
	if (typeof username === 'undefined') {
		alert("Permiso denegado!");
		location.href="index.php";
	};
};

if (archivo === 'curses.html') {
	setTimeout(function() {
		if (subarchivo === 'graphic_design-easy') {
			$('#display_graphic').slideToggle(500);
		}
		if (subarchivo === 'graphic_design-advanced') {
			$('#display_graphic').slideToggle(500);
		}
		if (subarchivo === 'graphic_design') {
			$('#display_graphic').slideToggle(500);
		}
		if (subarchivo === 'video-easy') {
			$('#display_video').slideToggle(500);
		}
		if (subarchivo === 'video-advanced') {
			$('#display_video').slideToggle(500);
		}
		if (subarchivo === 'video') {
			$('#display_video').slideToggle(500);
		}
		if (subarchivo === 'audio-easy') {
			$('#display_audio').slideToggle(500);
		}
		if (subarchivo === 'audio-advanced') {
			$('#display_audio').slideToggle(500);
		}
		if (subarchivo === 'audio') {
			$('#display_audio').slideToggle(500);
		}
		if (subarchivo === 'videogame-easy') {
			$('#display_videogame').slideToggle(500);
		}
		if (subarchivo === 'videogame-advanced') {
			$('#display_videogame').slideToggle(500);
		}
		if (subarchivo === 'videogame') {
			$('#display_videogame').slideToggle(500);
		}
		if (subarchivo === 'html-easy') {
			$('#display_html').slideToggle(500);
		}
		if (subarchivo === 'html-advanced') {
			$('#display_html').slideToggle(500);
		}
		if (subarchivo === 'html') {
			$('#display_html').slideToggle(500);
		}
	}, 4000);
}

$('#off').text("Apagar");
$('#on').text("Encender");
$('#on').css("display", "none");

function switchoff() {
	$('#switch_circle').css("left", "20px");
	$('.switch').attr('onclick','switchon()');
	$('body').css("background", "#1C1C1C");
	$('#user_active').css("color", "white");
	$('.switch').css('background','green');
	$('#off').fadeToggle(300);
	$('#on').fadeToggle(300);
	$('#off').css("display", "none");
};

function switchon() {
	$('#switch_circle').css("left", "0px");
	$('.switch').attr('onclick','switchoff()');
	$('body').css('background-image', 'url(img/texture_grain.png)');
	$('#user_active').css("color", "black");
	$('.switch').css('background','#484747');
	$('#on').fadeToggle(300);
	$('#off').fadeToggle(300);
};

//
//if(typeof username === 'undefined'){
  //document.getElementById("user_active").style.display = "none";
   	//document.getElementById("logout").style.display = "none";
//} else {
//	document.getElementById("user_active").style.display = "inline-block";
  // 	document.getElementById("logout").style.display = "inline-block";
//}

!function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

// Menú principal para móviles basado en JavaScript

$('#action_item_gallery').click(function(){$('#item_gallery').slideToggle(500);});
$('#action_item_curses').click(function(){$('#item_curses').slideToggle(500);});
$('#mobile_graphic').click(function(){$('#item_lvl3_1').slideToggle(500);});
$('#mobile_video').click(function(){$('#item_lvl3_2').slideToggle(500);});
$('#mobile_audio').click(function(){$('#item_lvl3_3').slideToggle(500);});
$('#mobile_videogame').click(function(){$('#item_lvl3_4').slideToggle(500);});
$('#graphic').click(function(){$('#display_graphic').slideToggle(500);});
$('#video').click(function(){$('#display_video').slideToggle(500);});
$('#audio').click(function(){$('#display_audio').slideToggle(500);});
$('#videogame').click(function(){$('#display_videogame').slideToggle(500);});
$('#html').click(function(){$('#display_html').slideToggle(500);});
$('#display_prueba').click(function(){$('#detalles_prueba').slideToggle(200);});
$('#menu').click(function(){$('#hashtag').slideToggle(200);});