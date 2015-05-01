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

function signup() {
	alert("Se ha registrado correctamente!");
	location.href="index.html";
}

$(document).ready(function() {
	$("#password2").bind("keyup", function () {
		var pass = $("#password").attr("value");
		var retypepass = $("#password2").attr("value");
		
		if(pass == retypepass){
			$("#passerror").html("Contraseñas coinciden").css({"color":"green"});
		} else {
			$("#passerror").html("Contraseñas no coinciden").css({"color":"red"});
		}
	});
});

$('#display_secondary').click(function() {
	$('#secondary_datetime').toggle(300);
});

$('#born_day').autotab({ format: 'alphanumeric', target: '#born_month' });
$('#born_month').autotab({ format: 'alphanumeric', target: '#born_year', previous: '#born_day' });
$('#born_year').autotab({ format: 'alphanumeric', previous: '#born_month' });

