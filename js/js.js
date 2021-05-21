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
const mycontrol = document.getElementById('#control');
const ball = document.getElementById('ball');

// console.log(1 == 2 ? 'yes' : 'no');

function hideControl(params) {

    mycontrol.classList.toggle('__hidden');
}

button_ok.addEventListener('click', hideControl);
ball.addEventListener('mouseover', () => {
    ball.classList.toggle('change_ball_shadow');
})



// document.addEventListener('DOMContentLoaded', () => {
//     console.log('ok');
// })

// button_ok.addEventListener('mousemove', (ev) => {
//     console.log(`x: ${ev.pageX} y: ${ev.pageY}`);
// })

mycontrol.addEventListener('mousemove', (ev) => {
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