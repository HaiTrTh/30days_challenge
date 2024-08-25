document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.buttons button');
  const images = document.querySelectorAll('.container img');
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const category = this.getAttribute('data-category');

          images.forEach(image => {
              if (category === 'all' || image.getAttribute('data-category') === category) {
                  image.style.display = 'block'; // Show images of the selected category
              } else {
                  image.style.display = 'none'; // Hide images not in the selected category
              }
          });
      });
  });
});





