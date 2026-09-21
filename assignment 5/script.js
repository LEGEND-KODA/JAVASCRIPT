let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");
let output3 = document.getElementById("output3");
let output4 = document.getElementById("output4");
let output5 = document.getElementById("output5");
let output6 = document.getElementById("output6");

//Exercise 1
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 3; j++) {
        output1.innerHTML += `
            ${j}
        `
    }

    output1.innerHTML += `<br>`
}


//Exercise 2
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 5; j++) {
        output2.innerHTML += "• "
    }

    output2.innerHTML += `<br>`
}


//Exercise 3
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {

        output3.innerHTML += "• "

    }

    output3.innerHTML += `<br>`
}

//Exercise 4
let foods = [
    ["Rice", "Beans", "Yam"],
    ["Amala", "Eba", "Fufu"],
    ["Plantain", "Spagetti", "Potato"]
]

for (let i = 0; i < foods.length; i++) {
    for (let j = 0; j < foods[i].length; j++) {
        output4.innerHTML += `<p>${foods[i][j]}</p>`
    }
}

//Exercise 5
let numbers = [
    [70, 80, 90],
    [60, 75, 85],
    [90, 95, 100]
]

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
        output5.innerHTML += `<p>${numbers[i][j]}</p>`
    }
}


//Exercise 6

for (let i = 1; i <= 10; i++) {
    output6.innerHTML += `<tr id="row${i}"></tr>`;
    let row = document.getElementById(`row${i}`);
    for (let j = 1; j <= 10; j++){
        row.innerHTML += `<td>${j} x ${i} = ${j * i}</td>`
    }
}