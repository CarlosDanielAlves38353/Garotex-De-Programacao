var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 2
    },
    1560: {
      slidesPerView: 3
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.querySelector(".card-container");
  const cards = document.querySelectorAll(".card");
  let currentIndex = 0;

  function showCard(index) {
    cards[currentIndex].classList.remove("visible");
    cards[currentIndex].classList.add("hidden-left");

    currentIndex = (index + cards.length) % cards.length;

    cards[currentIndex].classList.remove("hidden-left");
    cards[currentIndex].classList.add("visible");
  }

  showCard(currentIndex);

  cardContainer.addEventListener("click", function (event) {
    if (!event.target.closest(".card")) {
      if (event.clientX < window.innerWidth / 2) {
        showCard(currentIndex - 1 < 0 ? cards.length - 1 : currentIndex - 1);
      } else {
        showCard((currentIndex + 1) % cards.length);
      }
    }
  });
});