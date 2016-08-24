$(document).ready(function() {

    var num = parseInt(prompt('enter a number for fizzbuzz!'));

    if (isNaN(num)) {
        num = parseInt(prompt("NaN"));
        fizzbuzz(num);

    } else if (num % 1 == 0) {
        Math.round(num);
        fizzbuzz(num);
    } else {

        num = parseInt(prompt("no negetive number allowed"));
        fizzbuzz(num);
    }
    //     else {
    //     	prompt("Enter Number");
    //     fizzbuzz(num);
    // }
});

function fizzbuzz(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            $('body').append("fizzbuzz" + "<br />");
        } else if (i % 5 === 0) {
            $('body').append("buzz" + "<br />");
        } else if (i % 3 === 0) {
            $('body').append("fizz" + "<br />");
        } else {
            $('body').append(i + "<br />");
        }
    }
}
