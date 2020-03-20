const searchBtn = document.querySelector('.sedona-search');
const searchForm = document.querySelector('.search-form-container');
const inputIn = document.querySelector('.input-1');
const inputOut = document.querySelector('.input-2');
const submitBtn = document.querySelector('.found-sedona-hotels');
const inputAdult = document.querySelector('.adult');
const inputChild = document.querySelector('.child');

searchBtn.addEventListener('click', () => {
	searchForm.classList.toggle('hidden');
});

submitBtn.addEventListener('click', (e) =>  {	
   if (inputIn.value === '' || inputOut.value === '' || (inputAdult.value === '' && inputChild.value === '')) {
	  e.preventDefault();
	  searchForm.style.animation = 'shake 1s ease';
	  searchForm.style.animationFillMode = 'forwards';
	  setTimeout(() => {
		searchForm.style.animation = '';
		searchForm.style.animationFillMode = '';
	   }, 1000);
   }
});