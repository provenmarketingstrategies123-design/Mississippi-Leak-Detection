// Basic UI: mobile nav toggle, year auto-fill, simple client-side form validation
document.addEventListener('DOMContentLoaded', function(){
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if(navToggle){
    navToggle.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if(mainNav.style.display === 'block'){
        mainNav.style.display = '';
      } else {
        mainNav.style.display = 'block';
      }
    });
  }

  var year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      var name = form.querySelector('[name="name"]').value.trim();
      var contact = form.querySelector('[name="contact"]').value.trim();
      if(!name || !contact){
        e.preventDefault();
        alert('Please provide your name and contact information so we can reach you.');
      }
    });
  }
});
