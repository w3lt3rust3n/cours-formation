$(document).ready(function () {
  console.log("Hellow WOOOOOOORLD");

  let htmlTagTab = [".li-content-1",
".li-content-2",
".li-content-3",
".li-content-4",
".li-content-5",
".li-content-6",
".li-content-7"
];

  for(let i = 0; i < 7; i++) {
    console.log("tag -> " + htmlTagTab[i]);
    $(htmlTagTab[i]).toggle();
  }
  // Ce code peut être optimisé en utilisant une boucle for() à venir
  $('.html-1 > .less').click(function () {
    console.log("YES");
    $('.li-content-1').toggle();
  });

  $('.html-2 > .less').click(function () {
    console.log("YES");
    $('.li-content-2').toggle();
  });

  $('.html-3 > .less').click(function () {
    console.log("YES");
    $('.li-content-3').toggle();
  });

  $('.html-4 > .less').click(function () {
    console.log("YES");
    $('.li-content-4').toggle();
  });

  $('.html-5 > .less').click(function () {
    console.log("YES");
    $('.li-content-5').toggle();
  });

  $('.html-6 > .less').click(function () {
    console.log("YES");
    $('.li-content-6').toggle();
  });

  $('.html-7 > .less').click(function () {
    console.log("YES");
    $('.li-content-7').toggle();
  });

  /*
  $('.less').click(function () {
    for (let i = 0; i < ls.length; i++) {
      console.log(ls[i]);
      if (ls[i].clicked == true) {
        console.log("yes");
        console.log("clicked ? -> " + ls[i].clicked);
        $(ls[i]).toggle();
      } else {
        console.log("no");
        console.log("clicked ? -> " + ls[i].clicked);
      }
    }*/

  // $('.less').click( function() {
  // console.log("Must hide because of click");
  //  $('.li-content').toggle();
  //  });
});

