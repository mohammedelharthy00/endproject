 const header = document.querySelector("header");
      const hamburgerBtn = document.querySelector("#hamburger-btn");
      const closeMenuBtn = document.querySelector("#close-menu-btn");
      hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));
      closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());
     //  #######################
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });
    AOS.init({
  once: true, 
});

document.addEventListener('aos:in', ({ detail }) => {
  swiper.update();
});
// ###################
 document.getElementById("addBtn").addEventListener("click", function(e) {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart',
      text: 'The item has been added to your cart!',
      showConfirmButton: false,
      timer: 1500
    });
  });

  // Remove with confirmation
  document.getElementById("removeBtn").addEventListener("click", function(e) {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to remove this item?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Removed!',
          'The item has been removed from your cart.',
          'success'
        )
      }
    })
  });