const navLinks = document.querySelectorAll('.navlinks');


function handleActiveLink() {
  navLinks.forEach(link => link.classList.remove('active')); 
  this.classList.add('active'); 
}


navLinks.forEach(link => {
  link.addEventListener('click', handleActiveLink);
});


navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); 
    const href = this.getAttribute('href'); 

    if (href.startsWith('#')) { 
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: 'smooth' }); 
    }
  });
});


const menuIcon = document.querySelector('.fa-bars');
const navList = document.getElementById('navlist');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('show'); 
  menuIcon.classList.toggle('fa-times'); 
});


navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('show'); 
    menuIcon.classList.remove('fa-times'); 
  });
});

