if(viewportWidth < 992){
    document.querySelector(".layout-1-2").classList.add("sm");
}

window.addEventListener('resize', function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	if (viewportWidth >= 992) {
        document.querySelector(".layout-1-2").classList.remove("sm");
	} else {
        document.querySelector(".layout-1-2").classList.add("sm");
	}
}, false);
