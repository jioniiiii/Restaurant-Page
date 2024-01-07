const headerCont = function(){

    let contentCont = document.getElementById("container");

    const header = document.createElement("div");
    header.id = "header";
    contentCont.appendChild(header);

    const containerHeader = document.createElement("div");
    containerHeader.id = "containerHeader";
    header.appendChild(containerHeader);

    const logo = document.createElement("div");
    logo.id = "logo";
    logo.innerHTML = "Logo";
    containerHeader.appendChild(logo)

    const menu = document.createElement("ul");
    menu.id = "menu";
    const linkTexts = ["Home", "Menu", "Contact"];

    linkTexts.forEach((text, index) => {
        
        const list = document.createElement("li");
        list.id = "list";
        const link = document.createElement("a");
        link.id = "link";

        //set href and textContent for the link
        link.href = `your_link_url_${index + 1}`;
        link.textContent = text;

        list.appendChild(link);
        menu.appendChild(list);
    });
    
    containerHeader.appendChild(menu);
    

    //for logo later maybe
    //const logoImage = document.createElement("img");
    //logoImage.src = "path/to/your/image.jpg"; 
    //logoImage.alt = "Logo Alt Text"; 
    //logo.appendChild(logoImage);

    return header;

}

export default headerCont;