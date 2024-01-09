const menuCont = function(){

    let contentCont = document.getElementById("container");

    const menu = document.createElement("div");
    menu.id = "menu";
    contentCont.appendChild(menu);

    const containerMenu = document.createElement("div");
    containerMenu.id = "containerMenu";
    menu.appendChild(containerMenu);
    
    return menu;
}

export default menuCont;