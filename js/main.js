const button = document.getElementById('button');
const popup = document.getElementById('popup');

button.addEventListener('click', function(change) {
  if (popup.style.display === 'none' || popup.style.display === '') {
    popup.style.display = 'block';
  } else {
    popup.style.display = 'none';
  }
});