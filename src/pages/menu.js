const menuCont = function(){

    let contentCont = document.getElementById("container");

    const menu = document.createElement("div");
    menu.id = "menu";
    contentCont.appendChild(menu);

    const containerMenu = document.createElement("div");
    containerMenu.id = "containerMenu";
    menu.appendChild(containerMenu);


    const cardData = [
        { title: "Gyros", text: "Tsatsiki, Fries, Tomato, Onion" },
        { title: "Kalamaki", text: "Pink sauce, Fries, Tomato, Letuce" },
        { title: "Kempap", text: "Pink sauce, Fries, Tomato, Onion" },
        { title: "Loukaniko", text: "Tsatsiki, Fries, Tomato, Onion" },
        { title: "Xaloumi", text: "Pink sauce, Fries, Tomato, Letuce" },
        { title: "Oikologiko", text: "Fries, Pink sauce" },
      ];
      
      cardData.forEach(({ title, text }) => {
        const item = document.createElement("div");
        item.id = "item-card";
      
        const titleElement = document.createElement("h2");
        titleElement.id = "title-card";
        titleElement.textContent = title;
        item.appendChild(titleElement);
      
        const textElement = document.createElement("p");
        textElement.id = "text-card";
        textElement.textContent = text;
        item.appendChild(textElement);
      
        containerMenu.appendChild(item);
      });
        
    return menu;
}

export default menuCont;