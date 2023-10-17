document.addEventListener("DOMContentLoaded", function() {
	const menuButton = document.getElementById("menu-toggle");
	const submenu = document.querySelector(".submenu");

	menuButton.addEventListener("click", function() {
					submenu.classList.toggle("active");
					menuButton.classList.toggle("active");
	});

	// Закрытие меню при клике вне меню
	document.addEventListener("click", function(event) {
					const target = event.target;
					if (!submenu.contains(target) && target !== menuButton) {
									submenu.classList.remove("active");
									menuButton.classList.remove("active");
					}
	});
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
