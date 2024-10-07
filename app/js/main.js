const statusUser = document.querySelectorAll('.customers__status');

statusUser.forEach(el => {

  if (el.classList.contains('active')) {
    el.textContent = 'Active'
  } else {
    el.textContent = 'Inactive'
  }
});

const sidebarBtn = document.querySelector('.sidebar__btn');
const navbar = document.querySelector('.navbar');

sidebarBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});