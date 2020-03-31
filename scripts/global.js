// Define variables.
const navbar = document.querySelector("nav");
const submenu = document.querySelector(".submenu");
const sticky = navbar.offsetTop;
const scrollToTop = document.getElementById("scrollToTop");


// Burger Menu.
const burger = document.querySelector(".burger");
const slide = document.querySelector(".slide");
let sideMenu = false;
const body = document.querySelector("body");
burger.addEventListener("click", ()=>{
	burger.classList.toggle("active");
	
	// Slide menu.
	slide.classList.toggle("slideIn");
	sideMenu = !sideMenu; // Change the flag variable from "false" to "true" or "true" to "false", to be used in the if statement for hiding/showing the scroll button.

	// Fixate body
	body.classList.toggle("bodyHidden");

	// Hide scroll to top button.
	if(sideMenu) {
		scrollToTop.classList.remove("scrollButtonActive");
	}
});
// Click on DROPDOWN - MOVIES on small screen to display/hide the list.
const smallMovies = document.getElementById("smallScreenMovies");
smallMovies.addEventListener("click", ()=>{
	const moviesDropdown = document.getElementById("moviesDropdown");
	moviesDropdown.classList.toggle("drop");
});
// Click on DROPDOWN - SERIES on small screen to display/hide the list.
const smallSeries = document.getElementById("smallScreenSeries");
smallSeries.addEventListener("click", ()=>{
	const seriesDropdown = document.getElementById("seriesDropdown");
	seriesDropdown.classList.toggle("drop");
});


// Modal box and question mark.
let questionMark = document.getElementById("questionMark");
let modal = document.querySelector(".modal");
if(questionMark){
	questionMark.addEventListener("click", ()=>{
		modal.classList.add("modalActive");
	})	
}
const modalGotIt = document.getElementById("modalGotIt");
if(modalGotIt){
	modalGotIt.addEventListener("click", ()=>{
		modal.classList.remove("modalActive");
	})
}
// Close modal with escape key.
document.body.addEventListener("keydown", (e)=>{
	if( e.code === "Escape") {
		modal.classList.remove("modalActive");
	}
})




// Go to detailed info page for the tv show.
function showSelected(id) {
	sessionStorage.setItem("showId", id);
	window.open("../shows-page.html");
	return false;
}

