
const icons = document.querySelectorAll('.icon');
const menuCompleto = document.getElementById('menuCompleto');


icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
    menuCompleto.classList.toggle("active");
    
    
  });
});



menuCompleto.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    menuCompleto.classList.toggle("active");
  })
})

