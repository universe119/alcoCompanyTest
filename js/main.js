import Anime from "./anime.js";

let posArr = [];
const secArr = document.querySelector("main").children;
const scroll_btns = document.querySelectorAll(".scroller li");

for (let sec of secArr) posArr.push(sec.offsetTop);

//scroller click event bind
scroll_btns.forEach((btn, idx) => {
	btn.addEventListener("click", () => {
		new Anime(window, { scroll: posArr[idx] }, { duration: 1000 });

		//btn activation
		scroll_btns.forEach(el => el.classList.remove("on"));
		scroll_btns[idx].classList.add("on");
	});
});

// window scroll event bind
window.addEventListener("scroll", () => {
	// console.log("scrollY", window.scrollY);
	// console.log("offsetTop", banner.offsetTop);
});

//미션 - 위의 버튼 활성화 로직 정리, 위와 같이 클릭시에 버튼활성화 로직 처리시 발생하는 문제점 알아보기
