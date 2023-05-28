openFormBtn.addEventListener('click', function() {
	oscuro = document.getElementById("oscuro");
	contactForm = document.getElementById("contact-form");
	
	oscuro.style.display = 'block';
	contactForm.style.display = 'block';
});

closeFormBtn.addEventListener('click', function() {
	oscuro = document.getElementById("oscuro");
	contactForm = document.getElementById("contact-form");
	
	oscuro.style.display = 'none';
	contactForm.style.display = 'none';
});