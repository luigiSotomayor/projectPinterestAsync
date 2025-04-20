import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { ShowCats } from "../ShowCats/ShowCats";
import "./Header.css";

export const Header = () => {
    const header = document.createElement("header");
    const app = document.querySelector("#app");

    const logo = document.createElement("img");
    logo.id = "logoPinterest";
    logo.src = "src/components/Header/images/logoPinterest.png";
    logo.alt = "Logo de Pinterest";
    logo.addEventListener('click', ShowCats);

    const iconBell = document.createElement("img");
    iconBell.id = "iconBell";
    iconBell.src = "src/components/Header/images/bellIcon.png";
    iconBell.alt= "Icono de Campana";

    const commentDots = document.createElement("img");
    commentDots.id = "commentDots";
    commentDots.src = "src/components/Header/images/comment_dots.png";
    commentDots.alt = "Icono de comentarios";

    const user = document.createElement("img");
    user.id = "user";
    user.src = "src/components/Header/images/user.png";
    user.alt = "Icono de usuario";

    const buttonInicio = Button({text: "Inicio"});
    const buttonExplorar = Button({text: "Explorar"});
    const buttonCrear = Button({text: "Crear"});

    const inputBuscar = Input({text: "Buscar"});

    header.append(logo, buttonInicio, buttonExplorar, buttonCrear, inputBuscar);
    header.append(iconBell, commentDots, user);
    app.append(header);
}