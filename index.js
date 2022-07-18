const body = document.querySelector('body');
const select = document.querySelector('#colors');

select.addEventListener("change", getColorTheme);

function getColorTheme() {
    const value = select.value;
    console.log(value);

    switch (value) {
        case 'grey': 
                    body.style.backgroundColor = 'grey'; 
                    select.style.backgroundColor = 'grey'; break;
        case 'lightblue': 
                    body.style.backgroundColor = 'lightblue'; 
                    select.style.backgroundColor = 'lightblue'; break;
        case 'yellow': 
                    body.style.backgroundColor = 'yellow'; 
                    select.style.backgroundColor = 'yellow'; break;
        default: 
                    body.style.backgroundColor = 'white';
                    select.style.backgroundColor = 'white';
    }
}