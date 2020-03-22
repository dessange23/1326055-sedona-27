const searchBtn = document.querySelector('.sedona-search');
const searchForm = document.querySelector('.search-form-container');
const inputIn = document.querySelector('.input-1');
const inputOut = document.querySelector('.input-2');
const submitBtn = document.querySelector('.found-sedona-hotels');
const inputAdult = document.querySelector('.adult');
const inputChild = document.querySelector('.child');

searchBtn.addEventListener('click', function slideDown() {
	searchForm.classList.remove('shake');	
	searchForm.classList.toggle('hidden');
	searchForm.classList.add('slide-down');
});

submitBtn.addEventListener('click', function shake(e)  {
   if (inputIn.value === '' || inputOut.value === '' || (inputAdult.value === '' && inputChild.value === '')) {
	  e.preventDefault();
	  searchForm.classList.remove('shake');
	  searchForm.offsetWidth = searchForm.offsetWidth;
	  searchForm.classList.remove('slide-down');
	  searchForm.classList.add('shake');
   }
});