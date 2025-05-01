import Swal from "sweetalert2";

export const errorDialog = () => {
  Swal.fire({
    title: "ERROR: fallo en la Conexión",
    text: "Solicitud no autorizada. Por favor, vuelva a recargar la página.",
    icon: "error",
    iconColor: "black",
    color: "black",
    animation: "True",
    background:"rgb(165, 25, 25)",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#2b3eeb"
  })
}