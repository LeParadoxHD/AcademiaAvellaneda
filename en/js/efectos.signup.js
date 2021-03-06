$(function() {
	var name = $('#email');
	var greeting = $('#updates');
	
	name.keyup(function () {
		greeting.text('I accept to receive updates on ' + name.val())
	})
	
	name.keydown(function () {
		greeting.text('I accept to receive updates on ' + name.val())
	})
})

function saveTextAsFile()
{
	var usuario = document.getElementById("user").value;;
	var textToWrite = document.getElementById("password2").value;
	var hash = CryptoJS.SHA3(textToWrite, { outputLength: 256 });
	var textFileAsBlob = new Blob(["User: " + usuario + "  |  Password: " + textToWrite + "  |  Encrypted(SHA-256): " + hash]);
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
	alert("You signed up correctly!");
	location.href="index.php";
}

$(document).ready(function() {
	$("#password2").keyup(function () {
		var pass1 = $("#password").val();
		var pass2 = $("#password2").val();
		
		if(pass1 == pass2){
			$("#passerror").text("Passwords match").css({"color":"green"});
		} else {
			$("#passerror").text("Passwords not match").css({"color":"red"});
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