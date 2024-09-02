let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   header.classList.toggle('active');
   document.body.classList.toggle('active');
}

window.onscroll = () =>{
   if(window.innerWidth < 991){
      menu.classList.remove('fa-times');
      header.classList.remove('active');
      document.body.classList.remove('active');
   }

   document.querySelectorAll('section').forEach(sec =>{

      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
         document.querySelectorAll('.header .navbar a').forEach(links =>{
            links.classList.remove('active');
            document.querySelector('.header .navbar a[href*='+ id +']').classList.add('active')
         });
      };

   });

}

function sendMail(event) {
   event.preventDefault(); // prevent form submission
   let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      Phone: document.getElementById("number").value, 
      message: document.getElementById("message").value,
   }

   emailjs.send("service_fse102e", "template_57riubl", parms)
      .then(function(response) {
         alert("Email Sent!!!");
         console.log("SUCCESS!", response);
      }, function(error) {
         alert("Email failed to send. Please try again later.");
         console.log("FAILED...", error);
      });
}