import { Button } from "../Button/Button";
import { FormatearFecha } from "../Funciones/FormatearFecha";
import { InfoHover } from "../InfoHover/InfoHover";
import "./Cards.css";

export const Cards = (data) => {
  const fechaOriginal = data.created_at;
  const fechaFormateada = FormatearFecha(fechaOriginal);
  const cardHtml = `
    <article class="cards">
      <img class="img_ppal" src="${data.urls.regular}" alt="${data.alt_description || "Foto de Unsplash"}">
      <section class="infoUser">
        <img class="img_user" src="${data.user.profile_image.medium}" alt="Imagen de Usuario" style="border-color: ${data.color}">
        <p class="pName">${data.user.name}</p>
        <div class="divInferior">
          <img class="icono" src="/images/cards/icon_upload.png" alt="Icono de Upload">
          <p class="pFecha">${fechaFormateada}</p>
        </div>
      </section>
      <div class="divHover"></div>
    </article>
  `;
  const temp = document.createElement("div");
  temp.innerHTML = cardHtml;
  const article = temp.querySelector(".cards");
  const buttonVisitar = Button({ text: "Visitar" });
  buttonVisitar.classList.add("visitar");
  const infoNumberPhotos = InfoHover({
    type: "numberPhotos",
    text: data.user.total_photos,
  });
  const infoLikes = InfoHover({ type: "likes", text: data.likes });

  const divHover = article.querySelector(".divHover");
  divHover.append(buttonVisitar, infoNumberPhotos, infoLikes);
  article.append(divHover);

  return article;
};
