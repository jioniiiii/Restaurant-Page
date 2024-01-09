const mainCont = function(){

    let contentCont = document.getElementById("container");

    const main = document.createElement("div");
    main.id = "main";
    contentCont.appendChild(main);

    const containerMain = document.createElement("div");
    containerMain.id = "containerMain";
    main.appendChild(containerMain);

    const title = document.createElement("h1");
    title.id = "title";
    title.textContent = "The best soublaki you ever had!";
    containerMain.appendChild(title);

    const text = document.createElement("p");
    text.id = "text";
    text.textContent = "To steki tou Manoli is a restaurant located on Athens. It has awesome recipes and hte most talented chefs in town!";
    containerMain.appendChild(text);

    const button = document.createElement("button");
    button.id = "button";
    button.textContent = "GET RESERVATION NOW";
    containerMain.appendChild(button);



    return main;
}

export default mainCont;