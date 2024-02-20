




const menuBurgerBt = document.querySelector('.menu-btn');
const menuList = document.querySelector('.header__nav');
const wrapper = document.querySelector('body');

menuList
menuBurgerBt.addEventListener('click', ()=>{
	menuList.classList.toggle('active');

	
	menuBurgerBt.classList.toggle('active');
	wrapper.classList.toggle('scroll')
	
	
})


