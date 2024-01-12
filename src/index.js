import  headerCont  from "./pages/header";
import  mainCont  from "./pages/main";
import  menuCont from "./pages/menu"; 
import contactCont from "./pages/contact";
import  footerCont  from "./pages/footer";
import './main.css';

renderHomePage();

function renderHomePage(){
    clearMainContent();  
    headerCont('Home');
    mainCont();
    footerCont();
}

function renderMenuPage(){
    clearMainContent()
    headerCont('Menu');
    menuCont();
    footerCont();
}

function renderContactPage(){
    clearMainContent()
    headerCont('Contact');
    contactCont();
    footerCont();
}

function clearMainContent(){
    const mainContainer = document.getElementById('container');
    mainContainer.innerHTML = ''; 
}

document.addEventListener('click', function (event) {
    const buttonText = event.target.textContent.toLowerCase();

    switch (buttonText) {
        case 'home':
            renderHomePage();
            break;
        case 'menu':
            renderMenuPage();
            break;
        case 'contact':
            renderContactPage();
            break;
    }
});