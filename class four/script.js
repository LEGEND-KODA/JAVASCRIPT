for (let i = 0; i <= 100; i++) {
    console.log(i);

    if (i % 2 == 1) {
        console.log(i + " is odd");
        document.getElementById("output").innerHTML += i + " is odd" + "<br>";
    }
    else {
        console.log(i + " is even");
        document.getElementById("output").innerHTML += i + " is even" + "<br>";
    }
}


for (let i = 0; i <= 100; i++) {
    console.log(i);

    if (i !== "") {
        if ( i % 3 == 0 && i % 5 == 0){
            console.log(i + " is FizzBuzz");
            document.getElementById("fizzResult").innerHTML += i + " is FizzBuzz" + "<br>";
        }
        else if ( i % 3 == 0){
        console.log(i + " is Fizz");
        document.getElementById("fizzResult").innerHTML += i + " is Fizz" + "<br>";
        }
        else if ( i % 5 == 0){
            console.log(i + " is Buzz");
            document.getElementById("fizzResult").innerHTML += i + " is Buzz" + "<br>";
        }
        else {
            console.log(i + " is neither Fizz nor Buzz");
            document.getElementById("fizzResult").innerHTML += i + " is neither Fizz nor Buzz" + "<br>";
        }
    }
}


//following your increment, start counting when i = 0, 
// then only keep counting until i, is no longer less than 5