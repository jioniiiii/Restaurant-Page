const footerCont = function(){

    let contentCont = document.getElementById("container");

    const footer = document.createElement("div");
    footer.id = "footer";
    contentCont.appendChild(footer);

    const containerfooter = document.createElement("div");
    containerfooter.id = "containerfooter";
    footer.appendChild(containerfooter);
    containerfooter.textContent = "Porject for the TOP"
    //add image
    return footer;

}

export default footerCont;
