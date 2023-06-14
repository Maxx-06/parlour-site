const Click = document.querySelector("#click");
const Active = document.querySelectorAll(".active");
const Service = document.querySelector(".ser");
const Feedback = document.querySelector(".feed");
const About = document.querySelector(".ab");


Click.addEventListener("change", function () {
  if (this.checked == true) {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
      (window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      });

    console.log("Checkbox is checked..");
  } else {
    window.onscroll = function () {};
    console.log("Checkbox is not checked..");
  }
});

window.onload = function () {
  window.addEventListener("load", check, false);
  Click.checked = false;
};

/*  */
Service.addEventListener("click", function () {
  Click.checked = false;

  window.onscroll = function () {};
});

/*  */ 
Feedback.addEventListener("click", function () {
  Click.checked = false;

  window.onscroll = function () {};
});

/*  */
About.addEventListener("click", function () {
  Click.checked = false;

  window.onscroll = function () {};
});
