	// Function send email, using server of emails
	function emailSend()
	{
		
			var email = document.getElementById('et_email').value;
			var subject = document.getElementById('et_nombre').value;
			var emailBody = document.getElementById('et_message').value;
			var telefono = document.getElementById('et_phone').value;
			window.location.href = "mailto:davidgp228@gmail.com"
									+'?subject= Portafolio mensaje de ' + subject 
									+ '&body=' +   emailBody +' Numero de contacto: '+telefono +' Correo de contacto: '+email;
									
									
	};