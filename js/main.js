const main = document.querySelector('main');
const [panel, btns] = main.querySelectorAll('ul');
const speed = 3000;
let evtBlock = false;

/* 
모션 중 이벤트핸들러 호출 방지 흐름 
1. evtBlock 값을 false로 초기화한 뒤, 이벤트문 안쪽에 해당 값이 true 일때 return으로 중지처리
2. 버튼 클릭 시, 무조건 evtBlock 전역변수의 값을 true로 변경 (처음에 한번만 이벤트를 호출하고 그 이후에는 동작이 막힘)
3. new Anime의 callback함수로 evtBlock값을 false로 변경( 모션주엥는 이벤트함수 호출이 막혀있다가 모션이 끝나는 시점에 callback에 의해서 다시 전역변수를 이벤트 호출가능하돌고 변경)
*/

console.log(Array.from(btns.children));

Array.from(btns.children).forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		if (e.target.classList.contains('on') || evtBlock) return;
		activation(Array.from(btns.children), idx);
		movePanel(panel, idx);
	});
});

function activation(arr, idx) {
	arr.forEach((el) => el.classList.remove('on'));
	arr[idx].classList.add('on');
}

function movePanel(el, idx) {
	evtBlock = true;
	console.log('func called!');
	new Anime(
		panel,
		{ left: -100 * idx + '%' },
		{
			duration: speed,
			callback: () => {
				evtBlock = false;
			},
		}
	);
}
