        // Area of Triangle
        function triangle() {
            let base = Number(document.getElementById("triangleBase").value);
            let height = Number(document.getElementById("triangleHeight").value);

             console.log(0.5 * base * height);
        }


        // Area of Square
        function square() {
            let side = Number(document.getElementById("squareSide").value);

            console.log(side * side);

        }


        // Area of Circle
        function circle() {
            let radius = Number(document.getElementById("circleRadius").value);

            console.log(Math.PI * radius * radius);
        }


        // Area of Quadrilateral
        function quadrilateral() {
            let length = Number(document.getElementById("quadLength").value);
            let width = Number(document.getElementById("quadWidth").value);

            console.log(length * width);
        }


        // Area of Rhombus
        function rhombus() {
            let d1 = Number(document.getElementById("diagonal1").value);
            let d2 = Number(document.getElementById("diagonal2").value);

            console.log(0.5 * d1 * d2);
        }


        // Area of Trapezium
        function trapezium() {
            let a = Number(document.getElementById("trapA").value);
            let b = Number(document.getElementById("trapB").value);
            let height = Number(document.getElementById("trapHeight").value);

            console.log(0.5 * (a + b) * height);
        }


        // Area of Parallelogram
        function parallelogram() {
            let base = Number(document.getElementById("paraBase").value);
            let height = Number(document.getElementById("paraHeight").value);

            console.log(base * height);
        }


        // BMI
        function bmi() {
            let weight = Number(document.getElementById("weight").value);
            let height = Number(document.getElementById("height").value);

            console.log(weight / (height * height));
        }