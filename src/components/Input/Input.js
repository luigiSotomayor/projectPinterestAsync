import "./Input.css";

export const Input = ({text, fnc = () => {} }) => {
    const input = document.createElement("input");

    input.classList.add("common_input");
    input.placeholder = text;
    input.addEventListener("keyup", fnc);

    return input;
}