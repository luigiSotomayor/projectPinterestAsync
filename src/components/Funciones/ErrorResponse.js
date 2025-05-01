import { alertDialog } from "./AlertDialog";
import { showImg } from "./ShowImg";

export async function errorResponse() {
    alertDialog();
    const data = await api("cats");
    showImg(data);
  }