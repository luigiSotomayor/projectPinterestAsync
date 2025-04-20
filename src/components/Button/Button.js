import "./Button.css";

export const Button = ( {text, fnc = () => {} }) => {
    const button = document.createElement("button");
    
    button.textContent = text;
    button.addEventListener("click", fnc);
    if (text === "Visitar"){
        button.classList.add("buttonVisitar");
    } else {
        button.classList.add("common_button");
    }

    return button;
} 