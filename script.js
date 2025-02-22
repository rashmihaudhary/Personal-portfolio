// Open and close the modal (card)
const openCard = document.getElementById('openCard');
const aboutCard = document.getElementById('aboutCard');
const closeBtn = document.querySelector('.close-btn');

openCard.addEventListener('click', () => {
  aboutCard.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  aboutCard.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === aboutCard) {
    aboutCard.style.display = 'none';
  }
});
