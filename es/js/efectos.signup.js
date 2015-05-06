$(function() {
	var name = $('#email');
	var greeting = $('#updates');
	
	name.keyup(function () {
		greeting.text('Acepto recibir actualizaciones en ' + name.val())
	})
	
	name.keydown(function () {
		greeting.text('Acepto recibir actualizaciones en ' + name.val())
	})
})

function saveTextAsFile()
{
	var usuario = document.getElementById("user").value;;
	var textToWrite = document.getElementById("password2").value;
	var hash = CryptoJS.SHA3(textToWrite, { outputLength: 256 });
	var textFileAsBlob = new Blob(["Usuario: " + usuario + "  |  Contraseña: " + textToWrite + "  |  Cifrada(SHA-256): " + hash]);
	var fileNameToSaveAs = document.getElementById("textFile").value;
	

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}

function signupk() {
	saveTextAsFile();
	alert("Se ha registrado correctamente!");
	location.href="index.php";
}

$(document).ready(function() {
	$("#password2").keyup(function () {
		var pass1 = $("#password").val();
		var pass2 = $("#password2").val();
		
		if(pass1 == pass2){
			$("#passerror").text("Contraseñas coinciden").css("color", "green");
		} else {
			$("#passerror").text("Contraseñas no coinciden").css("color", "red");
		}
	});
});

$('#display_secondary').click(function() {
	$('#secondary_datetime').fadeIn(1).animate({"left": "370px"});
	$('#born_year').css("width", "70px");
});

$('#born_day').autotab({ format: 'alphanumeric', target: '#born_month' });
$('#born_month').autotab({ format: 'alphanumeric', target: '#born_year', previous: '#born_day' });
$('#born_year').autotab({ format: 'alphanumeric', previous: '#born_month' });
$('#postal').autotab({ format: 'alphanumeric', target: '#city' });
$('#tel').autotab({ format: 'alphanumeric', target: '#user' });