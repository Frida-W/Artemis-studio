//collapsible service info//
const coll = document.getElementsByClassName("service-collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//quote slides//
const slides = document.querySelectorAll(".quote-slide");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentSlide = 0;

next.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  showSlide();
  setDot();
});
prev.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
  setDot();
});

showSlide();
function showSlide() {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[currentSlide].style.display = "block";
}

function setDot() {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

//circle animation
var textCircle = document.getElementById("text-circle");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    textCircle.classList.add("animate");
  } else {
    textCircle.classList.remove("animate");
  }
  // console.log("window.scrollY", window.scrollY);
});

//send Email
const form = document.getElementById("my-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameInput = form.elements["name-input"].value;
  const emailAddress = form.elements["email-address"].value;
  const subject = form.elements["subject-input"].value;
  //   const selectAnOption = form.elements["select-an-option"].value;
  const messageInput = form.elements["message-input"].value;

  const templateParams = {
    to_name: "Artemis",
    from_name: nameInput,
    subject: subject,
    message: `${messageInput}, please reply me via ${emailAddress}`,
  };

  emailjs
    .send("service_lnadkjc", "template_artemis_website", templateParams)
    .then(
      function (response) {
        console.log("Success!");
      },
      function (error) {
        console.log(error);
      }
    );
});


// side menu

const menuButton = document.querySelector('#menu-button');
const sideMenu = document.querySelector('#side-menu');
const closeBtn = document.querySelector('#close-btn');

menuButton.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
  mainContent.classList.toggle('open');
});

closeBtn.addEventListener('click', function() {
  sideMenu.classList.remove('open');
});