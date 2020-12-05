feather.replace()
const menuToggler = document.querySelector('.menu-toggler input');
const navBar = document.querySelector('nav ul.nav');
menuToggler.addEventListener('click', function () {
	navBar.classList.toggle('slide');
})
// !dark mode
const dark = document.querySelector('ul.nav button');

dark.addEventListener('click', function () {
	document.body.classList.toggle('darkBody');
});

// todo warna text brand
const brand = document.querySelector('nav h3 a');
dark.addEventListener('click', function () {
	brand.classList.toggle('ligthText');
});
// todo warna judul
const judulPortfolio = document.querySelector('.jumbotron h2');
dark.addEventListener('click', function () {
	judulPortfolio.classList.toggle('ligthText');
});
//todo by dev
const nama = document.querySelector('.jumbotron h2 span.by');
dark.addEventListener('click', function () {
	nama.classList.toggle('ligthText');
});
// todo all paragraph
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
	dark.addEventListener('click', function () {
		p[i].classList.toggle('ligthText');
	});

}
// todo all h3
const h3 = document.getElementsByTagName('h3');
for (let h = 0; h < h3.length; h++) {
	dark.addEventListener('click', function () {
		h3[h].classList.toggle('ligthText');
	});

}
const tLink = document.querySelector('.welcome .myself a span');
const linkMore = document.querySelector('.feather-arrow-right-circle');
linkMore.addEventListener('mouseenter', function () {
	tLink.classList.toggle('muncul');
});

// todo attention
const close = document.getElementsByClassName('x');
for (let i = 0; i < close.length; i++) {
	close[i].addEventListener('click', function (e) {
		e.target.parentElement.parentElement.style.display = 'none';
	});

}