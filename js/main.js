import Anime from "./anime.js";

//variables
let posArr = [];
const base = -600;
const secArr = document.querySelector("main").children;
const scroll_btns = document.querySelectorAll(".scroller li");

//init (get section position array)
//처음 로딩시 호출해서 초기 배열값 담아줌
getPosArr(secArr);
console.log(posArr);

//get  position array whenever scrolls
//브라우저 리사이즈 이벤트 발생할 때마다 새로운 값으로 갱신
window.addEventListener("resize", () => {
	getPosArr(secArr);
	console.log(posArr);
});

//scroll btn event
scroll_btns.forEach((btn, idx) => {
	btn.addEventListener("click", () => {
		new Anime(window, { scroll: posArr[idx] });

		//btn activation
		// scroll_btns.forEach(el => el.classList.remove("on"));
		// scroll_btns[idx].classList.add("on");
		activation(scroll_btns, idx);
	});
});

// window scroll event bind
window.addEventListener("scroll", () => {
	// &&로 if대신 씀 조금 복잡한 코드(어려운코드)
	// posArr.forEach((pos, idx) => scroll >= pos && activation(scroll_btns, idx));

	// 조금 쉬운 코드 위와 같음
	posArr.forEach((pos, idx) => {
		//어려운 코드
		if (window.scrollY >= pos + base) [scroll_btns, secArr].forEach(arr => activation(arr, idx));

		// 쉬운코드 위와 같음
		// if (window.scrollY >= pos) {
		// 	activation(scroll_btns, idx);
		// 	activation(secArr, idx);
		// }
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

//get box position array func
function getPosArr(arrEl) {
	// posArr 초기화 함
	// 일단은 기존 posArr값을 비운뒤
	// 새로운 새로 위치값을 배열에 담아줌
	posArr = [];
	// 위 초기화 변수를 넣지 않으면 push는 값을 계속 추가 한다.
	for (let el of arrEl) posArr.push(el.offsetTop);
}
