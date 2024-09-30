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

	// &&로 if대신 씀 조금 복잡한 코드(어려운코드)
	// posArr.forEach((pos, idx) => scroll >= pos && activation(scroll_btns, idx));

	// 조금 쉬운 코드 위와 같음
	posArr.forEach((pos, idx) => {
		//어려운 코드
		// if (scroll >= pos) [scroll_btns, secArr].forEach(arr => activation(arr, idx));

		// 쉬운코드 위와 같음
		if (scroll >= pos) {
			activation(scroll_btns, idx);
			activation(secArr, idx);
		}
	});
});

//activation func
function activation(arrEl, index) {
	//btn activation
	// arrEl.forEach(el => el.classList.remove("on"));
	/// HTML콜렉션으로 forEach가 안돼서 for of문으로 바꿈
	for (const el of arrEl) el.classList.remove("on");
	arrEl[index].classList.add("on");
}

// 미션 - 위의 로직에서 main요소 안쪽의 4개 #visual, #banner, #news, #info 영역도 스크롤 영역도달시 on클래스 붙여서 활성화 처리
