import { Button } from "../Button/Button";
import { api } from "../Funciones/api";
import { deleteScreen } from "../Funciones/DeleteScreen";
import { showImg } from "../Funciones/ShowImg";
import { Input } from "../Input/Input";
import "./Header.css";

export const Header = () => {
  const header = document.createElement("header");
  const app = document.querySelector("#app");

  const logo = document.createElement("img");
  logo.id = "logoPinterest";
  logo.src = "/images/header/logoPinterest.png";
  logo.alt = "Logo de Pinterest";
  logo.addEventListener("click", async function () {
    deleteScreen();
    const data = await api(sessionStorage.getItem('query'));
    showImg(data);
  });

  const iconBell = document.createElement("img");
  iconBell.id = "iconBell";
  iconBell.src = "/images/header/bellIcon.png";
  iconBell.alt = "Icono de Campana";

  const commentDots = document.createElement("img");
  commentDots.id = "commentDots";
  commentDots.src = "/images/header/comment_dots.png";
  commentDots.alt = "Icono de comentarios";

  const user = document.createElement("img");
  user.id = "user";
  user.src = "/images/header/user.png";
  user.alt = "Icono de usuario";

  const buttonInicio = Button({ text: "Inicio" });
  const buttonExplorar = Button({ text: "Explorar" });
  const buttonCrear = Button({ text: "Crear" });

  const inputBuscar = Input({ text: "Buscar" });

  header.append(logo, buttonInicio, buttonExplorar, buttonCrear, inputBuscar);
  header.append(iconBell, commentDots, user);
  app.append(header);
};
