// alert('Hello Dimas!');
// let int = 125;
// console.log(int);

// function printConsole(params) {
//     console.log(`Привет, ${params.weight}`);
// }

// let MyObject = {
//     name: "Дима",
//     age: 45,
//     weight: 112
// }

// printConsole(MyObject);

// let foo = function(arr) {
//     console.log(arr);
//     console.log(typeof(arr));

// };
// foo([1, 2, 3]);

// let foo2 = (arr) => {
//     console.log(arr.unshift());
// };
// foo2([1, 2, 3]);

// const head = document.getElementsByTagName('h1');
// console.log(head);

const button_ok = document.getElementById('button__ok');
console.log(button_ok);


function changeH1Color(event) {
    const H1_1 = document.getElementsByClassName('h1_1');
    // console.log(H1_1);


    H1_1[0].textContent = "Привет, это начало курса по JS!";

}

// button_ok.onclick = changeH1Color;
button_ok.addEventListener('click', changeH1Color);

document.addEventListener('DOMContentLoaded', () => {
    console.log('ok');
})

button_ok.addEventListener('mousemove', (ev) => {
    console.log(`x: ${ev.pageX} y: ${ev.pageY}`);
})

const li__area = document.querySelector('ul');
const li_elements = li__area.querySelectorAll('li');

for (let i = 0; i < li_elements.length; i++) {
    li_elements[i].addEventListener('click', () => {
        // console.log(li_elements[i]);
        li_elements[i].classList.toggle('through');
    })
}


// li_elements.forEach(element => {

//     console.log(element);
//     element.addEventListener('click', () => {
//         element.classlist.toggle('.through');
//     })
// });