var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if(viewportWidth < 876){
	document.querySelector("#frame").classList.add("mobile");
	document.querySelector(".nav").style.display = "none";
	document.querySelector(".mnav").style.display = "flex";
	document.querySelector(".credits").classList.add("no-display");
}

window.addEventListener('resize', function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	if (viewportWidth >= 877) {
		document.querySelector("#frame").classList.remove("mobile");
		document.querySelector(".nav").style.display = "flex";
		document.querySelector(".mnav").style.display = "none";
		document.querySelector(".credits").classList.remove("no-display");
	} else {
		document.querySelector("#frame").classList.add("mobile");
		document.querySelector(".nav").style.display = "none";
		document.querySelector(".mnav").style.display = "flex";
		document.querySelector(".credits").classList.add("no-display");
	}
}, false);

if(viewportWidth < 768){
    document.querySelector(".layout-1-2").classList.add("sm");
}

window.addEventListener('resize', function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	if (viewportWidth >= 768) {
        document.querySelector(".layout-1-2").classList.remove("sm");
	} else {
        document.querySelector(".layout-1-2").classList.add("sm");
	}
}, false);

function toggleNav(){
	if(document.querySelector(".mnav").classList.contains("inactive")){
		document.querySelector(".mnav").classList.remove("inactive");
		document.querySelector("#menu-icon").classList.replace("flaticon-menu-1", "flaticon-error");
		document.querySelector("#menu-icon").classList.remove("lightest-color");
	}else{
		document.querySelector(".mnav").classList.add("inactive");
		document.querySelector("#menu-icon").classList.replace("flaticon-error", "flaticon-menu-1");
		document.querySelector("#menu-icon").classList.add("lightest-color");
	}
}