const { event } = require("jquery");


function selectStyle(element){
    var another = document.querySelectorAll('.menubar-link');
    var bar     = document.querySelector('#bar');
    
    another.forEach((e) => {
        e.querySelector('a').style.color = '#dbdada';
    });
    
    element.querySelector('a').style.color = '#29a19c';
    
    if(element.innerText == 'Filmes'){
        bar.style.left = '0'
    }
    if(element.innerText == 'Séries'){
        bar.style.left = '100px'
    }
    if(element.innerText == 'Animes'){
        bar.style.left = '200px'
    }
}

function toggleDropdownMenu(element){
    const dropDownMenu = element.nextElementSibling.querySelector('ul');
    const arrow = element.childNodes[1];

    if (dropDownMenu.style.display === "block") {
        dropDownMenu.style.display = "none";
        arrow.style.transform = 'rotate(0deg)';
    } else {
        dropDownMenu.style.display = "block";
        arrow.style.transform = 'rotate(-90deg)';
    }
}

