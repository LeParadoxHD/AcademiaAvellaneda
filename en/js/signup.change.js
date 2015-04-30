$(function() {
	var name = $('#email');
	var greeting = $('#updates');
	
	name.keyup(function () {
		greeting.text('Accepto rebre actualitzacions en ' + name.val())
	})
	
	name.keydown(function () {
		greeting.text('Accepto rebre actualitzacions en ' + name.val())
	})
})

function signup() {
	alert("S\'han guardat el cambis correctament!");
	location.href="index.html";
}

$('#born_day').autotab({ format: 'alphanumeric', target: '#born_month' });
$('#born_month').autotab({ format: 'alphanumeric', target: '#born_year', previous: '#born_day' });
$('#born_year').autotab({ format: 'alphanumeric', previous: '#born_month' });

var username = $.cookie('username');
if (typeof username !== 'undefined') {
	$('#name').val(username);
}