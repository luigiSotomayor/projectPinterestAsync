export const deleteScreen = () => {
  const delSection = document.querySelector(".section_main");
  if (delSection) {
    delSection.remove();
  }
  return;
};
