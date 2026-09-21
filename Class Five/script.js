for (let row = 1; row <= 3; row++) {
    for (let column = 1; column <= 4; column++) {
        console.log(row,column)
        tableBody.innerHTML += `
        <tr>
            <td>${row}</td>
            <td>${column}</td>
        </tr>`;
    }
}

let tableBody2 = document.getElementById("tableBody2");
for (let crate = 1; crate <= 3; crate++) {

    for (let beer = 1; beer <= 4; beer++) {
        //code to execute
        console.log(crate, beer)
        tableBody2.innerHTML += `
        <tr>
            <td>Crate${crate}</td>
            <td>Beer${beer}</td>
        </tr>`;
    }
}