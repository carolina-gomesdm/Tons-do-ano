var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const card = document.querySelectorAll('.card');

card.forEach(card => {
  card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
  });
});

form.addEventListener('submit', function (e) { 
  e.preventDefault(); })

/*----------- formulario----------------*/

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const comment = document.getElementById('comment').value;

  const formData = {
        nome: nome,
        email: email,
        comment: comment
    };


    saveFormData(formData);
});

function saveFormData(formData) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    storedFormData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedFormData));
}
