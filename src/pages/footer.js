const footerCont = function(){

    let contentCont = document.getElementById("container");

    const footer = document.createElement("div");
    footer.id = "footer";
    contentCont.appendChild(footer);

    const containerfooter = document.createElement("div");
    containerfooter.id = "containerfooter";
    containerfooter.textContent = "Porject for the TOP";
    footer.appendChild(containerfooter);
    //add image
    return footer;

}

export default footerCont;
