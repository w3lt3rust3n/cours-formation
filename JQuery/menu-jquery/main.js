$(document).ready(function() {
    $("p").click(function() {
        $(this).toggleClass('fontSize');
    });

    $('.toggleBtn').click(function() {
        $('.nav').toggleClass('navOuverte');
    })
    let p = 0;
    console.log(p);

    function test(arg) {
        let val = arg;
        console.log("arg: " + arg);
        return val;
    }

    console.log("test: " + test("Hello World"));
});

