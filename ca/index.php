<!DOCTYPE html>
<html lang="ca" oncontextmenu="return false">
	<head>
		<meta charset="utf-8">
		<!-- LITE
		<link rel="stylesheet" type="text/css" href="css/lite.css"> -->
		<link rel="stylesheet" type="text/css" href="css/style-header.css">
		<link rel="stylesheet" type="text/css" href="css/style-body.css">
		<link rel="stylesheet" type="text/css" href="css/style-right-menu.css">
		<link rel="stylesheet" type="text/css" href="css/style-footer.css">
		<!-- <link rel="stylesheet" type="text/css" href="css/media-queries.css"> -->
		<link rel="stylesheet" type="text/css" href="css/transitions.css">
		<link rel="shortcut icon" href="img/favicon.png">
		<!-- jQuery -->
		<script type="text/javascript" src="js/jquery-2.1.3.min.js"></script>
		<!-- Librería de contenidos dinámicos de Google (SPA) -->
		<script src="js/angular.min.js"></script>
		<!-- Cookies -->
		<script type="text/javascript" src="js/jquery.cookie.js"></script>
		<title>Acadèmia Avellaneda - Inici</title>
	</head>
	<body>
	<div id="banner-cookies">
		<div class="bottom-shadow"></div>
		<div class="cookies-text">
				<p>Utilitzem cookies per poder oferir la millor experiència al usuari, més concretament:</p>
					<br>
					<ul class="lista_normal">
						<li>Recordar si s'ha acceptat l'avís de Cookies. (expira 24h)</li>
						<li>Guardar el nom d'usuari i tancar la seva sesió. (expira 24h)</li>
					</ul>
				<p>Si estas visualitzant aquesta pàgina web en mode local, és a dir; "file:///" o 192.168.1.x, etc. Es molt probable que las cookies estiguin desactivades pel propi navegador, per activar el mode local segueix aquests pasos:</p>
					<br>
					<ul class="lista_normal">
						<li><b>Chrome:</b> Crea un accés directe de Chrome i en les propietats afegeix-li el paràmetre '--enable-file-cookies'.
						<li><b>Firefox:</b> Por defecte, almenys a la última versió (36), accepta les cookies locales, per lo que no es necesari cal cambi.
						<li><b>Internet Explorer:</b> Siii, a partir d'Internet Explorer 11, accepta less Cookies locals només donant clic en "Permetre Cookies bloquejades" quan ho pregunti. Well Do It Microsoft!
						<li><b>Opera:</b> No es pot, es pot amb l'extensió 'EditThisCookie', perè no és pla d'instalar extensions per la correcta visualització de la web.</li>
					</ul>
		</div>
		<div id="download-browser">
			<a href="https://www.google.com/chrome/browser/desktop/index.html" target="blank"><div id="download-chrome"><img src="img/chrome_icon.png" alt="Google Chrome" title="Google Chrome">CHROME</div></a>
			<a href="https://www.mozilla.org/firefox" target="blank"><div id="download-firefox"><img src="img/firefox_icon.png" alt="Mozilla Firefox" title="Mozilla Firefox">FIREFOX</div></a>
			<a href="http://windows.microsoft.com/internet-explorer" target="blank"><div id="download-explorer"><img src="img/explorer_icon.png" alt="Internet Explorer" title="Internet Explorer">IEXPLORER</div></a>
		</div>
	</div>
	<div id="hashtag"><a class="twitter-timeline" href="https://twitter.com/hashtag/videojuegos" data-widget-id="586488697404665856">Tweets sobre #videojuegos</a></div>
	<!-- Menú Horizontal de otros proyectos y redes sociales -->
	<div id="projects">
		<div id="container_projects">
			<ul>
				<li><a><b>Altres projectes:</b></a></li>
				<li><img src="img/dash.png" alt="dash-previews"><a id="massaguer" href="http://www.consultoriamassaguer.es/" target="blank">Consultoria Massaguer</a></li>
				<li><img src="img/dash.png" alt="dash-previews"><a id="plumb" href="http://david.consultoriamassaguer.es/" target="blank">Construccions Plumb</a></li>
				<li>
					<img src="img/dash.png" alt="dash">
					<img alt="top-logo" src="img/top-logo.png">
					<div id="square">
					</div>
				</li>
				<li>
					<a class="less_margin_left" href="https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/academia.InformaUberlandia" title="No es la real" target="_blank"><img alt="fbshare" src="img/facebook-share.png"></a>
				</li>
				<li>
					<img src="img/dash.png" alt="dash-share"><a class="less_margin_left" href="https://twitter.com/home?status=%40etsii%20Me%20apunto%20a%20la%20Acad%C3%A9mia%20Avellaneda!" target="blank"><img alt="tweet" src="img/tweet.png"></a>
				</li>
				<li>
					<img src="img/dash.png" alt="dash-share"><a class="less_margin_left" href="https://plus.google.com/106429748600150466310?prsrc=5" target="blank"><img alt="googleplus" src="img/googleplus.png"></a>
				</li>
				<li id="menu">
					<img src="img/dash.png" alt="dash-twits">
					<span>TWITS</span>
				</li>
			</ul>
			<div id="previews">
				<img id="massaguerp" alt="massaguer-preview" src="img/massaguer-preview.png">
				<img id="plumbp" alt="plumb-preview" src="img/plumb-preview.png">
			</div>
		</div>
	</div>
	<!-- Widget Social -->
	<div id="container_widget">
		<a target="blank" title="Facebook" href="https://www.facebook.com/massaguer"><img src="img/facebook_icon.png" alt="facebook" class="social"></a>
		<a target="blank" title="Twitter" href="https://www.twitter.com/massaguer"><img src="img/twitter_icon.png" alt="twitter" class="social"></a>
		<a target="blank" title="Google+" href="https://plus.google.com/massaguer"><img src="img/google_icon.png" alt="google" class="social"></a>
	</div>
	<!-- Navigation for PC -->
	<header id="web">
		<!-- Client Logo -->
			<img id="logo1" class="logo" alt="logo" src="img/logo.png">
			<span id="user_active"></span>
			<img alt="logout" id="logout" src="img/logout1.png">
			<!-- Navigation Bar -->
			<nav class="main_nav">
				<div id="main_bar">
				<!-- Menu LvL 1 -->
				<ul id="script" class="navigation">
					<li class="left"><a href="index.php"><span><img alt="home-icon" src="img/nav/home.png">Inici</span></a></li>
					<li><a href="gallery.html"><span><img alt="gallery-icon" src="img/nav/gallery.png">Galeria</span></a></li>
					<li><a href="curses.html"><span><img alt="curses-icon" src="img/nav/curses.png">Cursos</span></a>
					<!-- Menu LvL 2 -->
						<ul>
							<li><a href="curses.html#graphic_design"><span>Diseñy gráfic</span></a>
							<!-- Menu LvL 3 -->
								<ul>
									<li class="lvl2_first"><a href="curses.html#graphic_design-easy"><span>Nivell Bàsic</span></a></li>
									<li class="lvl2_last"><a href="curses.html#graphic_design-advanced"><span>Nivell Avançat</span></a></li>
								</ul>
							</li>
							<li><a href="curses.html#video"><span>Edició de vídeo</span></a>
							<!-- Menu LvL 3 -->
								<ul>
									<li class="lvl2_first"><a href="curses.html#video-easy"><span>Nivell Bàsic</span></a></li>
									<li class="lvl2_last"><a href="curses.html#video-advanced"><span>Nivell Avançat</span></a></li>
								</ul>
							</li>
							<li><a href="curses.html#audio"><span>Edició d'audio</span></a>
							<!-- Menu LvL 3 -->
								<ul>
									<li class="lvl2_first"><a href="curses.html#audio-easy"><span>Nivell Bàsic</span></a></li>
									<li class="lvl2_last"><a href="curses.html#audio-advanced"><span>Nivell Avançat</span></a></li>
								</ul>
							</li>
							<li class="double_height"><a href="curses.html#videogame"><span>Programació <br>de videojocs</span></a>
							<!-- Menu LvL 3 -->
								<ul>
									<li class="lvl2_first"><a href="curses.html#videogame-easy"><span>Nivell Bàsic</span></a></li>
									<li class="lvl2_last"><a href="curses.html#videogame-advanced"><span>Nivell Avançat</span></a></li>
								</ul>
							</li>
							<li class="double_height last_li"><a href="curses.html#html"><span>Programació Web</span></a>
							<!-- Menu LvL 3 -->
								<ul>
									<li class="lvl2_first"><a href="curses.html#html-easy"><span>Nivell Bàsic</span></a></li>
									<li class="lvl2_last"><a href="curses.html#html-advanced"><span>Nivell Avançat</span></a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li><a href="contact.html"><span><img alt="message-icon" src="img/nav/message.png">Contacte</span></a></li>
					<li><a href="about.html"><span><img alt="about-icon" src="img/nav/question.png">Sobre de..</span></a></li>
					<li id="tmp_last_li" class="right"><a href="https://www.youtube.com/user/esiuclm" target="blank"><span><img alt="youtube-icon" src="img/nav/youtube.png">YouTube</span></a></li>
				</ul>
				</div>
			</nav>
	</header>
	<!-- Navigation for Mobiles -->
	<header id="mobile">
			<img alt="logo" id="logo2" src="img/logo.png">
			<div id="main_bar_mobile">
				<ul class="bar_mobile">
					<li class="first_mobile_li"><span><a href="index.php">Inicio</a></span></li>
					<li id="action_item_gallery">Galería
						<div id="item_gallery">
						<ul>
							<li><a href="images.html">- Imágenes</a></li>
							<li><a href="videos.html">- Videos</a></li>
						</ul>
						</div>
					</li>
					<li><span id="action_item_curses">Cursos</span>
					<!-- Menu LvL 2 -->
						<div id="item_curses">
						<ul>
							<li><a id="mobile_graphic">- Diseño gráfico</a>
							<!-- Menu LvL 3 -->
							<div class="hidden" id="item_lvl3_1">
								<ul>
									<li><a href="curses.html#graphic_design-easy">- Nivel Básico</a></li>
									<li><a href="curses.html#graphic_design-advanced">- Nivel Avanzado</a></li>
								</ul>
							</div>
							</li>
							<li><a id="mobile_video">- Edición de video</a>
							<!-- Menu LvL 3 -->
							<div class="hidden" id="item_lvl3_2">
								<ul>
									<li><a href="curses.html#video-easy">- Nivel Básico</a></li>
									<li><a href="curses.html#video-advanced">- Nivel Avanzado</a></li>
								</ul>
							</div>
							</li>
							<li><a id="mobile_audio">- Edición de audio</a>
							<!-- Menu LvL 3 -->
							<div class="hidden" id="item_lvl3_3">
								<ul>
									<li><a href="curses.html#audio-easy">- Nivel Básico</a></li>
									<li><a href="curses.html#audio-advanced">- Nivel Avanzado</a></li>
								</ul>
							</div>
							</li>
							<li><a id="mobile_videogame">- Programación de videojuegos</a>
							<!-- Menu LvL 3 -->
							<div class="hidden" id="item_lvl3_4">
								<ul>
									<li><a href="curses.html#videogame-easy">- Nivel Básico</a></li>
									<li><a href="curses.html#videogame-advanced">- Nivel Avanzado</a></li>
								</ul>
							</div>
							</li>
							<li><a id="mobile_html">- Programación HTML y CSS</a>
							<!-- Menu LvL 3 -->
							<div class="hidden" id="item_lvl3_5">
								<ul>
									<li><a href="curses.html#html-easy">- Nivel Básico</a></li>
									<li><a href="curses.html#html-advanced">- Nivel Avanzado</a></li>
								</ul>
							</div>
							</li>
						</ul>
						</div>
					</li>
					<li>Contacto</li>
					<li>Acerca de..</li>
					<li class="last_mobile_li">YouTube</li>
				</ul>
				</div>
	</header>
	<!-- Cuerpo principal -->
	<div id="container">
	<!-- Contenido -->
	<div id="body_form" class="first_content">
			<div id="help_widget">
				<a href="https://github.com/LeParadoxHD/AcademiaAvellaneda" target="blank">Codi font</a>
			</div>
			<div id="enc_title">
				<h1>Qui som?</h1>
				<img id="h1-corner" alt="h1-corner" src="img/h1-corner.png">
			</div>
			<div class="text">
				<div id="text-left">
					<p>Som una acadèmia especialitzada en l'ensenyament dels cursos amb més futur laboral en el mercat actual, portem 10 anys ensenyant i actualment realitzem cursos de disseny gràfic, edició de vídeo i àudio, i programació de videojocs i HTML i CSS. La nostra actual fama és donada pel nostre mètodes d'ensenyament i per oferir una sortida laboral gairebé segura.</p>
				</div>
				<div id="text-right">
					<img alt="html5-logo" src="img/html5-logo.jpg">
				</div>
				<div id="text-both">
					<p>Tenim grans patrocinadors per poder ensenyar tot el que els alumnes necessiten per poder sortir al mercat laboral, com; Cisco, Samsung, SONY, i altres.</p>
				</div>
			</div>
			<div id="second_content">
			<!-- Título del cuerpo -->
			<div class="title">
				<h1>Informació</h1>
					<img src="img/curse-corner-left.png" alt="curse-corner-left" class="curse-corner-left">
					<img src="img/curse-corner-right.png" alt="curse-corner-right" class="curse-corner-right">
			</div>
			<!-- Contenido -->
			<ul id="details">
					<li><b>Nom:</b> Acadèmia d’informàtica Avellaneda </li>
					<li><b>Direcció:</b> Carrer del mossos, 23</li>
					<li><b>Ciutat:</b> Badalona</li>
					<li><b>CIF:</b> B-65748243</li>
					<li><b>Telèfon:</b> 93 460 37 52</li>
				</ul>
			</div>
			<div id="third_content">
			<!-- Título del cuerpo -->
			<div class="special" id="enroll">
				<h1>Formulari d'inscripció</h1>
					<img src="img/enroll-corner-left.png" alt="curse-corner-left" class="curse-corner-left">
					<img src="img/enroll-corner-right.png" alt="curse-corner-right" class="curse-corner-right">
			</div>
			<!-- Contenido -->
			<div id="enroll_new">
				<!-- Formulario de inscripción -->
				<form id="enroll_form" onsubmit="enrollok()" enctype="multipart/form-data" method="post">
					<fieldset>
						<legend>DADES</legend>
							<table>
								<!-- Columna 1 -->
								<tr>
									<td id="first_td">
										<label for="enroll_name">Nom:</label>
											<input type="text" value="" name="enroll_name" id="enroll_name" placeholder="Usuari" required>
										<label for="enroll_last_name">Cognoms:</label>
											<input type="text" value="" name="enroll_last_name" id="enroll_last_name" placeholder="Cognoms" required>
										<label for="enroll_name">DNI:</label>
											<input type="text" value="" name="enroll_dni" placeholder="DNI" id="enroll_dni" required>
									</td>
									<!-- Columna 2 -->
									<td id="second_td">
										<label class="now_curse" for="now_curse">Seleccioni curs:</label>
											<select id="now_curse">
												<optgroup label="Diseny gràfic">
													<option value="graphic_simple">Nivell Bàsic</option>
 													<option value="graphic_advanced">Nivell Avançat</option>
												<optgroup label="Edició de video">
													<option value="graphic_simple">Nivell Bàsic</option>
 													<option value="graphic_advanced">Nivell Avançat</option>
												<optgroup label="Edició d'audio">
													<option value="graphic_simple">Nivell Bàsic</option>
 													<option value="graphic_advanced">Nivell Avançat</option>
												<optgroup label="Programació de videojocs">
													<option value="graphic_simple">Nivell Bàsic</option>
 													<option value="graphic_advanced">Nivell Avançat</option>
												<optgroup label="Programació HTML i CSS">
													<option value="graphic_simple">Nivell Bàsic</option>
 													<option value="graphic_advanced">Nivell Avançat</option>
											</select>
										<input type="submit" value="Envia">
									<img alt="ok" src="img/ok.png" id="ok">
							</table>
					</fieldset>
				</form>
			</div>
		</div>
	</div>
	<!-- Barra Lateral -->
	<div id="sidebar">
		<div id="right_menu">
			<!-- Inicio de sesión -->
				<div id="login_layer">
				<form onsubmit="return login() || active()" enctype="multipart/form-data" method="post">
					<label for="user">Usuari:</label>
						<input placeholder="Usuari" type="text" name="user" maxlength="20" id="user" value="" required>
					<label for="password">Contrasenya:</label>
						<input placeholder="Contrasenya" type="password" name="password" id="password" value="" required>
						<input type="submit" id="signin" value="Accedir">
				</form>
				<input type="submit" id="signup" value="Registrarse">
				</div>
			<!-- Registro -->
				<div id="registro">
					<h2>Registre</h2>
					<form onsubmit="signup()" enctype="multipart/form-data" method="post">
						<label for="signup-user">Usuario:</label>
							<input placeholder="Usuario" type="text" name="signup-user" id="signup-user" value="" required>
						<label for="signup-password">Contraseña:</label>
							<input type="password" placeholder="Contraseña" name="signup-password" id="signup-password" value="" required>
						<label for="signup-password">Repetir contraseña:</label>
							<input type="password" placeholder="Contraseña" name="signup-password-verify" id="signup-password-verify" value="" required>
							<input type="submit" id="signup-ok" value="Registrarse">
					</form>
					<button id="go_back">Tornar</button>
				</div>
			<!-- Cookies Ayuda -->
				<span id="display_cookies">¿Tens problemes de Cookies?</span><br>
					<div onclick="switchoff()" class="switch">
						<div id="switch_circle"></div>
						<div id="switch_bg"></div>
					</div><span id="off" class="switch_dialog"></span><span id="on" class="switch_dialog"></span>
				<span id="probe"></span>
			<!-- Selector de idioma -->
				<ul id="languages">
					<li><a id="spanish"><img alt="Spanish" class="flag" src="img/flag_spanish.GIF"><span>Español</span></a></li>
					<li><a id="catalan"><img alt="Catalan" class="flag" src="img/flag_catalan.png"><span>Català</span></a></li>
					<li><a id="english"><img alt="English" class="flag" src="img/flag_english.png"><span>English</span></a></li>
				</ul>
				
		</div>
		<!-- Pié de página -->
		<footer id="copyright">
			<a href="https://www.moodle.org/" target="blank"><img alt="moodle" src="img/moodle.png"></a>
			<a href="https://www.netacad.com" target="blank"><img alt="cisco" src="img/cisco.png"></a>
			<span>Academia Avellaneda &copy;<br>Tots els drets reservats.</span>
		</footer>
	</div>
	<div id="filled_footer">&nbsp;</div>
	<div id="cookie_warning">
		Utilitcem Cookies per millorar l'experiència d'usuari.<div id="accept_cookies">OK</div>
	</div>
	<!-- Post-Efectos JavaScript -->
	<script type="text/javascript" src="js/efectos.js"></script>
	</div>
	</body>
</html>