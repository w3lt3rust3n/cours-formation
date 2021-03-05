$(document).ready(function () {
    
    $(document).keydown(function (e) { 
        let code = e.keyCode;
        console.log(e.which);
        
        if(code === 38) { // 38 -> Key UP.
            $('.circle').animate({top: "-=15"}, 5, function () {}); // la valeur est implicitement exprimée en pixel.
        } else if(code === 37) { // 37 -> Key LEFT
            $('.circle').animate({left: "-=15"}, 5, function () {});
        } else if(code === 40) { // 40 -> Key DOWN
            $('.circle').animate({top: "+=15"}, 5, function () {});
        } else if(code === 39) { // 39 -> Key RIGHT
            $('.circle').animate({left: "+=15"}, 5, function () {});
        } else {
            console.log("Valeur de la key : " + e.which);
        }
    });
});

