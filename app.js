const toggler = document.querySelector(".toggler");
const sidebar = document.querySelector(".sidebar");
const navLinks = document.querySelectorAll(".nav-link");

function navToggle() {
  // if (!sidebar.classList.contains("active")) {
  //   sidebar.classList.add("active");
  //   gsap.to(sidebar, 1, { clipPath: "circle(2500px at 10% -10%" });
  //   console.log(!sidebar.classList.contains("active"));
  // } else if (sidebar.classList.contains("active")) {
  //   sidebar.classList.remove("active");
  //   gsap.to(sidebar, 1, { clipPath: "circle(50px at 100% -10%)" });
  //   console.log(!sidebar.classList.contains("active"));
  // }
  sidebar.classList.toggle("active");
}
toggler.addEventListener("click", navToggle);

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});

// Home animation
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".slider1", { y: "-100%", duration: 0.2 });
tl.to(".slider2", { y: "-100%", duration: 0.3 });
tl.to(".slider3", { y: "-100%", duration: 0.4 });
tl.to(".slider4", { y: "-100%", duration: 0.5 });
tl.fromTo(".nav", { opacity: 0 }, { opacity: 1 });
tl.fromTo(body, { opacity: 0 }, { opacity: 1, duration: 0.25 });

//Profile und disco Scroll

//Page Transitioin
