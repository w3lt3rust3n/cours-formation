$(document).ready(function () {
  // Menu Burger
  let btn = document.querySelector(".toggleBtn");
  let nav = document.querySelector(".navigation");
  console.log(btn);
  btn.addEventListener("click", function () {
    nav.classList.toggle(".opened-nav");
  });

  // Diapo
  images = Array(
    "img/background.jpg",
    "img/chat_1.jpg" //juste histoire de mettre des photos
  );

  console.log(images);
  let i = 0;

  function diaporama() {
    $(".diaporama img").fadeOut(3000, function () {
      $(this).attr("src", images[i]);
      console.log(images[i]);
      $(this).fadeIn(3000, function () {
        diaporama();
        i++;
        if (i === images.length) {
          i = 0;
        } else {
        }
      });
    });
  }

  diaporama();
});
