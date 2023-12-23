const headerCont = function(){

    let contentCont = document.getElementById("container");

    const header = document.createElement("div");
    header.id = "header";
    header.innerHTML = "header works";
    contentCont.appendChild(header);

    return header;

}

export default headerCont;