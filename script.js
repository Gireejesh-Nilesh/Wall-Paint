const btn = document.querySelector("button");
const main = document.querySelector("main");

const arr = [
  "./images/img1.webp",
  "./images/img2.webp",
  "./images/img3.webp",
  "./images/img4.webp",
  "./images/img5.webp",
  "./images/img6.webp",
  "./images/img7.webp",
  "./images/img8.webp",
  "./images/img9.webp",
  "./images/img10.webp",
  "./images/img11.webp",
];

btn.addEventListener("click", () => {
  const ele = document.createElement("div");
  const rot = Math.random() * 360;

  ele.style.width = "100px";
  ele.style.height = "100px";
  ele.style.backgroundImage = `url(${
    arr[Math.floor(Math.random() * arr.length)]
  })`;
  ele.style.backgroundSize = "cover";
  ele.style.rotate = `${rot}deg`;

  ele.style.position = "absolute";
  ele.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
  ele.style.left = `${Math.random() * (window.innerWidth - 100)}px`;

  main.appendChild(ele);
});
