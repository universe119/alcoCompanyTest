import Anime from "./anime.js";

//variables
let posArr = [];
const secArr = document.querySelector("main").children;
const scroll_btns = document.querySelectorAll(".scroller li");

//init (get section position array)
for (let sec of secArr) posArr.push(sec.offsetTop);

//scroll btn event
scroll_btns.forEach((btn, idx) => {
	btn.addEventListener("click", () => {
		new Anime(window, { scroll: posArr[idx] }, { duration: 1000 });

		//btn activation
		// scroll_btns.forEach(el => el.classList.remove("on"));
		// scroll_btns[idx].classList.add("on");
		activation(scroll_btns, idx);
	});
});

// window scroll event bind
window.addEventListener("scroll", () => {
	const scroll = window.scrollY;

	// if (scroll >= posArr[0]) activation(scroll_btns, 0);
	// if (scroll >= posArr[1]) activation(scroll_btns, 1);
	// if (scroll >= posArr[2]) activation(scroll_btns, 2);
	// if (scroll >= posArr[3]) activation(scroll_btns, 3);

	// &&로 if대신 씀 조금 복잡한 코드(어려운코드)
	// posArr.forEach((pos, idx) => scroll >= pos && activation(scroll_btns, idx));

	// 조금 쉬운 코드
	posArr.forEach((pos, idx) => {
		if (scroll >= pos) activation(scroll_btns, idx);
	});
});

//activation func
function activation(arrEl, index) {
	//btn activation
	arrEl.forEach(el => el.classList.remove("on"));
	arrEl[index].classList.add("on");
}

//미션 - 스크롤시 버튼 활성화 로직 정리 / 스크롤이벤트 안쪽의 로직을 반복문 처리(1시 35분까지)
