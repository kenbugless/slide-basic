//0 : 0%
//1 : -100%
//2 : -200%
//3 : -300%
//4 : -400%

//idx : -100* idx+'%'

const main = document.querySelector('main');
const [panel, btns] = main.querySelectorAll('ul');

//Array.from(유사배열) : 유사배열을 순수배열로 반환
console.log(Array.from(btns.children));

//순수배열로 변환한 버튼 요소를 반복처리
Array.from(btns.children).forEach((btn, idx) => {
	//반복도는 해당 버튼에 클릭 이벤트 연결
	btn.addEventListener('click', (e) => {
		//클릭이벤트 발생시 모든 버튼 반복돌면서 on제거해서 버튼초기화
		Array.from(btns.children).forEach((btn) => btn.classList.remove('on'));
		//클릭한 버튼만 활성화
		e.target.classList.add('on');

		//클릭한 버튼의 순번위치값으로 panel좌우 이동
		new Anime(panel, { left: -100 * idx + '%' });
	});
});
