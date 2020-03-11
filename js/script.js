const searchBtn = document.querySelector('.sedona-search');
const searchForm = document.querySelector('.search-form-container');

searchBtn.addEventListener('click', function addListener(e) {
	searchForm.classList.toggle('hidden');
})