import { alertDialog } from "../Funciones/AlertDialog";
import { Cards } from "../Cards/Cards";
import { ShowCats } from "../ShowCats/ShowCats";
import "./Main.css";

export const Main = () => {
  const accessKey = "YCDPHTR2UW5IqNTaWpBeemuwdAYMu-zrDVWff4G5azg";
  const app = document.querySelector("#app");
  const main = document.createElement("section");
  const input = document.querySelector(".common_input");
  main.classList.add("section_main");
  main.id = `mainSection`;

  document.addEventListener(`DOMContentLoaded`, function () {
    ShowCats();
  });

  let query = "";
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      query = event.target.value;
      const delSection = document.getElementById("deletingSection");
      if (delSection) {
        delSection.remove();
      }
      main.innerHTML = ``;
      fetch(`https://api.unsplash.com/photos/random?count=20&query=${query}`, {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      })
        .then((response) => {
          if (response.status === 404) {
            ShowCats();
            alertDialog();
          } else {
            return response.json();
          }
        })
        .then((datas) => {
          event.target.value = "";
          if (typeof(datas) === "object") {
            for (const data of datas) {
              const article = Cards(data);
              main.append(article);
            }
            app.append(main);
          }
        })
        .catch((error) => console.error("Error al cargar la imagen:", error));
    }
  });
};
