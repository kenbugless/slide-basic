const pics = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const main = document.querySelector('main');
//const [panel, btns] = main.querySelectorAll('ul');
const speed = 3000;
let evtBlock = false;

createDOM(main, pics);
//console.log(Array.from(btns.children));

/*
Array.from(btns.children).forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		if (e.target.classList.contains('on') || evtBlock) return;
		activation(Array.from(btns.children), idx);
		movePanel(panel, idx);
	});
});
*/

function createDOM(targetEl, arr) {
	let tags = '';
	const ul = document.createElement('ul');
	ul.classList.add('panel');
	arr.forEach((pic, idx) => {
		tags += `<li style='background-image:url(img/${pic})'></li>`;
	});
	ul.innerHTML = tags;
	targetEl.append(ul);
}

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
