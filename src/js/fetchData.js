import { showLoder } from "./loader.js";

export const fetchData = async (url) => {
  try {
    showLoder(true);

    const req = await fetch(url);

    if (!req.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await req.json();

    showLoder(false);
    return data;
  } catch (error) {
    showLoder(false);
    console.error("Fetch error:", error);
    throw error;
  }
};
