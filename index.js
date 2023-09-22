gsap.from(".logo", { opacity: 0, duration: 1, delay: 2, y: 15 });
gsap.from(".navigation .header", {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 30,
  stagger: 0.2,
});

gsap.from(".content .textBox h2", {
  opacity: 0,
  duration: 1,
  delay: 1.6,
  y: 30,
});
gsap.from(".content .textBox p", {
  opacity: 0,
  duration: 1,
  delay: 1.8,
  y: 30,
});
gsap.from(".content .textBox a", {
  opacity: 0,
  duration: 1,
  delay: 2.1,
  y: 30,
});
gsap.from(".imgBox", { opacity: 0, duration: 1, delay: 2.6, y: 30 });
gsap.from(".thumb", { opacity: 0, duration: 1, delay: 2.6, y: 30 });
gsap.from(".sci", { opacity: 0, duration: 1, delay: 2.6, y: 30 });

document.addEventListener("mousemove", move);
function move(e) {
  this.querySelectorAll(".move").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 120;
    const y = (window.innerWidth - e.pageY * speed) / 120;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
/* Slider */
function imgSlider(anything) {
  document.querySelector(".lipstick").src = anything;
}

/* Cambiar color */
function changeBgColor(color) {
  const sec = document.querySelector(".sec");
  sec.style.background = color;
}

/* Menu Responsive */

function menuToggle() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const navigation = document.querySelector(".navigation");
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
}
const navigationItems = document.querySelectorAll(".header");

navigationItems.forEach((item) => {
  item.addEventListener("mouseover", function () {
    this.classList.add("hovered");
  });

  item.addEventListener("mouseout", function () {
    this.classList.remove("hovered");
  });
});

document.querySelectorAll(".fab").forEach((item) => {
  item.addEventListener("mouseover", function () {
    this.classList.add("hovered2");
  });

  item.addEventListener("mouseout", function () {
    this.classList.remove("hovered2");
  });
});

const viewAllProducts = document.getElementById("viewAllProducts");

viewAllProducts.addEventListener("mouseover", function () {
  viewAllProducts.classList.add("hoveredd");
});

viewAllProducts.addEventListener("mouseout", function () {
  viewAllProducts.classList.remove("hoveredd");
});
