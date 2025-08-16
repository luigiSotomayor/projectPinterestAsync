import Swal from "sweetalert2";

export const alertDialog = () => {
  Swal.fire({
    title: "ERROR: búsqueda fallida",
    text: "El criterio de búsqueda introducido no ha obtenido respuesta. Te muestro unos gatitos en su lugar.",
    icon: "error",
    iconColor: "black",
    color: "black",
    animation: "True",
    imageUrl: "/images/main/gatitos.jpg",
    imageWidth: 60,
    imageHeight: 60,
    background:" #c58d47",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#2b3eeb"
  })
}