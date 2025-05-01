import "./Main.css";
import { api } from "../Funciones/api";
import { showImg } from "../Funciones/ShowImg";
import { deleteScreen } from "../Funciones/DeleteScreen";

export const Main = async () => {
  const input = document.querySelector(".common_input");
  try {
  const datas = await api("cats");
  showImg(datas);
  } catch (error){
    console.error("Error cargando las imágenes:", error);
  }
  
  let numberOfQueries = 0;
  let query = "";
  input.addEventListener("keydown", async function (event) {
    const main = document.querySelector(".section_main");
    if (event.key === "Enter") {
      numberOfQueries++;
      query = event.target.value;
      deleteScreen();
      main.innerHTML = ``;
      event.target.value = "";
      if (numberOfQueries === 1){
        sessionStorage.setItem('query', query);
      }
      const pictures = await api(`${query}`);
      if (pictures == false){
      } else {
        showImg(pictures);
      }
    }
  })
};
