//Global Variables 

let display = document.getElementById('input');

let result = document.getElementById('result');

const btns = document.querySelectorAll('.num');

//Function for visibling the result and update;

function visibility() {

    display.style.visibility = 'hidden';
    result.style.visibility = 'visible';
    display.innerText = result.innerText;
}

// Main Function structure and logic

for (const element of btns) {

    element.addEventListener('click', function (e) {

        display.style.visibility = 'visible';
        result.style.visibility = 'hidden';

        if (e.target.innerText != '=' && e.target.innerText != 'AC' && e.target.innerText != 'Del' && e.target.innerText != 'Sin' && e.target.innerText != 'Cos' && e.target.innerText != 'Tan' && e.target.innerText != 'Sqrt' && e.target.innerText != 'Sqr' && e.target.innerText != 'Log') {

            display.innerText += e.target.innerText;

        } else if (e.target.innerText == '=') {

            result.innerText = eval(display.innerText);
            display.style.visibility = 'hidden'
            result.style.visibility = 'visible'
            display.innerText = result.innerText;

        } else if (e.target.innerText == 'Del') {

            display.innerText = display.innerText.slice(0, -1);

        } else if (e.target.innerText == 'AC') {

            display.innerText = '';
            result.innerText = '';
        } else if (e.target.innerText == 'Sin') {

            result.innerText = (Math.sin(display.innerText * Math.PI / 180));
            visibility();
        } else if (e.target.innerText == 'Cos') {
            result.innerText = (Math.cos(display.innerText * Math.PI / 180));
            visibility();
        } else if (e.target.innerText == 'Tan') {
            result.innerText = (Math.tan((display.innerText) * Math.PI / 180));
            visibility();
        } else if (e.target.innerText == 'Sqrt') {
            result.innerText = Math.sqrt(display.innerText);
            visibility();
        } else if (e.target.innerText == 'Sqr') {
            result.innerText = Math.pow(display.innerText, 2);
            visibility();
        } else if (e.target.innerText == 'Log') {
            result.innerText = (Math.log(display.innerText))
            visibility();
        }
    })
}


//Expanding Scientific Section

document.getElementById('exp-btn').addEventListener('click', function () {

    const btn = document.querySelector('.scientific');

    btn.style.display = 'grid'
})