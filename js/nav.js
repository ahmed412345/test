let icon = document.getElementById("menu-icon");
let bars = document.getElementsByClassName("menu-bar");
let menu = document.getElementsByClassName("ul-nav-center")[0];
let addTomenu = document.getElementsByClassName("ul-nav-right")[0];
let appear = false;
function addAndRemove(cssClass) {
	for (let i = 0; i < bars.length; i++) {
		bars[i].classList.toggle(cssClass);
	}
}
icon.onclick = function () {
	addAndRemove("above");
	setTimeout(function () {
		addAndRemove("rotate");
	}, 300);
	if (appear) {
		menu.classList.remove("show");
		menu.after(addTomenu);
		addTomenu.classList.remove("add");
	} else {
		menu.classList.add("show");
		addTomenu.classList.add("add");
		menu.appendChild(addTomenu);
	}
	appear = !appear;
};
