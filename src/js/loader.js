const loader = document.querySelector(".loader-wrapper");

export const showLoder = (status) => {
  if (status === true) {
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
  }
};
