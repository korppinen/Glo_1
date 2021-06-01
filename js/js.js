'use strict';
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
const button_1 = document.getElementById('button__1');
const button_2 = document.getElementById('button__2');
const button_3 = document.getElementById('button__3');
const button_4 = document.getElementById('button__4');
const mycontrol = document.getElementById('#control');
const ball = document.getElementById('ball');

// let arr = new Array(1, 2, 'Привет', Math.PI, 1 == 2);

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
// }

// arr.forEach(element => {
//     console.log(element);
// });

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

// mycontrol.addEventListener('mousemove', (ev) => {
//     console.log(`x: ${ev.pageX} y: ${ev.pageY}`);
// })

const li__area = document.querySelector('ul');
const li_elements = li__area.querySelectorAll('li');

for (let i = 0; i < li_elements.length; i++) {
    li_elements[i].addEventListener('click', () => {
        // console.log(li_elements[i]);
        li_elements[i].classList.toggle('through');
    })
}


// функции

const my = () => {
    console.log('Привет');
}
let i = 5;
const my1 = function my3() {

    console.log('Привет1');
}

function my2(name1 = 'Дима', age = 2, married = true) {

    console.log(`Привет, ${name1}! Ты ${married ? '':'не '}женат`);
}


// замена текста по кнопке 1
let myFlag = true;
let Text1 = `Teatteriharrastaja Antti Kurvinen nousee tiede- ja kulttuuriministeriksi Saarikon tilalle: ”Draaman kaarien ymmärtämisestä on politiikassakin hyötyä”`;
let Text2 = `Kun vauva herää 14 kertaa yössä, vanhempi on valmis epätoivoisiin tekoihin – Tämän teimme toisen lapsen unen kanssa toisin, ja se auttoi`;

function showResult(event, TextFor = 'no text') {
    let i = document.getElementById('result');
    if (myFlag) {
        i.innerText = Text1;
        myFlag = false;
    } else {
        i.innerText = Text2;
        myFlag = true;
    }
}
button_1.addEventListener('click', showResult);

const showFunc = (TextToShow) => {
    let i = document.getElementById('result');
    i.innerText = TextToShow;
}

const showFunc1 = (TextToShow, index = 1) => {
    let i = document.getElementById('result');
    setTimeout(() => {
        i.innerText = TextToShow;
    }, 500 * index);

}



let arr = ['Ворона', 1, true];;
(function(...arr) {
    console.log(my2(...arr));

})()

// (() => console.log(my2(...arr)))()


// вложенные и замыкания

const car = {
        brand: 'Ford',
        model: 'Focus',
        start: function() {
            console.log(this.brand + ' gogogo');
        }
    }
    // car.start();


function makeCounter() {
    function count() {
        return count.currentCounter++;
    }
    count.currentCounter = 1;
    return count;
}

// let c1 = makeCounter();
// console.log(c1());
// console.log(c1());

//

const dog = (name) => {
    const say = `hello ${name}`;

    return () => console.log(say)

}

let a = dog('TJ_1');
let b = dog('TJ_2');

a();
b();

arr = [1, 2, 3];
arr.unshift(0);
arr.push(4);


// const test = el => el > 0;
// console.log(arr.filter(el => el < 2));
// showFunc(arr.map(el => el * 2));

// arr.forEach(element => {

//     setInterval(() => {

//     }, 2000);

// });

for (let index = 0; index < arr.length; index++) {
    showFunc1(arr[index], index);

}

for (const [index, value] of arr.entries()) {
    console.log(`Это ${index}`);
}

for (const key in car) {
    if (Object.hasOwnProperty.call(car, key)) {
        const element = car[key];
        console.log(`Это ${key} ${car[key]}`);

    }
}

const operations = [];
for (let g = 0; g < 5; g++) {
    operations.push(() => {
        console.log(g);
    })
}
for (const operation of operations) {
    operation();
}

// объекты 28.05.2021
function carObj() {
    let brand = 'Ford';
    let model = 'Focus';
    this.start = function() {
        console.log(brand + ' gogogo');
    }
};

let mycar = new carObj();
console.log(mycar.start());