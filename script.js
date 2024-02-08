const answer = document.querySelector('.resp1');

const answer2 = document.querySelector('.resp2');

const answer3 = document.querySelector('.resp3');

const answer4 = document.querySelector('.resp4');

const button = document.querySelector('.botãoclic1')

const button2 = document.querySelector('.botãoclic2')

const button3 = document.querySelector('.botãoclic3')

const button4 = document.querySelector('.botãoclic4')

const quest1 = document.querySelector('.quest1');

const quest2 = document.querySelector('.quest2');

const quest3 = document.querySelector('.quest3');

const quest4 = document.querySelector('.quest4');

button.addEventListener('click', () => {
  answer.classList.toggle('active');
  button.classList.toggle('active');
  quest1.classList.toggle('active');
});

button2.addEventListener('click', () => {
  answer2.classList.toggle('active');
  button2.classList.toggle('active');
  quest2.classList.toggle('active');
});

button3.addEventListener('click', () => {
  answer3.classList.toggle('active');
  button3.classList.toggle('active');
  quest3.classList.toggle('active');
});

button4.addEventListener('click', () => {
  answer4.classList.toggle('active');
  button4.classList.toggle('active');
  quest4.classList.toggle('active');
});


