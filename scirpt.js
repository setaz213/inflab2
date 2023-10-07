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