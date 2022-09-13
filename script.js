const tombol = document.getElementById("tombol");
const input = document.getElementById("input");
const boxdua = document.querySelector(".dua");
const judul = document.querySelector(".judul");
const boxsatu = document.querySelector(".satu");

let sample = [
  {
    chat: "Good to hear that 💖, how i can help you?",
  },
  {
    chat: "Hopefully success in next time ✨",
  },
  {
    chat: "See you next time 🙌",
  },
  {
    chat: "Gm Sir 😁",
  },
  {
    chat: "Are you lonely ? need friend to talk ? 😊",
  },
  {
    chat: "Let's play with me ! ✨",
  },
];

let kotakKiri = (arr) => {
  let random = Math.round(Math.random() * sample.length);
  let kotak = document.createElement("div");
  kotak.className = "box dua";
  let h4 = document.createElement("h4");
  h4.textContent = sample[random].chat;
  kotak.append(h4);
  arr.after(kotak);
};

input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    let ketik = input.value;
    let kotak = document.createElement("div");
    kotak.className = "box satu";
    let h4 = document.createElement("h4");
    h4.textContent = ketik;
    kotak.append(h4);
    boxdua.after(kotak);

    setTimeout(() => {
      kotakKiri(boxdua.nextElementSibling);
      console.log(boxdua.nextElementSibling.nextElementSibling);
      input.value = "";
    }, 1500);
  }
});

tombol.addEventListener("click", (e) => {
  let ketik = input.value;
  let kotak = document.createElement("div");
  kotak.className = "box satu";
  let h4 = document.createElement("h4");
  h4.textContent = ketik;
  kotak.append(h4);
  boxdua.after(kotak);

  setTimeout(() => {
    kotakKiri(boxdua.nextElementSibling);
    console.log(boxdua.nextElementSibling.nextElementSibling);
    input.value = "";
  }, 1500);
});
