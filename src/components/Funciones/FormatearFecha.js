export const FormatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    const dia = fecha.getUTCDate();
    const mes = (fecha.getUTCMonth() + 1).toString().padStart(2, "0");
    const año = fecha.getUTCFullYear();
    return `${dia}/${mes}/${año}`;
  }