import { Cards } from "../Cards/Cards";

export const ShowCats = () => {
    const accessKey = "YCDPHTR2UW5IqNTaWpBeemuwdAYMu-zrDVWff4G5azg";
    const app = document.querySelector("#app");
    const sectionTemp = document.createElement("section");
    sectionTemp.classList.add("section_main");
    sectionTemp.id = `deletingSection`;
    const delSection = document.getElementById("mainSection");
      if (delSection) {
        delSection.remove();
      }
    fetch(`https://api.unsplash.com/photos/random?count=10&query=cats`, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    })
      .then((response) => response.json())
      .then((datas) => {
        for (const data of datas) {
          const article = Cards(data);
          sectionTemp.append(article);
        }
        app.append(sectionTemp);
      })
      .catch((error) => console.error("Error al cargar la imagen:", error));
};
