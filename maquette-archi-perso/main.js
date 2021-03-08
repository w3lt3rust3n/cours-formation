$(document).ready(function () {
  console.log(document);
  tabImage = Array(
    "img/chat_1.jpg",
    "img/chat_2.jpg",
    "img/chat_3.jpg",
    "img/chat_4.jpg",
    "img/chat_5.jpg"
  );

  let i = 0;

  function diapo() {
    $(".img-cards").fadeOut(3000, function () {
      $(this).attr("src", tabImage[i]);
      console.log(tabImage[i]);
      $(this).fadeIn(3000, function () {
        diapo();
        i++;
        if (i === tabImage.length) {
          i = 0;
        }
      });
    });
  }

  diapo();

  $("figure>img")
    .mouseenter(function () {
      $(this).animate(
        {
          width: "+=5%",
          height: "+=5%",
        },
        300
      );
    })
    .mouseleave(function () {
      $(this).animate(
        {
          width: "-=5%",
          height: "-=5%",
        },
        300
      );
    });
});
