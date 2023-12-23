const mainCont = function(){

    let contentCont = document.getElementById("container");

    const main = document.createElement("div");
    main.id = "main";
    main.innerHTML = "main works";
    contentCont.appendChild(main);

    return main;
}

export default mainCont;