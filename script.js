const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

let prev = document.getElementById("prev");
let next = document.getElementById("next");

let first = 0;

let func = function () {
  if (first === 0) {
    document.body.style =
      "background: linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)";
  } else if (first === 1) {
    document.body.style =
      "background: linear-gradient(105.54deg, #ADB0B0 -2.93%, #E1E1E1 72.14%)";
  } else if (first === 2) {
    document.body.style =
      "background: linear-gradient(105.54deg, #30A357 -2.93%, #75E39A 72.14%)";
  } else if (first === 3) {
    document.body.style =
      "background: linear-gradient(105.54deg, #F24F4F -2.93%, #FFA895 72.14%)";
  }
};

next.addEventListener("click", function () {
  if (first === 3) {
    first = 0;
  } else {
    first++;
  }

  console.log(first);

  func();
});

prev.addEventListener("click", function () {
  if (first === 0) {
    first = 3;
  } else {
    first--;
  }
  console.log(first);
  func();
});
