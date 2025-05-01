import { errorResponse } from "./ErrorResponse";

export const api = async (query) => {
  const accessKey = "YCDPHTR2UW5IqNTaWpBeemuwdAYMu-zrDVWff4G5azg";

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?count=20&query=${query}`,
      {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      }
    );
    if (!response.ok) {
      errorResponse();
      return false;
    } else {
      const datas = await response.json();
      return datas;
    }
  } catch (error) {
    console.error("Error al hacer la solicitud a Unsplash: ", error);
  }
};
