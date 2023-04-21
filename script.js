// import { gsap } from "gsap";

//===============Mouse Circle=================//
gsap.set(".mouse-circle", {xPercent: -50, yPercent: -50});

let xTo = gsap.quickTo(".mouse-circle", "x", {duration: 0.6, ease: "power3"}),
    yTo = gsap.quickTo(".mouse-circle", "y", {duration: 0.6, ease: "power3"});

window.addEventListener("mousemove", e => {
  // xTo(e.pageX);
  // yTo(e.pageY);
  xTo(e.clientX);
  yTo(e.clientY);
});

const box = document.querySelector('.magnetic');

const enlargeCircle = () => {
  gsap.to(circle, {duration: 0.3, scale: 2});
}

const shrinkCircle = () => {
  gsap.to(circle, {duration: 0.3, scale: 1});
}

const moveCircle = (e) => {
  gsap.to(circle, {duration: 0.3, x: e.clientX, y: e.clientY});
  if (e.target === box) {
    enlargeCircle();
  } else {
    shrinkCircle();
  }
}

box.addEventListener('mouseenter', enlargeCircle);
box.addEventListener('mouseleave', shrinkCircle);

// gsap.set(".mouse-circle", {xPercent: -50, yPercent: -50, scale: 1});

// let xTo = gsap.quickTo(".mouse-circle", "x", {duration: 0.6, ease: "power3"}),
//     yTo = gsap.quickTo(".mouse-circle", "y", {duration: 0.6, ease: "power3"}),
//     scaleTo = gsap.quickTo(".mouse-circle", {scale: 2, duration: 0.2, ease: "power3.inOut"});

// const elements = document.querySelectorAll('.magnetic');
// elements.forEach((el) => {
//   el.addEventListener("mouseover", (e) => {
//     gsap.to(".mouse-circle", {scale: 3, duration: 0.3, ease: "power3.inOut"});
//   });
//   el.addEventListener("mouseout", (e) => {
//     gsap.to(".mouse-circle", {scale: 2, duration: 0.3, ease: "power3.inOut"});
//   });
//   el.addEventListener("mousemove", (e) => {
//     let rect = e.target.getBoundingClientRect();
//     let elementX = rect.left + rect.width / 2;
//     let elementY = rect.top + rect.height / 2;
//     let distanceX = elementX - e.clientX;
//     let distanceY = elementY - e.clientY;
//     let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
//     if (distance < 100) {
//       xTo(elementX);
//       yTo(elementY);
//       scaleTo.play();
//     }
//   });
// });

// window.addEventListener("mousemove", e => {
//   let rect = e.target.getBoundingClientRect();
//   let elementX = rect.left + rect.width / 2;
//   let elementY = rect.top + rect.height / 2;
//   let distanceX = elementX - e.clientX;
//   let distanceY = elementY - e.clientY;
//   let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
//   if (distance >= 100) {
//     xTo(e.clientX);
//     yTo(e.clientY);
//     scaleTo.reverse();
//   }
// });

//================ScrollReveal=================//
const sr = ScrollReveal({
  duration: 2000, //动画时长
  distance: '50px', //移动距离
  easing: 'ease-in-out', //缓动函数
  origin: 'bottom', //元素起始位置
});

sr.reveal(".animated",{
  interval: 200,
});

//works section
const works = document.querySelectorAll(".work");
works.forEach(function (work) {
  work.style.cursor = "pointer";
});

//===========collapsible service info===================//
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
const menuButton = document.querySelector("#menu-button");
const sideMenu = document.querySelector("#side-menu");
const closeBtn = document.querySelector("#close-btn");

menuButton.addEventListener("click", () => {
  sideMenu.classList.toggle("open");
  mainContent.classList.toggle("open");
});

closeBtn.addEventListener("click", function () {
  sideMenu.classList.remove("open");
});
