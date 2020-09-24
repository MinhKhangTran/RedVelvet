import { data } from "./disco.js";
const disco = document.querySelector(".disco");

disco.innerHTML = data
  .map((album) => {
    return `<div class="links">
    <img
      src="${album.img}"
      alt=""
      class="rounded"
      width="350"
    />
  </div>
  <div class="rechts flex md:flex-col items-center justify-center">
    <h1 class="text-red-600 pr-8 md:pr-0 font-bold text-lg md:text-2xl">
      ${album.name}
    </h1>
    <h2 class="text-red-600 pl-8 md:pl-0 font-bold text-lg md:text-2xl">
      ${album.Release_Date}
    </h2>
  </div>`;
  })
  .join("");
