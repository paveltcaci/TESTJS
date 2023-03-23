window.onload = function() {
    document.body.style.color = "blue";
    var startDiv = document.createElement("div");
    startDiv.innerHTML = "START";
    document.body.appendChild(startDiv);
}

function calculeazaMedia() {
    var x = parseFloat(document.getElementById("x").value);
    var y = parseFloat(document.getElementById("y").value);
    var rezultat = (x + y) / 2;
    document.getElementById("rezultat").innerHTML = "Media aritmetica este: " + rezultat.toFixed(2);
}

function schimbaValori() {
    var x1 = document.getElementById("x1").value;
    var y1 = document.getElementById("y1").value;
    document.getElementById("x1").value = y1;
    document.getElementById("y1").value = x1;
}

document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("container");
    container.addEventListener("mouseover", function() {
        container.classList.add("verde");
    });
    container.addEventListener("mouseout", function() {
        container.classList.remove("verde");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var paragrafe = document.getElementsByTagName("p");
    for (var i = 0; i < paragrafe.length; i++) {
        if ((i+1) % 2 == 0) {
            paragrafe[i].classList.add("paragraf-par");
        } else {
            paragrafe[i].classList.add("paragraf-impar");
        }
    }
});

setTimeout(() => {
    const list = document.getElementById("my-list");
    for (let i = 1; i <= 10; i++) {
        const li = document.createElement("li");
        li.textContent = `Element Nr ${i}`;
        list.appendChild(li);
    }

    list.lastElementChild.style.backgroundColor = "violet";

    setTimeout(() => {
        list.remove();
        console.log("END");
    }, 20000);
}, 5000);

const numbers = [1, 2, 8, 4, 5, 7, 6, 3, 0, 9];


numbers.sort((a, b) => a - b);


const rezultatArray = document.getElementById("rezultatArray");


for (let i = 0; i < numbers.length; i++) {
    const element = document.createElement("d");
    element.textContent = numbers[i];
    rezultat.appendChild(element);
}

const btn = document.querySelector('#counter-btn');
let count = 1;

btn.addEventListener('click', () => {
    count += 2;
    btn.innerText = `Contor = ${count}`;
});

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const list3 = document.createElement('ul');
document.body.appendChild(list3);

function displayArrayElements(index) {
    if (index >= arr3.length) {
        return;
    }

    const item3 = document.createElement('li');
    item3.textContent = arr3[index];
    list3.appendChild(item3);

    setTimeout(() => {
        displayArrayElements(index + 1);
    }, 1000);
}

displayArrayElements(0);

function afiseazaDisciplina() {
    const select = document.getElementById("discipline");
    const optiuneSelectata = select.options[select.selectedIndex].text;
    document.getElementById("element").innerText = optiuneSelectata;
}
