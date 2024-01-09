import  headerCont  from "./pages/header";
import  mainCont  from "./pages/main";
import  menuCont from "./pages/menu"; 
import  footerCont  from "./pages/footer";
import './main.css';

renderHomePage();

function renderHomePage(){
    clearMainContent();  
    headerCont();
    mainCont();
    footerCont();
}

function renderMenuPage(){
    clearMainContent()
    headerCont();
    menuCont();
    footerCont();
}

function clearMainContent(){
    const mainContainer = document.getElementById('container');
    mainContainer.innerHTML = ''; 
}

document.addEventListener('click', function (event) {
    const buttonText = event.target.textContent.toLowerCase();
    const navButtons = document.querySelectorAll('.navButton');

    // Remove 'active' class from all buttons
    navButtons.forEach(button => {
        button.classList.remove('active');
    });
    if (event.target.classList.contains('navButton')) {
        event.target.classList.add('active');
    }

    switch (buttonText) {
        case 'home':
            renderHomePage();
            break;
        case 'menu':
            renderMenuPage();
            break;
    }

    // Add 'active' class to the clicked button
    
});