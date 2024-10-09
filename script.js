//NAVBAR HAMBURGER
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});


//HEART LIKE IN THE OVERLAY
/*const heart = document.getElementById('heart');

heart.addEventListener('click', function () {
  heart.classList.toggle('liked');
  const icon = heart.querySelector('i');
  if (heart.classList.contains('liked')) {
    icon.classList.remove('far'); // Remove empty heart class
    icon.classList.add('fas'); // Add filled heart class
  } else {
    icon.classList.remove('fas'); // Remove filled heart class
    icon.classList.add('far'); // Add empty heart class
  }
});

*/




const hearts = document.querySelectorAll('.heart');



hearts.forEach(heart => {
    heart.addEventListener('click', function () {
        heart.classList.toggle('liked');
        const icon = heart.querySelector('i');
        if (heart.classList.contains('liked')) {
            icon.classList.remove('far'); // Remove empty heart class
            icon.classList.add('fas'); // Add filled heart class
        } else {
            icon.classList.remove('fas'); // Remove filled heart class
            icon.classList.add('far'); // Add empty heart class
        }
    });
});