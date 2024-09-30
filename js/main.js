import Anime from "./anime.js";

// home버튼 눌렀을때 스크롤 밑으로 되는거 테스트한거 지움
// const h1 = document.querySelector("header h1");

// h1.addEventListener("click", e => {
// 	e.preventDefault();

// 	new Anime(window, { scroll: 700 }, { duration: 1000 });
// });

// 이동할 세로 영역의 위치값이 담길 빈 배열 생성
let posArr = [];

//main안쪽의 모든 직계자식요소들을 유사배열로 담음
const secArr = document.querySelector("main").children; //HTMLCollection(4) 이라 forEach가 안먹움
const scroll_btns = document.querySelectorAll(".scroller li");

//세로 이동 위치값을 구해야되는 배열요소들을 반복돌며 빈배열에 이동할 위치값 등록
for (let sec of secArr) posArr.push(sec.offsetTop);

console.log(posArr); // 배열값 확인

//scroller click event bind
scroll_btns.forEach((btn, idx) => {
	//각 버튼 클릭 시
	btn.addEventListener("click", () => {
		//Anime로 클릭한 버튼 순번으로 posArr에서 이동할 위치값을 적용
		new Anime(window, { scroll: posArr[idx] }, { duration: 1000 });
	});
});

// window scroll event bind
window.addEventListener("scroll", () => {
	// console.log("scrollY", window.scrollY);
	// console.log("offsetTop", banner.offsetTop);
});

// window.scrollTop : 현재 브라우저에서 스크롤된 거리값 (동적)
// DOM.offsetTop : 문서 상단 끝에서부터 현재 돔의 세로 위치값 (정적)

// 미션 - 이동하려고 하는 4개 영역의 세로 위치값을 배열로 담음(offsetTop활용)
// - scroll_btns클릭시 new Anime를 이용해서 해당영역으로 스크롤모션 이동 처리

// 미션
// 각 버튼 클릭 시 해당 버튼의 활성화 처리(on클래스 추가)
// 위와 같이 클릭으로 버튼활성화 기능을 구현했을때 발생하는 문제점 찾아보기
// 위의 문제점 파악했다면 해결 방법도 고민
