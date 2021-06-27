for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        document.write('<br> ' + 'FizzBuzz');
    } else if (i % 3 === 0) {
        document.write("<br> " + "Fizz");
    } else if (i % 5 === 0) {
        document.write("<br> " + "Buzz");
    } else {
        document.write("<br> " + i);
    }
}


// var fizz = true;
// if (3 % 100) {
//     console.log("fizz");
// } else if (5 % 100) {
//     console.log("buzz");
// } else if (15 % 100) {
//     console.log("fizzbuzz");
// }




// for fizzbuzz in range(100):


//     if fizzbuzz % 3 == 0 and fizzbuzz % 5 == 0:
//         print("FizzBuzz")

//     elif fizzbuzz % 3 == 0:
//         print("Fizz")
//         continue
//     elif fizzbuzz % 5 == 0:
//         print("Buzz")
//         continue


//     print(fizzbuzz)