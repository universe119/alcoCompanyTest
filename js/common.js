const btnMo = document.querySelector("header button");
const mobilePanel = document.querySelector(".mobilePanel");

btnMo.addEventListener("click", () => {
	mobilePanel.classList.toggle("on");
});
