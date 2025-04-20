import { Button } from "../Button/Button";
import { FormatearFecha } from "../Funciones/FormatearFecha";
import { InfoHover } from "../InfoHover/InfoHover";
import "./Cards.css";

/* function formatearFecha(fechaISO) {
  const fecha = new Date(fechaISO);
  const dia = fecha.getUTCDate();
  const mes = (fecha.getUTCMonth() + 1).toString().padStart(2, "0");
  const año = fecha.getUTCFullYear();
  return `${dia}/${mes}/${año}`;
} */

export const Cards = (data) => {
  const article = document.createElement("article");
  const img = document.createElement("img");
  const section = document.createElement("section");
  const fotoPerson = document.createElement("img");
  const pName = document.createElement("p");
  const pFecha = document.createElement("p");
  const icono = document.createElement("img");
  const divInf = document.createElement("div");
  const divHover = document.createElement("div");

  const buttonVisitar = Button({ text: "Visitar" });
  const infoNumberPhotos = InfoHover({
    type: "numberPhotos",
    text: data.user.total_photos,
  });
  const infoLikes = InfoHover({ type: "likes", text: data.likes });

  article.classList.add("cards");
  img.src = data.urls.regular;
  img.alt = data.alt_description || "Foto de Unsplash";
  const fechaOriginal = data.created_at;
  const fechaFormateada = FormatearFecha(fechaOriginal);
  pFecha.textContent = fechaFormateada;
  pName.textContent = data.user.name;
  fotoPerson.src = data.user.profile_image.medium;
  fotoPerson.alt = "Imagen de usuario";
  fotoPerson.style.borderColor = data.color;
  icono.src = "src/components/Cards/images/icon_upload.png";
  icono.alt = "Icono de UpLoad";
  divInf.classList.add("divInferior");
  img.classList.add("img_ppal");
  pFecha.classList.add("pFecha");
  pName.classList.add("pName");
  fotoPerson.classList.add("img_user");
  icono.classList.add("icono");
  section.classList.add("infoUser");
  buttonVisitar.classList.add("visitar");
  divHover.classList.add("divHover");

  divHover.append(buttonVisitar, infoNumberPhotos, infoLikes);
  divInf.append(icono, pFecha);
  section.append(fotoPerson, pName, divInf);
  article.append(img, section, divHover);

  return article;
};
