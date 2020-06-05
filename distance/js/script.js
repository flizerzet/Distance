const menuBtn = document.querySelector('.m-menu'),
	menu = document.querySelector('.menu-sidebar');

menuBtn.addEventListener('click', function(e) {
	menu.classList.toggle('menu-sidebar-active');
});