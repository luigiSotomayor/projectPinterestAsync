import "./InfoHover.css";

export const InfoHover = ( {type, text} ) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");

    div.classList.add("divInfo");
    img.classList.add("imgInfo");
    p.classList.add("pInfo");

    p.textContent = text;
    if (type === "numberPhotos"){
        img.src = "/images/infohover/camara.png";
        img.alt = "Icono de camara";
        div.classList.add("divCamara");
    } else {
        img.src = "/images/infohover/likes.png";
        img.alt = "Icono de Corazón de Likes";
        div.classList.add("divLikes");
    }

    div.append(img, p);
    return div;
}