import myImage from "/src/img/logo.png";

const headerCont = function(){

    let contentCont = document.getElementById("container");

    const header = document.createElement("div");
    header.id = "header";
    contentCont.appendChild(header);

    const containerHeader = document.createElement("div");
    containerHeader.id = "containerHeader";
    header.appendChild(containerHeader);

    const logo = new Image();
    logo.id = "logo";
    logo.src = myImage;
    containerHeader.appendChild(logo);

    const nav = document.createElement("nav");
    nav.id = "nav";
    const btnTexts = ["Home", "Menu", "Contact"];

    btnTexts.forEach((text, index) => {
        const button = document.createElement("button");
        button.id = "navButton" + index;
        button.classList.add("navButton");
        button.textContent = text;
        nav.appendChild(button);
    });

    containerHeader.appendChild(nav);

    return header;

}

export default headerCont;