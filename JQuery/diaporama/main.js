$(document).ready(function () {
  tabImage = Array(
    "img/house2.jpg",
    "img/house3.jpg",
    "img/house4.jpg",
    "img/house5.jpg"
  ); // Equivaut à tabImage=[];

  console.log(tabImage);
  let i = 0;

  function diaporama() {
    
    $(".diaporama img").fadeOut(3000, function () {
        $(this).attr("src", tabImage[i]);
        console.log(tabImage[i]);
        $(this).fadeIn(3000, function () {
            diaporama();
            i++;
            if(i === tabImage.length) {
                i = 0;
            } else {
                
            }
        });
    });
  }

  diaporama();
});
