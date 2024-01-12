const contactCont = function(){

    let contentCont = document.getElementById("container");

    const contact = document.createElement("div");
    contact.id = "contact";
    contentCont.appendChild(contact);

    const containerContact = document.createElement("div");
    containerContact.id = "containerContact";
    contact.appendChild(containerContact);
        
    return contact;
}

export default contactCont;