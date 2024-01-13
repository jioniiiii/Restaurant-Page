import myImage from "/src/img/maps.png";

const contactCont = function(){

    let contentCont = document.getElementById("container");

    const contact = document.createElement("div");
    contact.id = "contact";
    contentCont.appendChild(contact);

    const containerContact = document.createElement("div");
    containerContact.id = "containerContact";
    contact.appendChild(containerContact);

    const info1 = document.createElement("div");
    const info2 = document.createElement("div");
    const infoCont = document.createElement("div");
    info1.id = "info";
    info2.id = "info";
    infoCont.id = "infoCont";
    const location = document.createElement("p");
    location.textContent = "Λεωφ. Ειρήνης 179, Πέραμα 188 63";
    const telephone = document.createElement("p");
    telephone.textContent = "123123123";
    const icon1 = document.createElement("i");
    const icon2 = document.createElement("i");
    icon1.className = "material-symbols-outlined";
    icon1.innerHTML = "call";
    icon2.className = "material-symbols-outlined";
    icon2.innerHTML = "location_on";
    
    info1.appendChild(icon1);
    info1.appendChild(telephone);
    info2.appendChild(icon2);
    info2.appendChild(location);
    infoCont.appendChild(info1);
    infoCont.appendChild(info2);
    containerContact.appendChild(info1);
    containerContact.appendChild(info2);

    const maps = new Image();
    maps.id = "maps";
    maps.src = myImage;
    containerContact.appendChild(maps);
        
    return contact;
}

export default contactCont;