let toggle = document.querySelector("#toogle_bar");
let cross = document.querySelector("#cross_bar ");
let inputname = document.querySelector("#name");
let inputemail = document.querySelector("#Email");
let inputtextarea = document.querySelector("#text_Area");
let container_zindex = document.querySelector(".container_zindex");
let logo = document.querySelector(".logo");
let container = document.querySelector("#container");
let submit = document.querySelector("#btn_submit");
let close = document.getElementsByTagName("li");
let circle = document.querySelector(".circle");

container_zindex.addEventListener("mousemove", (e) => {
  circle.style.left = e.x + "px";
  circle.style.top = e.y + "px";
});

submit.addEventListener("click", () => {
  let div = document.createElement("div");
  div.classList.add("input_result");
  document.querySelector(".set_resultdiv").appendChild(div);
  if (inputname.value && inputemail.value && inputtextarea.value) {
    div.innerHTML = `
        <img src="./tick.png" alt="" width="100px">
        <h3>Saved Successfully</h3>`;
    console.log(
      `
            Name: ${inputname.value}
            Email: ${inputemail.value}
            Message: ${inputtextarea.value}`
    );
  } else if (inputemail.value && inputtextarea.value) {
    div.innerHTML = `
        <img src="./person.png" alt="" width="100px">
        <h3>Enter your Name</h3>`;
  } else if (inputname.value && inputtextarea.value) {
    div.innerHTML = `
        <img src="./email.png" alt="" width="100px">
        <h3>Enter your Email</h3>`;
  } else if (inputname.value && inputemail.value) {
    div.innerHTML = `
        <img src="./message.png" alt="" width="100px">
        <h3>Enter your message</h3>`;
  } else {
    div.innerHTML = `
        <img src="./cross.png" alt="" width="100px">
        <h3>Enter Your Information</h3>`;
  }
  setInterval(() => {
    div.style.display = "none";
  }, 2000);
});



var typed = new Typed(".text_fur", {
  strings: ["Fronted Developer. ", "Graphic Designer. ", "Web Developer. "],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("header").addClass("change_header");
  } else {
    $("header").removeClass("change_header");
  }
});
toggle.addEventListener('click', () => {
  nav = document.querySelector("nav");
  nav.classList.toggle("active_header")
  toggle.style.display = "none";
  cross.style.display = "flex";

});
cross.addEventListener('click', () => {
  toggle.style.display = "flex";
  cross.style.display = "none";
  nav = document.querySelector("nav");
  nav.classList.toggle("active_header")
});

