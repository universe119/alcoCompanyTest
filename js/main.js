import Anime from "./anime.js";

//variables
let posArr = [];
const base = -600;
const secArr = document.querySelector("main").children;
const scroll_btns = document.querySelectorAll(".scroller li");

//init (get section position array)
//처음 로딩시 호출해서 초기 배열값 담아줌
getPosArr(secArr);

//get  position array whenever scrolls
//브라우저 리사이즈 이벤트 발생할 때마다 새로운 값으로 갱신
window.addEventListener("resize", () => {
	getPosArr(secArr);
	modifyPos();
});

//scroll btn event
scroll_btns.forEach((btn, idx) => {
	btn.addEventListener("click", () => {
		moveScroll(idx);
	});

	//btn activation
	// scroll_btns.forEach(el => el.classList.remove("on"));
	// scroll_btns[idx].classList.add("on");
	// activation(scroll_btns, idx);
});

// window scroll event bind
window.addEventListener("scroll", () => {
	// &&로 if대신 씀 조금 복잡한 코드(어려운코드)
	// posArr.forEach((pos, idx) => scroll >= pos && activation(scroll_btns, idx));

	// 조금 쉬운 코드 위와 같음
	posArr.forEach((_, idx) => {
		//어려운 코드
		//특정 영역사이일때만 해당 순번의 요소에만 on을 붙이고
		if (window.scrollY >= posArr[idx] + base && window.scrollY < posArr[idx + 1] + base) {
			scroll_btns[idx].classList.add("on");
			secArr[idx].classList.add("on");
		} else {
			//해당 영역에서 벗어났을때는 해당 순번의 요소에만 on을 제거
			scroll_btns[idx].classList.remove("on");
			secArr[idx].classList.remove("on");
		}
		// if (window.scrollY >= pos + base) [scroll_btns, secArr].forEach(arr => activation(arr, idx));

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

//move scroll
function moveScroll(index, speed = 500) {
	new Anime(window, { scroll: posArr[index] }, { duration: speed });
}

//when resize modifying scroll position
//현재 활성화된 버튼의 순번 위치로 모션없이 바로 스크롤 이동처리
function modifyPos() {
	const activeEl = document.querySelector("li.on");
	//Array.from(유사배열) - 유사배열을 순수배열 형태로 변환해서 반환
	//전체배열.indexOf(특정배열) : 전체배열에서 특정배열값의 순번을 반환
	//scroll_btns라는 버튼 그룹에서 on클래스가 붙어있는 버튼의 순서값을 반환
	const activeIndex = Array.from(scroll_btns).indexOf(activeEl);
	moveScroll(activeIndex, 0);
	console.log(activeIndex);
}
