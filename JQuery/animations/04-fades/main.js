$(document).ready(function () {
    function loop() {
        $('.box1').fadeIn(3000, function() {loop2()});
        
    }
    function loop2() {
        $('.box1').fadeOut(3000, function() {loop()});
        
    }
    loop();
    // setInterval(function () {
    //     $('.box1').fadeIn(3000, function () {
    //         $('.box2').fadeOut(3000, function(){
    //             $('.box1').fadeIn();
    //             console.log("hello");
    //         }
    //     )});
    // }, 4000);
});

// function() {
//     $('.box3').fadeIn(12000, function() {
//         $('box4').fadeOut(3000, "0.3");   

// setInterval(function () {
//     $('.box1').fadeIn(3000, function() {
//         $('.box2').fadeOut(3000, function () {
//             $('.box1').fadeIn(3000)
//         })});
// }, 3000);