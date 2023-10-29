const main = document.querySelector('main');
const panel = main.querySelector('.panel');
const [prev, next] = main.querySelectorAll('span');

prev.addEventListener('click', () => {
	new Anime(
		panel,
		{ left: '0%' },
		{
			duration: 500,
			callback: () => {
				panel.prepend(panel.lastElementChild);
				panel.style.left = '-100%';
			},
		}
	);
});

next.addEventListener('click', () => {
	new Anime(
		panel,
		{ left: '-200%' },
		{
			duration: 500,
			callback: () => {
				panel.append(panel.firstElementChild);
				panel.style.left = '-100%';
			},
		}
	);
});

//순환 슬라이더 로직 (왼쪽이동)
//1. 일단 패널을 왼쪽이동시킴
//2. callback을 이용해서 모션이 끝난시점에 순간적으로 첫번째 자식슬라이드를 맨 뒤로 이동
