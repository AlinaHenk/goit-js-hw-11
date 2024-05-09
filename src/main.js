
const inputForm = document.querySelector('input[name="search"]');

const form = document.querySelector('.form-image-search');
form.addEventListener("submit", performSearch);
const key = '43769783-4ebd08048bd6758fdf84d5c5e'; 

function performSearch(event) {
    event.preventDefault();
    fetch(`<https://pixabay.com/api?key=43769783-4ebd08048bd6758fdf84d5c5e&q=${inputForm.value}>`, {
  headers: {
            Host: 'pixabay.com'
 },
}).then(response => {
  console.log('trash',response);
});

};

