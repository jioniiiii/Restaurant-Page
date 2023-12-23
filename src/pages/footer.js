const footerCont = function(){

    let contentCont = document.getElementById("container");

    const footer = document.createElement("div");
    footer.id = "footer";
    footer.innerHTML = "footer works";
    contentCont.appendChild(footer);

    return footer;

}

export default footerCont;
