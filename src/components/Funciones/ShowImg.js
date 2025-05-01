import { Cards } from "../Cards/Cards";

export const showImg = (datas) => {
  const app = document.querySelector("#app");
  const main = document.createElement("section");
  main.classList.add("section_main");
  for (const data of datas) {
    const article = Cards(data);
    main.append(article);
  }
  app.append(main);
};