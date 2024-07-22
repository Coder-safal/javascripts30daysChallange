
const heading = document.getElementById('heading');

heading.innerHTML = "This is change heading!";


const text = document.querySelector('.text');

text.style.backgroundColor = "red";
text.style.fontSize = "90px";

let unorderlist = document.querySelector('.unorderlist');

let li = document.createElement('li');
li.textContent = "Banana";

unorderlist.appendChild(li);

let div = document.createElement('div');


div.textContent = "This is div tag which is append with body tag!!";

document.querySelector('body').appendChild(div);

document.querySelector('body').style.backgroundColor = "orange";


heading.remove();



// unorderlist.removeChild(unorderlist.firstChild);
let lastChild = unorderlist.lastChild;
lastChild.remove();

let flag = true;

let textbtn = document.querySelector('.textbtn');
textbtn.style.backgroundColor = "blue";

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    if (flag) {

        textbtn.innerHTML = "Are you mad Aadesh is here for time waste!!";
        textbtn.style.backgroundColor = "blue";
        flag = !flag;
        return;
    }
    textbtn.innerHTML = "This is text after click button!!";
    textbtn.style.backgroundColor = "red";
    textbtn.style.color = "orange";
    flag = !flag;

});

textbtn.addEventListener('mouseover', () => {
    textbtn.style.backgroundColor = "black";
})


let btn2 = document.querySelector('#btn1');
let status = true;
btn2.addEventListener('click', () => {
    let hello = document.querySelector('.hello');
    if (status1) {
        hello.classList.add('hello1');
   
        status1 = !status1;
    }
    else {
        status1 = !status1;
        hello.classList.remove('hello1');
    }
    hello1.style.backgroundColor = "pink";
});




