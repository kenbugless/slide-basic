const main = document.querySelector('main');
const panel = main.querySelector('.panel');
const btns = main.querySelectorAll('span');
const toggleBtn = main.querySelector('.toggleBtn');
const speed = 500;
let evtBlock = false;
let timer = null;

init(panel.children.length);
bindingEvent(btns);
//로딩시 setInterval로 move 함수 2초 간격으로 반복 호출
timer = setInterval(() => move(btns[1].className), interval);
move(btns[1].className);

function init(len) {
	panel.style.width = 100 * len + '%';
	Array.from(panel.children).forEach((el) => (el.style.width = 100 / len + '%'));

	panel.prepend(panel.lastElementChild);
}

function bindingEvent(arr) {
	arr.forEach((btn) =>
		btn.addEventListener('click', () => {
			if (evtBlock) return;
			//좌우버튼 클릭 시 무조건 롤링정지하고 stop 클래스 추가
			clearInterval(timer);
			toggleBtn.classList.add('stop');

			move(btn.className);
		})
	);
	//토글 버튼 클릭 시;
	toggleBtn.addEventListener('click', (e) => {
		//클릭한 버튼의 stop 클래스 유무 확인 후
		//stop 클래스가 있으면(롤링이 중지된 상태 )
		if (e.currentTarget.classList.contains('stop')) {
			//자동 롤링을 실행하고 stop 클래스 제거
			timer = setInterval(() => move(btns[1] / clasName), interval);
			e.target.classList.remove('stop');
			//stop 클래스가 없으면(롤링이 되고 있는 상태)
		} else {
			//자동롤링을 중지하고 stop 클래스 추가
			clearInterval(timer);
			e.target.classList.add('stop');
		}
	});
}

function move(direction) {
	evtBlock = true;
	new Anime(
		panel,
		{ left: direction === btns[0].className ? '0%' : '-200%' },
		{
			duration: speed,
			callback: () => {
				direction === btns[0].className ? panel.prepend(panel.lastElementChild) : panel.append(panel.firstElementChild);
				panel.style.left = '-100%';
				evtBlock = false;
			},
		}
	);
}
